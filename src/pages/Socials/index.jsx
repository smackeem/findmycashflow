import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const SocialsContainer = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const SocialLink = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  color: white;
  font-size: 2rem;
  background-color: ${(props) => props.bgColor || 'gray'};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.hoverColor || 'gray'};
  }
`;

const Socials = () => {
  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: [0, 15, -15, 0], // slight wiggle effect
      transition: { duration: 0.4, yoyo: Infinity },
    },
    tap: { scale: 0.9 },
  };

  return (
    <SocialsContainer >
      <h1 className="text-2xl font-semibold mb-4 sm:text-center">Follow Us on Social Media</h1>
      <div className="flex space-x-6 sm:justify-center sm:content-center">
        <SocialLink
          href="https://www.instagram.com/findmycashflow/"
          target="_blank"
          rel="noopener noreferrer"
          bgColor="#E1306C"
          hoverColor="#C13584"
          variants={socialVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaInstagram />
        </SocialLink>
        <SocialLink
          href="https://www.facebook.com/FindMyCashflow/"
          target="_blank"
          rel="noopener noreferrer"
          bgColor="#1877F2"
          hoverColor="#1461DB"
          variants={socialVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaFacebook />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/in/christopherdenham/"
          target="_blank"
          rel="noopener noreferrer"
          bgColor="#0A66C2"
          hoverColor="#004182"
          variants={socialVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/@FindMyCashflow"
          target="_blank"
          rel="noopener noreferrer"
          bgColor="#FF0000"
          hoverColor="#CC0000"
          variants={socialVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FaYoutube />
        </SocialLink>
      </div>
    </SocialsContainer>
  );
};

export default Socials;
