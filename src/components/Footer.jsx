import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.footerBackground};
  color: ${props => props.theme.colors.footerText};
  padding: 6rem 0 3rem;
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
    font-size: 1.4rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    color: white;
  }
  
  p {
    line-height: 1.8;
    margin-bottom: 0.8rem;
    color: ${props => props.theme.colors.footerText};
    opacity: 0.8;
  }
  
  a {
    display: block;
    color: ${props => props.theme.colors.footerText};
    text-decoration: none;
    margin-bottom: 0.8rem;
    transition: all 0.3s ease;
    opacity: 0.8;
    
    &:hover {
      opacity: 1;
      color: ${props => props.theme.colors.primary};
      transform: translateX(5px);
    }
  }
`;

const FooterBottom = styled.div`
  text-align: center;
  padding-top: 3rem;
  margin-top: 4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${props => props.theme.colors.footerText};
  opacity: 0.6;
  font-size: 0.9rem;
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
          <p>📞 +91 95662 93322</p>
          <p>📧 drstpushpakidzclinic@gmail.com</p>
          <p>📍 Dr. S.T.Pushpa's Kidz Clinic</p>
          <p style={{ paddingLeft: '1.5rem', marginTop: '-0.5rem' }}>ASR Complex, No.41 & 42, 89/5, Prakruthi Township, 1st Block, Horamavu Agara Main Road, Bangalore, Karnataka 560043.</p>
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
