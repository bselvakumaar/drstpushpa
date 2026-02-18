import React from 'react';
import styled from 'styled-components';

const AgeGroupsSectionContainer = styled.div`
  background: white;
  padding: 4rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: #004d40;
  text-align: center;
  margin-bottom: 3rem;
`;

const AgeCardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 2rem;
  padding: 1rem 0;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #00897b;
    border-radius: 10px;
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const AgeCard = styled.div`
  min-width: 280px;
  background: linear-gradient(135deg, #e0f2f1 0%, #b2dfdb 100%);
  padding: 2rem;
  border-radius: 16px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(135deg, #00897b, #00796b);
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
  
  @media (max-width: 768px) {
    min-width: 250px;
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    min-width: 220px;
    padding: 1rem;
  }
`;

const AgeCardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: #004d40;
  margin-bottom: 1rem;
`;

const AgeCardDescription = styled.p`
  color: #555;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const AgeCardQuote = styled.div`
  font-style: italic;
  color: #00897b;
  font-weight: 500;
  background: rgba(255,255,255,0.5);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const ageGroups = [
  {
    title: 'Newborns (0-2 months)',
    description: 'Specialized care for the earliest stages of life, focusing on feeding, sleep patterns, and early development milestones.',
    quote: 'The first few months are crucial for establishing healthy patterns.'
  },
  {
    title: 'Infants (2-12 months)',
    description: 'Comprehensive care during rapid growth and development, including vaccinations, nutrition, and milestone tracking.',
    quote: 'Every month brings new discoveries and developments.'
  },
  {
    title: 'Toddlers (1-3 years)',
    description: 'Supporting independence and learning while ensuring proper nutrition, safety, and developmental progress.',
    quote: 'Toddlers are learning to explore their world safely.'
  },
  {
    title: 'Preschoolers (3-5 years)',
    description: 'Preparing for school readiness with focus on social skills, learning abilities, and continued health monitoring.',
    quote: 'Building the foundation for lifelong learning and health.'
  },
  {
    title: 'School Age (5-12 years)',
    description: 'Supporting academic success and healthy habits while monitoring growth and addressing any health concerns.',
    quote: 'Balancing school life with healthy development.'
  },
  {
    title: 'Adolescents (12-18 years)',
    description: 'Guiding through puberty and teenage years with comprehensive health care and emotional support.',
    quote: 'Supporting the transition to adulthood with care and understanding.'
  }
];

const AgeGroupsSection = () => {
  return (
    <AgeGroupsSectionContainer>
      <SectionTitle>Age-Specific Care</SectionTitle>
      <AgeCardsContainer>
        {ageGroups.map((group, index) => (
          <AgeCard key={index}>
            <AgeCardTitle>{group.title}</AgeCardTitle>
            <AgeCardDescription>{group.description}</AgeCardDescription>
            <AgeCardQuote>"{group.quote}"</AgeCardQuote>
          </AgeCard>
        ))}
      </AgeCardsContainer>
    </AgeGroupsSectionContainer>
  );
};

export default AgeGroupsSection;
