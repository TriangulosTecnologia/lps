import Image from 'next/image';
import { Box } from 'theme-ui';

import whatsappFilled from '../../../public/whatsapp-filled.png';

const WhatsAppFilled = () => {
  return (
    <Box sx={{ width: '50%', height: '50%' }}>
      <Image src={whatsappFilled} alt="WhatsApp" />
    </Box>
  );
};

export default WhatsAppFilled;
