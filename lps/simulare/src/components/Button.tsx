import {
  Box,
  Flex,
  Text,
  useThemeUI,
  ThemeUIStyleObject,
  Button as ButtonUi,
  ButtonProps as ButtonPropsUi,
} from 'theme-ui';

import { ArrowDown, Perfil, Whatsapp, Email, Send } from './icons';

const icons = {
  'arrow-down': ArrowDown,
  email: Email,
  perfil: Perfil,
  whatsapp: Whatsapp,
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
        <Text sx={{ marginRight: [7], fontSize: ['sm'], fontFamily: 'body' }}>
          {label}
        </Text>
      )}

      <Flex
        sx={{
          width: 54,
          height: 54,
          position: 'relative',
          justifyContent: 'center',
          alignItems: 'center',
          '&:hover': {
            '.strokeFill': {
              stroke: fill,
            },
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              className="strokeFill"
              cx="27"
              cy="27"
              rx="24"
              ry="24"
              stroke={colors.gray80}
            />
            <ellipse
              cx="3"
              cy="25.5"
              rx="3"
              ry="3"
              fill={fill}
              strokeWidth={0}
            />
          </svg>
        </Box>
        <Icon />
      </Flex>
    </ButtonUi>
  );
};

export default Button;
