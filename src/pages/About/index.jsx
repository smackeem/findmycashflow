import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
import headshot from "../../assets/chri-headshot.jpg";

const About = () => {
  return (
    <div id="aboutpage" className="container mx-auto px-6 lg:px-8 py-12">
      <Helmet>
        <title>The Founder</title>
        <meta
          name="description"
          content="Learn more about Christopher Denham, the founder and visionary behind FindMyCashFlow."
        />
        <meta
          property="og:title"
          content="The Founder"
        />
        <meta
          property="og:description"
          content="FindMyCashFlow provides expert financial consulting services tailored to the needs of small businesses and entrepreneurs."
        />
        <meta
          property="og:image"
          content="https://www.findmycashflow.com/assets/chri-headshot.jpg"
        />
      </Helmet>
      {/* Hero Section */}
      <div className="lg:flex lg:space-x-12 mb-12">
        {/* Image Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.img
            src={headshot}
            alt="Christopher Denham"
            className="rounded-full lg:rounded-lg mx-auto lg:mx-0 w-64 h-64 lg:w-80 lg:h-80 object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Intro Text Section */}
        <div className="lg:w-1/2 flex flex-col justify-center mt-6 lg:mt-0">
          <h1 className="text-4xl font-bold text-customBlue">
            Christopher Denham
          </h1>
          <p className="text-lg font-sans text-gray-600 mt-2">
            Founder & Visionary behind <span className="text-customBlue">Find My CashFlow</span>
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-customBlue mb-6">About Me</h2>

        {/* Bio Content */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            Christopher Denham is a seasoned business professional whose career
            in corporate finance spans over 18 years. With a remarkable track
            record of driving financial efficiency and operational excellence,
            Chris has made significant contributions to Fortune 500 companies
            and medium-sized organizations alike. His expertise lies in
            optimizing cash flow, implementing cost-saving strategies, and
            negotiating billion-dollar transactions that have collectively saved
            companies millions of dollars.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Christopher&apos;s career is distinguished by his ability to manage
            complex, high-stakes financial operations. He has successfully
            overseen international multimillion dollar tri-party deals, working
            closely with both domestic and international highly regulated
            institutions. His strategic leadership and visionary approach have
            consistently delivered sustainable profitability, making him a
            sought-after expert in the field of corporate treasury.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            In his last role in AIG&apos;s Treasury Team, Christopher served as the
            Head of Collateral Management, where he managed collateral
            securities exceeding $35 billion. His efforts in developing monthly
            management reporting of key assets led to a significant reduction in
            the loss of contingent liquidity. Prior to this, as Assistant
            Director of Treasury, he co-led the amendment of a $4.5 billion
            Senior Unsecured Revolving Credit Facility, helping negotiate
            reduced pricing that resulted in millions in savings over the next
            five years. His thought leadership strategy on a cash flow
            initiative for one of AIG&apos;s billion books of business led to a
            savings of over a $1 million annually.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Christopher is not only a skilled negotiator and financial
            strategist but also a visionary change agent. He has a proven
            ability to align teams, improve opportunities for direct reports,
            and implement best practices that drive organizational success. His
            leadership extends to talent management and succession planning, as
            evidenced by his successful grooming of a successor before his
            planned departure from AIG in 2023.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            A Certified Treasury Professional since 2012, Chris has also
            contributed to the development of future exams in consultation with
            the Association for Financial Professionals (AFP). His expertise has
            earned him an invitation to apply to join the AFP&apos;s board of directors, further
            cementing his reputation as a leader in the field of corporate
            finance.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed">
            Christopher Denham&apos;s career is a testament to his deep financial
            acumen, operational proficiency, and unwavering commitment to
            driving sustainable growth and profitability in every organization
            he serves.
          </p>

          {/* Blockquote */}
          <blockquote className="italic text-gray-600 border-l-4 border-customBlue pl-4">
            &rdquo;Christopher is a visionary change agent with an unwavering
            commitment to sustainable growth.&rdquo;
          </blockquote>
        </motion.div>
      </div>

      {/* Optional CTA */}
      <div className="text-center mt-12">
        <a href="/the-mission">
        <motion.button
          className="bg-customBlue text-white rounded-full px-6 py-3 hover:bg-blue-700 transition-colors"
          whileHover={{ scale: 1.05 }}
        >
          Learn More About My Mission
        </motion.button>
        </a>
      </div>
    </div>
  );
};

export default About;
