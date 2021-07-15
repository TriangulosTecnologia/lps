import { Box } from 'theme-ui';

const Message: React.FC = ({ children }) => {
  return (
    <Box
      sx={{
        borderLeft: '3px solid',
        borderColor: 'primary',
        borderRadius: 3,
        paddingLeft: [15, 20, 25, 30],
      }}
    >
      {children}
    </Box>
  );
};

export default Message;
