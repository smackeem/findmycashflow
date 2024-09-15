import { motion } from "framer-motion";

const reasons = [
  {
    title: "Growth Has Stagnated",
    content: "Your business isn't growing like it used to, and you're not sure what steps to take next. A consultant can help identify opportunities for growth and scale your operations effectively.",
  },
  {
    title: "Inconsistent Cash Flow",
    content: "Are your revenue streams unpredictable? A consultant can analyze your financials, helping you stabilize income and plan for sustainable growth.",
  },
  {
    title: "Unclear Business Goals",
    content: "If you're operating without clear, actionable goals, or if your objectives feel scattered, it’s time to bring in a consultant who can help you establish a focused roadmap.",
  },
  {
    title: "Overwhelmed with Daily Operations",
    content: "Are you constantly firefighting, buried under tasks, and struggling to focus on big-picture strategies? A consultant can streamline your processes and help you regain control.",
  },
  {
    title: "Difficulty in Decision Making",
    content: "If you find yourself stuck or second-guessing every decision, a business coach can provide clarity, helping you make confident and informed choices.",
  },
  {
    title: "Outdated Business Practices",
    content: "If your business operations or strategies haven’t evolved with the times, a consultant can introduce modern techniques and tools to keep you competitive.",
  },
  {
    title: "Uncertainty About Financial Health",
    content: "If you’re unsure about your business’s financial status, a coach can help you gain clarity, ensuring you understand your financials and make decisions that drive profitability.",
  },
];

const ReasonsToHireConsultant = () => {
  return (
    <div id="reasons" className="mx-auto max-w-7xl p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-x-12">
      {/* Left Section: Title */}
      <div className="lg:col-span-3 mb-8 lg:mb-0">
        <h1 className="text-4xl font-bold text-customBlue mb-4 lg:mb-6">
          7 Reasons You May Need A Business Consultant
        </h1>
        <p className="text-gray-500">
          Still uncertain? Contact us for tailored advice on how a business consultant can help you thrive.
        </p>
      </div>

      {/* Right Section: Numbered List */}
      <div className="lg:col-span-9">
        <ol className="space-y-8">
          {reasons.map((item, index) => (
            <motion.li
              key={index}
              className="group relative flex items-start"
              initial={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 mr-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-customBlue text-white font-semibold text-xl">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-customBlue transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 mt-2">{item.content}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ReasonsToHireConsultant;
