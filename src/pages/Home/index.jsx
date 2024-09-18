import HeroSection from '../Hero';
import AboutSection from '../AboutSection';
import CertificateSection from '../FinanceCert';
import ConnectSection from '../Statement';
import Services from '../Services';
import FreqAskedQuestions from '../FAQ'
import './home.css';
import { Helmet } from 'react-helmet';


const Home = () => {


  return (
    <>
    <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="Learn more about FindMyCashFlow and how our financial consulting services help small businesses thrive."
        />
        <meta
          property="og:title"
          content="Home"
        />
        <meta
          property="og:description"
          content="FindMyCashFlow provides expert financial consulting services tailored to the needs of small businesses and entrepreneurs."
        />
        <meta
          property="og:image"
          content="https://www.findmycashflow.com/assets/logo.png"
        />
      </Helmet>
      <HeroSection />
      <div className="container">
        <br />
        <br />
        <AboutSection />
        <br />
        <br />
        <hr />
        <br />
        <CertificateSection />

        <br />
        <hr />
        <br />
        <br />
        <Services />
        <br />
      </div>
      <div className="container">
        <br />
        <hr />
        <br />
        <br />
        <FreqAskedQuestions />
        <br />
        <br />
        <hr />
        <br />
        <br />
        <ConnectSection />
        <br />
        <br />
      </div>

    </>
  );
};

export default Home;
