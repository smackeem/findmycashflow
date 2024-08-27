import "./App.css";
import Home from "./pages/Home";
import FreqAskedQuestions from "./pages/FAQ";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import Recommendations from "./pages/Recommendations";
import Socials from "./pages/Socials";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/Hero";
import AboutSection from "./pages/AboutSection";
import ServicesSection from "./pages/ServicesSection";
import CertificateSection from "./pages/FinanceCert";
import FAQSection from "./pages/Freq";
import ContactForm from "./pages/Contact";
import Footers from "./pages/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Home /> */}
      <HeroSection />
      <div className="container">
      {/* <About /> */}
      <AboutSection />
      <hr />
<br />

    <Services />
      {/* <ServicesSection /> */}
      <hr />
<br />

      <CertificateSection />
      </div>
      <div className="container">
<hr />
<br />
<br />
      <FreqAskedQuestions />
      </div>
      <div className="container">
    

      </div>
      <Footer />
    </div>
//     <div className="App ">
//         {/* <Header /> */}
//         <Navbar />
//       <div>
// <HeroSection />
//         {/* <Home /> */}
//       </div>

//       {/* <section className="">
//       </section> */}

//       <section className="">
//         <AboutSection />
//       </section>

//       <section className="">
//         <Services />
//       </section>

//       <section className="container">
//         <Recommendations />
//       </section>

//       {/* <section>
//         <Testimonials />
//       </section> */}


//       <section className="container">
//         <FreqAskedQuestions />
//       </section>

//       {/* <section className="container">
//         <Socials />
//       </section> */}
//       <section className="">
//         <Footer />
//       </section>
//     </div>
  );
}

export default App;
