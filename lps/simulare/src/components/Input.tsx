import { Input as InputUi, InputProps } from 'theme-ui';

const Input = ({ sx, ...props }: InputProps) => {
  return (
    <InputUi
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
};

export default Input;
