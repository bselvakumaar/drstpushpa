import React from 'react';
import styled from 'styled-components';

const CTASectionContainer = styled.div`
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 20px;
  margin-bottom: 3rem;
`;

const CTATitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: #004d40;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  color: #00695c;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled.a`
  background: ${props => props.secondary ? 'transparent' : '#00897b'};
  color: ${props => props.secondary ? '#00897b' : 'white'};
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: ${props => props.secondary ? '2px solid #00897b' : 'none'};
  
  &:hover {
    background: ${props => props.secondary ? '#00897b' : '#00695c'};
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0,137,123,0.3);
  }
`;

const CTASection = () => {
  return (
    <CTASectionContainer>
      <CTATitle>Ready to Schedule Your Child's Visit?</CTATitle>
      <CTADescription>
        Book an appointment with Dr.S.T.Pushpa for expert pediatric care and guidance. We're here to support your child's health journey every step of the way.
      </CTADescription>
      <CTAButtons>
        <CTAButton 
          href="https://wa.me/919940636769" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            width="20" 
            height="20"
          />
          Book Appointment on WhatsApp
        </CTAButton>
        <CTAButton 
          href="/contact" 
          secondary
        >
          📞 Contact Information
        </CTAButton>
      </CTAButtons>
    </CTASectionContainer>
  );
};

export default CTASection;
