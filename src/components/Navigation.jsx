import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';

const NavContainer = styled.nav`
  background: ${props => props.$scrolled ? props.theme.colors.navBackground : (props.theme.mode === 'light' ? 'rgba(255, 255, 255, 0.4)' : 'rgba(15, 23, 42, 0.4)')};
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  box-shadow: ${props => props.$scrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'};
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  padding: ${props => props.$scrolled ? '0.75rem 0' : '1.2rem 0'};
  border-bottom: 1px solid ${props => props.$scrolled ? props.theme.colors.border : 'rgba(255, 255, 255, 0.1)'};
`;

const NavContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const Brand = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1.25rem;
  
  .branding {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  
  .name {
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    font-weight: 800;
    color: ${props => props.$scrolled ? props.theme.colors.primary : (props.theme.mode === 'light' ? props.theme.colors.text : 'white')};
    line-height: 1;
    letter-spacing: -1px;
    transition: color 0.3s ease;
  }
  
  .tagline {
    font-size: 0.75rem;
    color: ${props => props.$scrolled ? props.theme.colors.secondary : (props.theme.mode === 'light' ? props.theme.colors.secondary : '#4dd0e1')};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    opacity: 0.9;
  }
  
  .divider {
    width: 2px;
    height: 35px;
    background: ${props => props.$scrolled ? props.theme.colors.primary : (props.theme.mode === 'light' ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.3)')};
    border-radius: 4px;
    transition: background 0.3s ease;
  }
  
  .subtitle {
    font-size: 1rem;
    color: ${props => props.theme.colors.highlight}; 
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    .divider, .subtitle, .tagline { display: none; }
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 2.5rem;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const AppointmentCTA = styled.a`
  background: ${props => props.$scrolled ? props.theme.colors.primary : 'white'};
  color: ${props => props.$scrolled ? 'white' : props.theme.colors.primary};
  padding: 0.9rem 1.8rem;
  border-radius: 14px;
  text-decoration: none;
  font-weight: 800;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 25px rgba(0, 129, 255, 0.2);
    filter: brightness(1.1);
  }

  svg { font-size: 1.2rem; }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.mode === 'light' ? props.theme.colors.text : 'white'};
  font-weight: 700;
  font-size: 0.95rem;
  transition: all 0.3s;
  position: relative;
  opacity: 0.8;
  
  &:hover, &.active {
    opacity: 1;
    color: ${props => props.theme.colors.primary};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 3px;
    background: ${props => props.theme.colors.primary};
    transition: width 0.3s ease;
    border-radius: 2px;
  }
  
  &:hover::after, &.active::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1.8rem;
  color: ${props => props.$scrolled ? props.theme.colors.text : 'white'};
  cursor: pointer;
  
  @media (max-width: 1024px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: ${props => props.$isOpen ? '0' : '-100%'};
  width: 80%;
  height: 100vh;
  background: ${props => props.theme.colors.background};
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1001;
  box-shadow: -20px 0 60px rgba(0,0,0,0.1);
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  backdrop-filter: blur(4px);
  display: ${props => props.$isOpen ? 'block' : 'none'};
  z-index: 1000;
`;

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <NavContainer $scrolled={scrolled}>
        <NavContent>
          <Brand to="/" $scrolled={scrolled}>
            <div className="branding">
              <span className="name">Dr. S.T. Pushpa</span>
              <span className="tagline">Pediatrician & Child Specialist</span>
            </div>
            <div className="divider"></div>
            <span className="subtitle">Kidz Clinic</span>
          </Brand>

          <DesktopMenu>
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                $scrolled={scrolled}
                className={location.pathname === item.path ? 'active' : ''}
              >
                {item.label}
              </NavLink>
            ))}
            <ThemeSwitcher />
            <AppointmentCTA
              href="https://wa.me/919566293322"
              target="_blank"
              $scrolled={scrolled}
            >
              <FaWhatsapp /> Book Appointment
            </AppointmentCTA>
          </DesktopMenu>

          <MobileMenuButton $scrolled={scrolled} onClick={() => setIsMobileMenuOpen(true)}>
            <FaBars />
          </MobileMenuButton>
        </NavContent>
      </NavContainer>

      <Overlay $isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(false)} />
      <MobileMenu $isOpen={isMobileMenuOpen}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <FaTimes size={32} onClick={() => setIsMobileMenuOpen(false)} />
        </div>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            $scrolled={true}
            style={{ fontSize: '1.5rem' }}
            className={location.pathname === item.path ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
        <AppointmentCTA
          href="https://wa.me/919566293322"
          target="_blank"
          $scrolled={true}
          style={{ justifyContent: 'center', marginTop: '1rem' }}
        >
          <FaWhatsapp /> Book Appointment
        </AppointmentCTA>
        <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'center' }}>
          <ThemeSwitcher />
        </div>
      </MobileMenu>
    </>
  );
};

export default Navigation;
