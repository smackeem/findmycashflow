import styled from 'styled-components';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  background: #1e1e1e;
  color: white;
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const Icon = styled(motion.a)`
  color: white;
  font-size: 1.5rem;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

const ContactInfo = styled.div`
  font-size: 1rem;
`;

const FooterText = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: center;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <SocialIcons>
        <Icon href="#" whileHover={{ scale: 1.1 }}>Facebook</Icon>
        <Icon href="#" whileHover={{ scale: 1.1 }}>Twitter</Icon>
        <Icon href="#" whileHover={{ scale: 1.1 }}>LinkedIn</Icon>
        {/* Add more icons as needed */}
      </SocialIcons>
      <ContactInfo>
        <p>Email: contact@findmycashflow.com</p>
        <p>Phone: +123 456 7890</p>
      </ContactInfo>
      <FooterText>&copy; 2024 Find My Cashflow. All rights reserved.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
