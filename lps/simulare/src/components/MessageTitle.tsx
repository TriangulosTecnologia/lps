import { Heading, Text } from 'theme-ui';

import Message from './Message';

const MessageTitle = ({ text, title }: { text: string; title: string }) => {
  return (
    <Message sx={{ marginLeft: [0, 10, 11, 12] }}>
      <Text sx={{ fontSize: ['sm', 'xl'] }}>{text}</Text>
      <Heading
        as="h2"
        sx={{
          fontSize: ['2xl', '3xl', '4xl', '5xl'],
          lineHeight: ['2xl', '3xl', '4xl', '5xl'],
          textTransform: 'uppercase',
        }}
      >
        {title}
      </Heading>
    </Message>
  );
};

export default MessageTitle;
