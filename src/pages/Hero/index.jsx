// HeroSection.js
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HashLink as Link} from 'react-router-hash-link';

// background: url('/path-to-image.jpg') no-repeat center center/cover;
const HeroContainer = styled.div`
height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Heading = styled(motion.h1)`
  font-size: 3rem;
  color: white;
  margin-bottom: 1rem;
`;

const Subheading = styled(motion.p)`
  font-size: 1.5rem;
  color: #ddd;
  margin-bottom: 2rem;
`;

const CTAButton = styled(motion.button)`
  padding: 0.75rem 2rem;
  font-size: 1.2rem;
  background: #1BA6B9;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: #2BA4B9;
  }
`;

const HeroSection = () => {
  return (
    <HeroContainer id="hero" className='bg-gradient-to-l from-[#1B263B] via-[#0D4A71] to-[#1B263B]'>
      <Heading initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
        Empowering Financial Flexibility
      </Heading>
      <Subheading initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2 }}>
        Your business journey to financial sustainable stability starts here!
      </Subheading>
      <Link to="#footer"><CTAButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Contact Me
      </CTAButton>
      </Link>
    </HeroContainer>
  );
};

export default HeroSection;
