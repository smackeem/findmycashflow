import Socials from "../../pages/Socials";
import ContactForm from "../../pages/Contact";


const Footer = () => {
  return (
    <footer id="footer" className="bg-gradient-to-l from-[#1B263B] via-[#0D4A71] to-[#1B263B] text-white pt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            
            <Socials />
          </div>
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="bg-[#1B263B] text-gray-400 py-3 text-center mt-8">
        <div className="container mx-auto px-4">
          Copyright © 2024 Find My CashFlow, LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
