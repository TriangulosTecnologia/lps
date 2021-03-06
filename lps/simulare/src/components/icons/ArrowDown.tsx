import React from 'react';

const ArrowDown = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="50%"
      viewBox="0 0 9 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.31312 19.9676C4.50838 20.1629 4.82496 20.1629 5.02022 19.9676L8.2022 16.7856C8.39746 16.5904 8.39746 16.2738 8.2022 16.0785C8.00694 15.8833 7.69036 15.8833 7.4951 16.0785L4.66667 18.9069L1.83824 16.0785C1.64298 15.8833 1.3264 15.8833 1.13113 16.0785C0.935873 16.2738 0.935873 16.5904 1.13113 16.7856L4.31312 19.9676ZM4.16667 0.666687L4.16667 19.6141L5.16667 19.6141L5.16667 0.666687L4.16667 0.666687Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowDown;
