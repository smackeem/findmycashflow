import { useState } from "react";
import { motion } from "framer-motion";

const accordionItems = [
  {
    title: "What is your return policy?",
    content: "You can return any item within 30 days of purchase for a full refund.",
  },
  {
    title: "Do you offer international shipping?",
    content: "Yes, we ship to most countries worldwide. Shipping fees and delivery times may vary.",
  },
  {
    title: "How can I track my order?",
    content: "Once your order is shipped, you will receive a tracking number via email.",
  },
  {
    title: "How can I track my order?",
    content: "Once your order is shipped, you will receive a tracking number via email.",
  },
  {
    title: "How can I track my order?",
    content: "Once your order is shipped, you will receive a tracking number via email.",
  },
];

const FreqAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-14 gap-y-16 lg:max-w-5xl lg:px-8 xl:max-w-none xl:grid-cols-12 xl:px-0">
      <div className="xl:col-span-3">
        <h1 className="text-3xl font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-gray-500">
          Please contact us if you cannot find an answer to your question.
        </p>
      </div>
      <div className="xl:col-span-9">
        
        {accordionItems.map((item, index) => (
          <div key={index}>
            <button
              type="button"
              className={`flex items-center focus:bg-transparent justify-between w-full py-5 font-medium text-gray-900 border-b border-gray-200 dark:text-gray-400 gap-3 transition-colors duration-300 ${
                activeIndex === index ? "bg-white dark:bg-gray-900 dark:text-white" : ""
              }`}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-flush-body-${index + 1}`}
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.title}</span>
              <motion.svg
                data-accordion-icon
                className={`w-3 h-3 transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                } shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
                initial={{ rotate: 0 }}
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </motion.svg>
            </button>
            <motion.div
              id={`accordion-flush-body-${index + 1}`}
              className={`${
                activeIndex === index ? "block" : "hidden"
              } transition-all duration-300 ease-in-out transform py-5 border-b border-gray-200 dark:border-gray-700`}
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === index ? "auto" : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-600 dark:text-gray-400">{item.content}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreqAskedQuestions;
