import {
  Box,
  Flex,
  Text,
  useThemeUI,
  ThemeUIStyleObject,
  Button as ButtonUi,
  ButtonProps as ButtonPropsUi,
} from 'theme-ui';
import { keyframes } from '@emotion/react';

import {
  ArrowDown,
  Email,
  EmailFilled,
  Perfil,
  Send,
  Whatsapp,
  WhatsAppFilled,
} from './icons';

const icons = {
  'arrow-down': ArrowDown,
  email: Email,
  'email-filled': EmailFilled,
  perfil: Perfil,
  whatsapp: Whatsapp,
  'whatsapp-filled': WhatsAppFilled,
  send: Send,
};

type IconType = keyof typeof icons;

export type ButtonProps = {
  color?: 'primary' | 'secondary';
  label?: string;
  icon: IconType;
  sx?: ThemeUIStyleObject;
  onClick?: () => void;
} & ButtonPropsUi;

const drawHover = keyframes({ to: { strokeDashoffset: 0 } });

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  icon,
  label,
  sx,
  onClick,
}) => {
  const { theme } = useThemeUI();

  const colors = theme.colors as any;

  const fill = colors[color] || colors.primary;

  const Icon = icons[icon];

  return (
    <ButtonUi
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        ...sx,
      }}
      onClick={onClick}
    >
      {label && (
        <Text
          sx={{
            marginRight: [7],
            fontSize: ['sm', 'base', 'lg', null, 'xl'],
            fontFamily: 'body',
          }}
        >
          {label}
        </Text>
      )}

      <Flex
        sx={{
          width: [54, 64, 72],
          height: [54, 64, 72],
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            '#pathCircle': {
              stroke: fill,
              strokeDasharray: 360,
              strokeDashoffset: 360,
              animation: `${drawHover} 0.7s linear forwards`,
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        >
          <svg
            viewBox="0 0 76 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="38.842"
              cy="37"
              r="36"
              transform="rotate(180 38.842 37)"
              stroke={colors.gray80}
              strokeDasharray="0"
              strokeDashoffset="0"
            />
            <circle
              id="pathCircle"
              cx="38.842"
              cy="37"
              r="36"
              transform="rotate(180 38.842 37)"
              stroke="transparent"
              strokeDasharray="0"
              strokeDashoffset="0"
            />
            <circle cx="2.84211" cy="37" r="2.84211" fill={fill} />
          </svg>
        </Box>
        <Icon />
      </Flex>
    </ButtonUi>
  );
};

export default Button;
