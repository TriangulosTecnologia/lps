import { Box, Text } from 'theme-ui';

const Emphasis = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text as="span" sx={{ fontWeight: 700, color: 'primary' }}>
      {children}
    </Text>
  );
};

const Message = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        borderLeft: '3px solid',
        borderColor: 'primary',
        borderRadius: 3,
        paddingLeft: [7],
      }}
    >
      {children}
    </Box>
  );
};

Message.Emphasis = Emphasis;

export default Message;
