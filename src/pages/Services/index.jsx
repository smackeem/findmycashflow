import { motion } from "framer-motion";

const services = [
  {
    title: "Cash Flow Analysis",
    description: "As an expert, I will thoroughly analyze your business's cash flow to identify any inefficiencies and areas for improvement. I'll provide detailed reports and actionable insights to help you optimize your financial operations."
  },
  {
    title: "Expense Management",
    description: "I'll help you manage and reduce your business expenses by identifying unnecessary costs and suggesting more cost-effective alternatives. My goal is to increase your profitability without sacrificing quality."
  },
  {
    title: "Revenue Optimization",
    description: "I'll work with you to develop strategies to increase your revenue. From pricing strategies to sales tactics, I provide comprehensive solutions tailored to your business needs."
  },
  {
    title: "Strategic Financial Planning",
    description: "Through financial planning services, I'll help you create a roadmap for your business's financial future. I assist with budgeting, forecasting, and setting financial goals to ensure long-term success."
  }
];

const Services = () => {
  return (
    <div id="services" className="mx-auto max-w-7xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12">
      {/* Left Section: Title and Intro */}
      <div className="lg:col-span-3 mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold text-customBlue mb-6">My Services</h1>
        <p className="text-gray-500">
          Explore my tailored financial services designed to elevate your business&apos;s performance and secure its long-term success.
        </p>
      </div>

      {/* Right Section: Services Cards */}
      <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-customBlue transition-colors duration-300">
              {service.title}
            </h2>
            <p className="text-gray-700">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
