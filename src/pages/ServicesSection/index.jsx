// ServicesSection.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ServicesContainer = styled.div`
  padding: 4rem 2rem;
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #007bff;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  color: #666;
`;

const ServicesSection = () => {
  const services = [
    { title: 'Financial Planning', icon: '📊', description: 'Customized financial planning for individuals and businesses.' },
    { title: 'Investment Strategies', icon: '💼', description: 'Expert advice on how to grow your wealth through smart investments.' },
    { title: 'Debt Management', icon: '💳', description: 'Helping you manage and reduce debt effectively.' },
    // Add more services as needed
  ];

  return (
    <ServicesContainer>
      <ServiceList>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServiceList>
    </ServicesContainer>
  );
};

export default ServicesSection;
