import { Flex, useThemeUI } from 'theme-ui';

import { useFullpage } from './Fullpage';

const circleDistance = 60;

const circleRadius = 5;

const Navigation = ({ circles = 0 }: { circles?: number }) => {
  const { theme } = useThemeUI();

  const { currentSection, moveTo } = useFullpage();

  const colors = theme.colors as any;

  return (
    <Flex sx={{ height: '100%', paddingTop: 10 }}>
      <svg
        width="3"
        height="100%"
        viewBox="0 0 3 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="2"
          y1="0"
          x2="2"
          y2="1000"
          stroke={colors.gray80}
          strokeWidth={1}
          strokeLinecap="round"
        />
      </svg>
      <Flex
        sx={{
          height: '100%',
          marginLeft: `-14px`,
          circle: {
            cursor: 'pointer',
          },
        }}
      >
        <svg
          width={5 * circleRadius}
          viewBox={`-${2.5 * circleRadius} 0 ${5 * circleRadius} ${
            (circles - 1) * circleDistance
          }`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(circles)].map((_, index) => {
            return (
              <circle
                onClick={() => {
                  moveTo?.(index + 1);
                }}
                key={index}
                cx={0}
                cy={circleDistance * index}
                r={circleRadius}
                fill={currentSection === index ? colors.primary : colors.gray80}
              />
            );
          })}
          <circle
            cx={0}
            cy={circleDistance * currentSection}
            r={2 * circleRadius}
            stroke={colors.primary}
            strokeWidth={1}
          />
        </svg>
      </Flex>
    </Flex>
  );
};

export default Navigation;
