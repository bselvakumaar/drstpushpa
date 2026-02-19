import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavContainer = styled.nav`
  background: ${props => props.theme.colors.navBackground};
  box-shadow: ${props => props.theme.colors.shadow};
  position: sticky;
  top: 0;
  z-index: 1000;
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  position: relative;
`;

const DesktopMenu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.navText};
  cursor: pointer;
  padding: 0.5rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: ${props => props.theme.colors.navBackground};
  padding: 1rem;
  box-shadow: ${props => props.theme.colors.shadow};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: ${props => props.isOpen ? 'translateY(0)' : 'translateY(-20px)'};
  opacity: ${props => props.isOpen ? 1 : 0};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
  z-index: 999;
`;

const NavLink = styled(Link)`
  padding: 0.8rem 1.2rem;
  text-decoration: none;
  color: ${props => props.theme.colors.navText};
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s;
  position: relative;
  
  &:hover {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.navHover};
  }
  
  &.active {
    color: ${props => props.theme.colors.primary};
    background: ${props => props.theme.colors.navHover};
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 3px;
      background: ${props => props.theme.colors.primary};
      border-radius: 2px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/about', label: 'ABOUT DR.S.T.PUSHPA' },
    { path: '/services', label: 'SERVICES' },
    { path: '/blog', label: 'BLOG' },
    { path: '/contact', label: 'CONTACT' }
  ];

  return (
    <NavContainer>
      <NavContent>
        {/* Helper for left alignment on desktop or logo if added later */}
        <div style={{ width: '40px', display: 'none' }}></div>

        <DesktopMenu>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={location.pathname === item.path ? 'active' : ''}
            >
              {item.label}
            </NavLink>
          ))}
        </DesktopMenu>

        <ThemeSwitcher />

        <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>
      </NavContent>

      <MobileMenu isOpen={isMobileMenuOpen}>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </MobileMenu>
    </NavContainer>
  );
};

export default Navigation;
