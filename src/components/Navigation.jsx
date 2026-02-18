import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 1rem;
    padding: 1rem;
  }
`;

const NavLink = styled(Link)`
  padding: 1rem 1.5rem;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s;
  position: relative;
  
  &:hover {
    color: #00897b;
    background: rgba(0, 137, 123, 0.1);
  }
  
  &.active {
    color: #00897b;
    background: rgba(0, 137, 123, 0.1);
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 40px;
      height: 3px;
      background: #00897b;
      border-radius: 2px;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
`;

const Navigation = () => {
  const location = useLocation();
  
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
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={location.pathname === item.path ? 'active' : ''}
          >
            {item.label}
          </NavLink>
        ))}
      </NavContent>
    </NavContainer>
  );
};

export default Navigation;
