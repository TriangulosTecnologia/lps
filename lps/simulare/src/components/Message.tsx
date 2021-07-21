import { Box, Flex, Text, ThemeUIStyleObject } from 'theme-ui';

const Emphasis = ({ children }: { children: React.ReactNode }) => {
  return (
    <Text as="span" sx={{ fontWeight: 700, color: 'primary' }}>
      {children}
    </Text>
  );
};

const Message = ({
  children,
  sx,
}: {
  children: React.ReactNode;
  sx?: ThemeUIStyleObject;
}) => {
  return (
    <Flex sx={sx}>
      <Box
        sx={{
          width: '4px',
          backgroundColor: 'primary',
          borderRadius: '2px',
          marginRight: [7, 8, 9],
        }}
      />
      <Box>{children}</Box>
    </Flex>
  );
};

Message.Emphasis = Emphasis;

export default Message;
