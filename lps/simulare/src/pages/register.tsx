import ReactFullpage from '@fullpage/react-fullpage';

import FormRegister from '../components/FormRegister';

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
              <FormRegister />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default Home;
