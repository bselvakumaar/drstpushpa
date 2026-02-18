import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const PageTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  color: #004d40;
  text-align: center;
  margin-bottom: 2rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ServiceCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15);
  }
`;

const ServiceIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
`;

const ServiceTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: #00897b;
  margin-bottom: 1rem;
  text-align: center;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.6;
  text-align: center;
`;

const Services = () => {
  const services = [
    {
      icon: '💉',
      title: 'Vaccination Services',
      description: 'Comprehensive immunization following IAP guidelines with proper scheduling and tracking.'
    },
    {
      icon: '📊',
      title: 'Growth Monitoring',
      description: 'Regular assessment of physical growth parameters and developmental milestones.'
    },
    {
      icon: '🍎',
      title: 'Nutrition Counseling',
      description: 'Expert guidance on age-appropriate nutrition and feeding practices.'
    },
    {
      icon: '🏥',
      title: 'Emergency Care',
      description: '24/7 pediatric emergency services for urgent medical situations.'
    },
    {
      icon: '🩺',
      title: 'General Check-ups',
      description: 'Routine health examinations and preventive care for all age groups.'
    },
    {
      icon: '🧠',
      title: 'Developmental Assessment',
      description: 'Comprehensive evaluation of cognitive, motor, and social development.'
    }
  ];

  return (
    <ServicesContainer>
      <PageTitle>Our Services</PageTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={index}>
            <ServiceIcon>{service.icon}</ServiceIcon>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;
