import { useEffect } from 'react';
import M from 'materialize-css';
import './home.css';
import planImg from '../../assets/plan.jpeg'

const Home = () => {
  useEffect(() => {
    const elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);
  }, []);

  return (
    <div id="index-banner" className="parallax-container fm">
      <div className="section no-pad-bot">
        <div className="section no-pad-bot">
          <div className="container">
            <br />
            <br />
            <h1 className="header center teal-text text-lighten-2">Find My Cash Flow</h1>
            <div className="row center">
              <h5 className="header col s12 light">A modern responsive front-end framework based on Material design</h5>
            </div>
          </div>
        </div>
       
      </div>
      <div className="parallax">
        <img src={planImg} alt="Unsplashed background img 1" />
      </div>
    </div>
  );
};

export default Home;
