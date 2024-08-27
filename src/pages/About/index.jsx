import headshot from '../../assets/chri-headshot.jpg';

const About = () => {
  return (
    <div className="container mx-auto ">
      <h1 className="text-3xl font-bold text-center mb-4">ABOUT</h1>
      <hr className="my-4"/>
      <div className="section">
        <div className="sm:flex sm:space-x-8">
          <div className="col s12 m4 mb-8 sm:mb-0">
            <div className="icon-block text-center">
              <img src="https://picsum.photos/id/2/300/300" alt="Making & Meeting Goals" className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto mb-4"/>
              <h5 className="text-xl font-semibold mb-2">Vision/Mission</h5>
              <p className="text-gray-700">
                I start by documenting your goals and then compare them to your
                current portfolio. I use proven investment strategies designed
                to meet your risk tolerance and stand up against market
                volatility. And you can count on unbiased recommendations and
                impartial guidance based directly on your needs and goals.
              </p>
            </div>
          </div>

          <div className="col s12 m4 mb-8 sm:mb-0">
            <div className="icon-block text-center">
              <img src={headshot} alt="About" className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto mb-4"/>
              <h5 className="text-xl font-semibold mb-2">About Me</h5>
              <p className="text-gray-700">
                Since 1999, I&apos;ve been helping businesses and individuals
                safeguard their assets and plan for the retirement they want.
                When I&apos;m not working, I enjoy sailing, cooking, and playing
                with my 2 dogs.
              </p>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="icon-block text-center">
              <img src="https://picsum.photos/id/1/200/300" alt="Building Strong Futures" className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto mb-4"/>
              <h5 className="text-xl font-semibold mb-2">Target Audience</h5>
              <p className="text-gray-700">
                I&apos;m passionate about helping both companies and individuals with
                diversifying portfolios, managing assets, analyzing market
                trends, and reducing financial risk. <strong>My goal?</strong> To safeguard the
                dreams you strived to achieve and the assets you have worked so
                hard to accumulate. I use proven investment strategies designed
                to meet your risk tolerance and hedge against market volatility.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4"/>
    </div>
  );
};

export default About;
