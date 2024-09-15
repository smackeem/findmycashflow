import { useState } from 'react';
import { motion } from 'framer-motion';
import certImg from '../../assets/cert.png';

const CertificateSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="cert" className="flex flex-col lg:flex-row items-center lg:items-start p-8 bg-gradient-to-l from-[#1B263B] via-[#0D4A71] to-[#1B263B] shadow-lg rounded-lg my-8">
      {/* Certificate Image */}
      <motion.img
        src={certImg}
        alt="Finance Certificate"
        className="w-full lg:w-2/3 max-w-xs rounded-lg shadow-lg cursor-pointer mb-6 lg:mb-0 lg:mr-8"
        whileHover={{ scale: 1.1 }}
        onClick={handleOpenModal}
      />

      {/* Description Section */}
      <div className="text-white text-center flex flex-col justify-center content-center lg:text-left">
        <h2 className="text-3xl font-bold mb-4">Certified Treasury Professional</h2>
        <p className="text-lg text-gray-300">
          Recognized for excellence in financial planning, this certificate demonstrates our commitment
          to helping you achieve financial stability and growth.
        </p>
      </div>

      {/* Modal for Full-Size Image */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleCloseModal}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-full max-h-full relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking inside the content
          >
            <img src={certImg} alt="Finance Certificate Full Size" className="w-full h-auto" />
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-gray-900"
              onClick={handleCloseModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default CertificateSection;
