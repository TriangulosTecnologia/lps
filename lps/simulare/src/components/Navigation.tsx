import { Flex, useThemeUI } from 'theme-ui';

// const circleDistance = 50;

// eslint-disable-next-line no-empty-pattern
const Navigation = ({}: { circles?: number }) => {
  const { theme } = useThemeUI();

  const colors = theme.colors as any;

  // const getCy = () => {
  //   // return circleDistance * index * 0 + 500;
  //   return '10%';
  // };

  return (
    <Flex
      sx={{ position: 'relative', height: '100%', backgroundColor: 'blue' }}
    >
      <Flex
        sx={{ position: 'absolute', height: '100%', backgroundColor: 'red' }}
      >
        <svg
          width="20"
          height="100%"
          viewBox="0 0 20 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="10"
            y1="0"
            x2="10"
            y2="1000"
            stroke={colors.gray80}
            strokeLinecap="round"
          />
        </svg>
      </Flex>

      <Flex sx={{ position: 'absolute' }}>
        <svg
          width="20"
          height="1000"
          viewBox="0 0 20 1000"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            // key={index}
            cx="10.5"
            cy={10}
            r="4.5"
            fill={colors.gray80}
          />
        </svg>
      </Flex>
    </Flex>
  );

  // return (
  //   <svg
  //     width="21"
  //     height="100%"
  //     viewBox="0 0 21 1000"
  //     fill="none"
  //     xmlns="http://www.w3.org/2000/svg"
  //   >
  //     <line
  //       x1="10.5"
  //       y1="0"
  //       x2="10.5"
  //       y2="1000"
  //       stroke={colors.gray80}
  //       strokeLinecap="round"
  //     />
  //     <g alignmentBaseline="mathematical">
  //       {[...Array(circles)].map((_, index) => {
  //         return (
  //           <circle
  //             key={index}
  //             cx="10.5"
  //             cy={getCy(index)}
  //             r="4.5"
  //             fill={colors.gray80}
  //           />
  //         );
  //       })}
  //     </g>
  //     {/* <circle cx="10.5" cy="275.5" r="4.5" fill="#5C5C5C" />
  //     <circle cx="10.5" cy="230.5" r="4.5" fill="#5C5C5C" />
  //     <circle cx="10.5" cy="319.5" r="4.5" fill="#24BB78" />
  //     <circle cx="10.5" cy="364.5" r="4.5" fill="#5C5C5C" />
  //     <circle cx="10.5" cy="409.5" r="4.5" fill="#5C5C5C" />
  //     <circle cx="10.5" cy="319.5" r="9.5" stroke="#24BB78" /> */}
  //   </svg>
  // );
};

export default Navigation;
