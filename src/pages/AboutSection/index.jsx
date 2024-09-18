import { motion } from "framer-motion";
import headshot from "../../assets/chri-headshot.jpg";
import mission from "../../assets/green-bulb.jpg";
import team from "../../assets/team.jpg";

const AboutSection = () => {
  return (
    <div
      id="aboutsection"
      className="mx-auto max-w-7xl p-6 lg:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {/* Card 1: Mission */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between text-center transition-shadow duration-300 hover:shadow-2xl"
        whileHover={{ scale: 1.05 }}
      >
        <img
          className="mx-auto mb-4 w-full h-64 object-cover rounded-lg"
          src={mission}
          alt="Mission"
        />
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Mission</h3>
          <p className="text-gray-700 mb-6">
            Unlocking the growth potential of Entrepreneurs and Small Business
            Owners who aspire to drive sustainable change in their Lives,
            Business and Community.
          </p>
        </div>
        <a href="/elevate-your-business">
          <button className="bg-customBlue text-white py-2 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300 mt-4">
            Learn More
          </button>
        </a>
      </motion.div>

      {/* Card 2: About the Founder */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between text-center transition-shadow duration-300 hover:shadow-2xl"
        whileHover={{ scale: 1.05 }}
      >
        <img
          className="mx-auto mb-4 w-full h-64 object-cover rounded-lg"
          src={headshot}
          alt="About Me"
        />
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            About the Founder
          </h3>
          <p className="text-gray-700 mb-6">
            Christopher Denham is a seasoned business professional whose career
            in corporate finance spans over 18 years. He has made significant
            contributions to Fortune 500 companies, optimizing cash flow and
            negotiating billion-dollar transactions that have saved millions.
          </p>
        </div>
        <a href="/founder">
          <button className="bg-customBlue text-white py-2 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300 mt-4">
            Learn More
          </button>
        </a>
      </motion.div>

      {/* Card 3: Elevating Your Business */}
      <motion.div
        className="bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between text-center transition-shadow duration-300 hover:shadow-2xl"
        whileHover={{ scale: 1.05 }}
      >
        <img
          className="mx-auto mb-4 w-full h-64 object-cover rounded-lg"
          src={team}
          alt="Elevating Your Business"
        />
        <div className="flex-grow">
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">
            Elevating Your Business
          </h3>
          <p className="text-gray-700 mb-6">
            I specialize in consulting services for entrepreneurs, small
            businesses, and CEOs. From strategic growth initiatives to
            personalized cash flow techniques, I help you scale your business
            efficiently and sustainably.
          </p>
        </div>
        <a href="/elevate-your-business">
          <button className="bg-customBlue text-white py-2 px-6 rounded-full font-semibold hover:bg-opacity-90 transition-colors duration-300 mt-4">
            Learn More
          </button>
        </a>
      </motion.div>
    </div>
  );
};

export default AboutSection;
