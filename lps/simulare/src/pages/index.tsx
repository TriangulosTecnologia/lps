import ReactFullpage from '@fullpage/react-fullpage';

import Hero1 from '../components/Hero1';

const Home = () => {
  return (
    <ReactFullpage
      // fullpage options
      // licenseKey={'YOUR_KEY_HERE'}
      scrollingSpeed={1000} /* Options here */
      verticalCentered={false}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <Hero1 className="section" />
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Home;
