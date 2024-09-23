import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import team from "../../assets/team.jpg"; // Assuming path to the images
import mission from "../../assets/warm-bulb.jpg"; // Assuming path to the images

const MissionPage = () => {
  return (
    <div id="mission-page" className="container mx-auto px-6 lg:px-8 py-12">
      <Helmet>
        <title>Elevating Your Business</title>
        <meta
          name="description"
          content="Learn more about FindMyCashFlow and how our financial consulting services help small businesses thrive."
        />
        <meta
          property="og:title"
          content="Elevating Your Business"
        />
        <meta
          property="og:description"
          content="FindMyCashFlow provides expert financial consulting services tailored to the needs of small businesses and entrepreneurs."
        />
        <meta
          property="og:image"
          content="https://www.findmycashflow.com/assets/warm-bulb.jpg"
        />
      </Helmet>
      
      {/* Mission Statement Section */}
      <div className="max-w-4xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold text-customBlue mb-6">My Mission</h1>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Unlocking the growth potential of Entrepreneurs and Small Business Owners 
          who aspire to drive sustainable change in their Lives, Business, and Community.
        </motion.p>
        {/* Mission Image */}
        <motion.img
          className="mx-auto mb-4 w-full h-64 object-cover rounded-lg shadow-md"
          src={mission}
          alt="Mission"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </div>
      <hr />
    <br />
    <br />
      {/* Elevating Your Business Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-customBlue mb-6 text-center">
          Elevating Your Business
        </h1>
        {/* Elevating Your Business Image */}
        <motion.img
          className="mx-auto mb-4 w-full h-64 object-cover rounded-lg shadow-md"
          src={team}
          alt="Elevating Your Business"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        />
        <motion.p
          className="text-lg text-gray-600 leading-relaxed"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          As a trusted advisor, I prioritize building strong relationships with each client, 
          understanding your unique needs and goals, and providing personalized guidance every 
          step of the way. My goal is not only to help your business achieve short-term success 
          but also to empower you for long-term sustainable growth and resilience in today&apos;s 
          dynamic marketplace.
        </motion.p>
        <motion.p
          className="text-lg text-gray-600 leading-relaxed mt-4"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          I specialize in providing consulting services tailored to entrepreneurs, small 
          businesses, and CEOs seeking to scale their businesses. With a focus on strategic 
          growth initiatives, I offer personalized cash flow techniques, guidance, and support 
          to help navigate the complexities of expansion, optimize operations, and achieve 
          sustainable success.
        </motion.p>

        {/* Emphasized Sentence */}
        <motion.p
          className="text-xl font-bold text-customBlue mt-8 text-center"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Growing your business should not require you to work more.
        </motion.p>

        <motion.p
          className="text-xl font-bold text-customBlue mt-2 text-center"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          Let&apos;s connect to discuss how I can assist you in realizing your business growth objectives.
        </motion.p>
      </div>
      <hr />
    <br />
    <br />
      {/* Areas of Expertise Section */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-customBlue mb-8 text-center">
          Areas of Expertise
        </h2>
        <div className="container">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="text-lg text-gray-600 leading-relaxed">
            <ol className="list-disc space-y-4">
              <li>Cash Flow Forecasting and Scenario Analysis</li>
              <li>Budgeting</li>
              <li>Expense Management and Cost Avoidance</li>
              <li>Leadership Development and Coaching</li>
              <li>Succession Planning</li>
              <li>Talent Acquisition and Development</li>
            </ol>
          </div>
          <div className="text-lg text-gray-600 leading-relaxed ">
            <ol className="list-disc space-y-4">
              <li>Relationship Management</li>
              <li>Process Re-Engineering and Automation</li>
              <li>Strategic Business Planning</li>
              <li>Risk Management</li>
              <li>Debt Management Strategies and Compliance</li>
              <li>Operations Streamlining</li>
            </ol>
          </div>
        </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MissionPage;
