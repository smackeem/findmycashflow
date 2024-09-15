import HeroSection from '../Hero';
import AboutSection from '../AboutSection';
import CertificateSection from '../FinanceCert';
import ConnectSection from '../Statement';
import Services from '../Services';
import FreqAskedQuestions from '../FAQ'
import './home.css';


const Home = () => {


  return (
    <>
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
