// FAQSection.js
import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FAQContainer = styled.div`
  padding: 4rem 2rem;
`;

const Question = styled(motion.div)`
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const Answer = styled(motion.div)`
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 5px;
  margin-bottom: 1rem;
  color: #666;
`;

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    { question: 'What services do you offer?', answer: 'We offer financial planning, investment strategies, and debt management.' },
    { question: 'Who can benefit from your services?', answer: 'Individuals, families, and businesses seeking financial stability.' },
    { question: 'How can I get started?', answer: 'Contact us to schedule a consultation and start planning your financial future.' },
  ];

  return (
    <FAQContainer>
      {faqs.map((faq, index) => (
        <div key={index}>
          <Question
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            {faq.question}
          </Question>
          {index === activeIndex && (
            <Answer
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              transition={{ duration: 0.3 }}
            >
              {faq.answer}
            </Answer>
          )}
        </div>
      ))}
    </FAQContainer>
  );
};

export default FAQSection;
