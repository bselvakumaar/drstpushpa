import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(135deg, #004d40 0%, #00695c 100%);
  color: white;
  padding: 3rem 0 1rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: #e0f2f1;
  }
  
  p {
    line-height: 1.6;
    margin-bottom: 0.5rem;
    color: #b2dfdb;
  }
  
  a {
    display: block;
    color: #b2dfdb;
    text-decoration: none;
    margin-bottom: 0.5rem;
    transition: color 0.3s;
    
    &:hover {
      color: #e0f2f1;
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #b2dfdb;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Dr.S.T.Pushpa</h3>
          <p>MBBS, MD (Paediatrics)</p>
          <p>Expert pediatric care for your child's health and development</p>
        </FooterSection>
        <FooterSection>
          <h3>Contact Info</h3>
          <p>📞 9566293322</p>
          <p>📧 kidzclinics@gmail.com</p>
          <p>📍 Bengaluru, Karnataka</p>
        </FooterSection>
        <FooterSection>
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </FooterSection>
      </FooterContent>
      <FooterBottom>
        <p>&copy; 2025 Dr.S.T.Pushpa's Kidz Clinic. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
