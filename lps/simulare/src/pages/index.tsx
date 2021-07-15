import ReactFullpage from '@fullpage/react-fullpage';

import Hero1 from '../components/Hero1';

const Home = () => {
  return (
    <ReactFullpage
      {...{
        scrollingSpeed: 1000,
        verticalCentered: false,
        scrollOverflow: true,
      }}
      render={() => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Hero1 />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Home;
