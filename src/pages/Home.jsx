import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SwipeableSection from '../components/SwipeableSection';
import AgeGroupsSection from '../components/AgeGroupsSection';
import CTASection from '../components/CTASection';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #00897b 0%, #00796b 100%);
  color: white;
  padding: 6rem 0 4rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
    opacity: 0.3;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const HeroTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(0,0,0,0.1);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const HeroDescription = styled.p`
  font-size: 1.3rem;
  max-width: 600px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 2rem;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255,255,255,0.2);
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const SectionIntro = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  color: #004d40;
  margin-bottom: 1rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const SectionDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const vaccinationSlides = [
  {
    image: 'assets/images/vaccination.jpg',
    title: 'Vaccination Schedule (as per IAP)',
    description: 'Comprehensive immunization services following the Indian Academy of Pediatrics (IAP) guidelines. We ensure your child receives all recommended vaccines at the right time to provide optimal protection against preventable diseases.'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80',
    title: 'Vaccine Safety & Monitoring',
    description: 'Safe vaccination practices with proper monitoring and follow-up care to ensure optimal protection and minimal side effects for your child\'s health and well-being.'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&q=80',
    title: 'Vaccination Records & Tracking',
    description: 'Detailed vaccination records and tracking system to ensure your child stays up-to-date with all required immunizations and health protection.'
  }
];

const growthSlides = [
  {
    image: 'assets/images/crawling.jpg',
    title: 'Growth Monitoring',
    description: 'Regular monitoring of height, weight, and head circumference to ensure your child is growing at a healthy rate and reaching important developmental milestones.'
  },
  {
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80',
    title: 'Developmental Milestones',
    description: 'Tracking important developmental milestones to ensure your child is progressing normally in all areas of development including motor, cognitive, and social skills.'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&q=80',
    title: 'Growth Charts & Analysis',
    description: 'Detailed growth charts and analysis to identify any potential growth issues early and provide appropriate interventions for optimal development.'
  }
];

const careSlides = [
  {
    image: 'assets/images/food.jpg',
    title: 'Nutrition Guidance',
    description: 'Expert advice on proper nutrition for different age groups, from breastfeeding support to healthy eating habits for your child\'s optimal growth and development.'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=500&q=80',
    title: 'Common Illness Treatment',
    description: 'Treatment and management of common childhood illnesses like fever, cold, cough, and infections with gentle, effective care to help your child recover quickly.'
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80',
    title: 'Emergency Care',
    description: '24/7 emergency pediatric care for urgent situations. We\'re here when you need us most, providing immediate medical attention for your child\'s health emergencies.'
  }
];

const gallerySlides = [
  {
    image: 'assets/images/gallery/gallery_1.jpg',
    title: 'Welcoming Reception Area',
    description: 'Our child-friendly reception area designed to make families feel comfortable from the moment they arrive. Bright colors and comfortable seating create a warm, welcoming environment.'
  },
  {
    image: 'assets/images/gallery/gallery_2.jpg',
    title: 'Modern Consultation Room',
    description: 'Private consultation rooms equipped with modern medical equipment for thorough examinations. Our rooms are designed to be both professional and child-friendly.'
  },
  {
    image: 'assets/images/gallery/gallery_3.jpg',
    title: 'State-of-the-Art Equipment',
    description: 'Advanced medical equipment and diagnostic tools to ensure accurate assessments and provide the best possible care for your child\'s health needs.'
  },
  {
    image: 'assets/images/gallery_4.jpg',
    title: 'Compassionate Patient Care',
    description: 'Our approach focuses on making medical examinations comfortable and stress-free for children while providing comprehensive healthcare services.'
  }
];

const Home = () => {
  return (
    <>
      <HeroSection>
        <HeroContent>
          <HeroTitle>Expert Pediatric Care for Your Child</HeroTitle>
          <HeroDescription>
            Comprehensive healthcare services with a focus on your child's growth, development, and well-being. Experience compassionate care from a leading pediatrician in Bangalore.
          </HeroDescription>
          <HeroStats>
            <StatCard>
              <StatNumber>15+</StatNumber>
              <StatLabel>Years Experience</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>1000+</StatNumber>
              <StatLabel>Happy Families</StatLabel>
            </StatCard>
            <StatCard>
              <StatNumber>100%</StatNumber>
              <StatLabel>Child-Focused</StatLabel>
            </StatCard>
          </HeroStats>
        </HeroContent>
      </HeroSection>

      <MainContent>
        <SectionIntro>
          <SectionTitle>Our Pediatric Services</SectionTitle>
          <SectionDescription>
            Dr.S.T.Pushpa provides comprehensive pediatric care with a focus on preventive medicine, early intervention, and family-centered care. Our services are designed to support your child's healthy development from infancy through adolescence.
          </SectionDescription>
        </SectionIntro>

        <SwipeableSection title="Vaccination Services" slides={vaccinationSlides} sectionId="vaccination" />
        <SwipeableSection title="Growth & Development" slides={growthSlides} sectionId="growth" />
        <SwipeableSection title="Child Care Services" slides={careSlides} sectionId="care" />
        <SwipeableSection title="Our Clinic Gallery" slides={gallerySlides} sectionId="gallery" />
        
        <AgeGroupsSection />
        <CTASection />
      </MainContent>
    </>
  );
};

export default Home;
