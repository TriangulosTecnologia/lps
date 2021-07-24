import React from 'react';
import InputMaskUi, { Props, ReactInputMask } from 'react-input-mask';
import { ThemeUIStyleObject } from 'theme-ui';
import Input from './Input';

type InputMaskProps = {
  sx?: ThemeUIStyleObject;
} & Props;

const InputMask = React.forwardRef<ReactInputMask, InputMaskProps>(
  ({ sx, ...props }, ref) => (
    <InputMaskUi {...props} ref={ref}>
      {(inputProps: Props) => {
        return <Input sx={sx} {...inputProps} />;
      }}
    </InputMaskUi>
  )
);
InputMask.displayName = 'input-mask';

export default InputMask;
