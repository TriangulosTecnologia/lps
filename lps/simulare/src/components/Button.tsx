import { Box, Flex, useThemeUI } from 'theme-ui';

const Button: React.FC<{ color?: string }> = ({
  children,
  color = 'primary',
}) => {
  const { theme } = useThemeUI();

  const colors = theme.colors as any;

  const fill = colors[color] || colors.primary;

  return (
    <Flex
      role="button"
      sx={{
        width: 54,
        height: 54,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
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
          <ellipse cx="3" cy="25.5" rx="3" ry="3" fill={fill} strokeWidth={0} />
        </svg>
      </Box>
      <Box sx={{}}>{children}</Box>
    </Flex>
  );
};

export default Button;
