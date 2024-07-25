import {ToastContainer} from 'react-toastify';

import {
  Articles,
  Feedback,
  Footer,
  Form,
  Header,
  HowItWork,
  Questions,
  ThirdSection,
} from './container';

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <HowItWork id={'howItWork'} />
      <ThirdSection id={'thirdSection'} />
      <Feedback />
      <Questions id={'question'} />
      <Articles />
      <Form id={'form'} />
      <Footer />
    </>
  );
}

export default App;
