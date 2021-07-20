import React from 'react';

const Send = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.0644 2.97223L16.0102 23.0278L11.9792 14.0028L2.90948 9.99167L23.0644 2.97223Z"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23.0644 2.97223L11.9792 14.0028"
        stroke="#D9D9D9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Send;
