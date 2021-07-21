import dynamic from 'next/dynamic';

import { FullpageProvider } from '../components/Fullpage';
import Hero1 from '../components/Hero1';

const Contact = dynamic(() => import('../components/Contact'));
const Hero2 = dynamic(() => import('../components/Hero2'));
const Features = dynamic(() => import('../components/Features'));
const FormRegister = dynamic(() => import('../components/FormRegister'));

const Home = () => {
  return (
    <FullpageProvider
      {...{
        scrollingSpeed: 1000,
        verticalCentered: false,
        scrollOverflow: true,
        anchors: ['hero1', 'hero2', 'features', 'register', 'contact'],
      }}
    >
      <Hero1 />
      <Hero2 />
      <Features />
      <FormRegister />
      <Contact />
    </FullpageProvider>
  );
};

export default Home;
