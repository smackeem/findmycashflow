const services = [
  {
    title: "Cash Flow Analysis",
    description: "Our expert team will thoroughly analyze your business's cash flow to identify any inefficiencies and areas for improvement. We'll provide detailed reports and actionable insights to help you optimize your financial operations."
  },
  {
    title: "Expense Management",
    description: "We help you manage and reduce your business expenses by identifying unnecessary costs and suggesting more cost-effective alternatives. Our goal is to increase your profitability without sacrificing quality."
  },
  {
    title: "Revenue Optimization",
    description: "We work with you to develop strategies to increase your revenue. From pricing strategies to sales tactics, we provide comprehensive solutions tailored to your business needs."
  },
  {
    title: "Financial Planning",
    description: "Our financial planning services help you create a roadmap for your business's financial future. We assist with budgeting, forecasting, and setting financial goals to ensure long-term success."
  }
];

const Services = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-12 md:gap-x-6 md:gap-y-12">
        <div className="md:col-span-3">
          <h1 className="text-2xl font-bold mb-6">Our Services</h1>
          <p className="text-gray-500">Explore our tailored financial services designed to elevate your business&apos;s performance and secure its long-term success.</p>

        </div>
        <div className="md:col-span-9">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg p-4 ">
              <h2 className="text-xl font-semibold mb-2">
                {service.title}
              </h2>
              <p className="text-gray-700">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;