import { Input as InputUi, InputProps } from 'theme-ui';

const Input = ({ sx, ...props }: InputProps) => {
  return (
    <InputUi
      sx={{
        border: 'none',
        borderBottom: '2px solid #808080',
        borderRadius: 0,
        fontSize: ['base'],
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
};

export default Input;
