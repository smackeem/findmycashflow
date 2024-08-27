import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import logoImg from '../../assets/logo.png';

const NavbarContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 8rem;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;  // Ensure the navbar stays above other elements

  &.scrolled {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  // Subtle shadow to give depth
    }
    `;
    // background: #F5F7FA;  // Light gray color on scroll

const Logo = styled(motion.div)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <NavbarContainer className={scrolled ? 'scrolled' : ''}>
      <Logo initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <img
          className="brand-logo"
          id='logo-container'
          src={logoImg}
          alt="logo"
          style={{ maxHeight: '150px', width: 'auto'}}
        />
      </Logo>
      {/* Add additional links or a hamburger menu here */}
    </NavbarContainer>
  );
};

export default Navbar;
