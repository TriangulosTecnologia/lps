import dynamic from 'next/dynamic';

import { FullpageProvider } from '../components/Fullpage';
import Hero1 from '../components/Hero1';

const Hero2 = dynamic(() => import('../components/Hero2'));
const Features = dynamic(() => import('../components/Features'));

const Home = () => {
  return (
    <FullpageProvider
      {...{
        scrollingSpeed: 1000,
        verticalCentered: false,
        scrollOverflow: true,
      }}
    >
      <Hero1 />
      <Hero2 />
      <Features />
    </FullpageProvider>
  );
};

export default Home;
