import Image from 'next/image';
import { Box } from 'theme-ui';

import mailFilled from '../../../public/mail-filled.png';

const EmailFilled = () => {
  return (
    <Box sx={{ width: '50%', height: '50%' }}>
      <Image src={mailFilled} alt="E-mail" />
    </Box>
  );
};

export default EmailFilled;
