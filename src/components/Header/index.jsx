import React from 'react';

import logoImg from '../../assets/logo.png'
import styled from 'styled-components';

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
    background: #F5F7FA;  // Light gray color on scroll
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);  // Subtle shadow to give depth
    }
    `;

const Header = () => {
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
    // <nav className="white min-h-32 p-10 bg-gradient-to-l from-[#1B263B] via-[#0D4A71] to-[#1B263B]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} role="navigation">
    // <nav className="white min-h-32 p-10" style={{ display: 'flex', backgroundColor: '#F5F7FA', alignItems: 'center', justifyContent: 'center' }} role="navigation">
    <NavbarContainer className={scrolled ? 'scrolled' : ''}>
      <div className="nav-wrapper mt-4 container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
          className="brand-logo"
          id='logo-container'
          src={logoImg}
          alt="logo"
          style={{ maxHeight: '150px', width: 'auto'}}
        />
      </div>
      </NavbarContainer >
    
  );
};

export default Header;
