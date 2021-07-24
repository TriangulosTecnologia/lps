import React from 'react';
import { Input as InputUi, InputProps } from 'theme-ui';

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ sx, ...props }, ref) => {
    return (
      <InputUi
        ref={ref}
        sx={{
          border: 'none',
          borderBottom: '2px solid #808080',
          borderRadius: 0,
          lineHeight: ['sm', '2xl'],
          fontSize: ['base', '2xl'],
          paddingBottom: [6, 7],
          ':focus': {
            outline: 0,
            borderBottomColor: '#FFFFFF',
            color: '#FFFFFF',
          },
          ...sx,
        }}
        {...props}
      />
    );
  }
);

Input.displayName = 'input';

export default Input;
