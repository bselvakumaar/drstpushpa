import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SwipeableSection from '../components/SwipeableSection';
import AgeGroupsSection from '../components/AgeGroupsSection';
import CTASection from '../components/CTASection';
import { useTheme } from '../context/ThemeContext';

const HomeContainer = styled.div`
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  background: ${props => props.theme.mode === 'dark' ? props.theme.colors.background : props.theme.colors.accent};
  padding: 10rem 0 16rem;
  margin-bottom: 6rem;
  
  @media (max-width: 1024px) {
    min-height: auto;
    padding: 10rem 0 4rem;
    margin-bottom: 0;
    flex-direction: column;
  }
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background: ${props => props.theme.colors.headerGradient};
  z-index: 1;
  clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);

  @media (max-width: 1024px) {
    width: 100%;
    height: 60%;
    top: auto;
    bottom: 0;
    clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: center;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 2rem;
  }
`;

const TextBlock = styled.div`
  color: white;
  padding-right: 2rem;
  
  h1 {
    font-size: clamp(3rem, 5.5vw, 5rem);
    font-weight: 800;
    line-height: 1;
    margin-bottom: 2.5rem;
    letter-spacing: -3px;
    
    .accent {
      color: ${props => props.theme.colors.secondary};
    }
  }

  p {
    font-size: 1.4rem;
    opacity: 0.9;
    max-width: 600px;
    margin-bottom: 4rem;
    line-height: 1.6;

    @media (max-width: 1024px) {
      margin: 0 auto 3rem;
    }
  }
`;

const HeroImageWrapper = styled.div`
  position: relative;
  border-radius: 40px;
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  width: 100%;
  
  img {
    width: 100%;
    height: auto;
    max-height: 700px;
    object-fit: contain;
    display: block;
    border-radius: 40px;
    box-shadow: 0 40px 100px rgba(0,0,0,0.3);
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.2);
    border-radius: 40px;
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    height: auto;
    max-width: 800px;
    margin: 0 auto;
  }
`;

const FloatingStats = styled.div`
  position: absolute;
  bottom: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1100px;
  background: ${props => props.theme.mode === 'dark' ? 'rgba(30, 41, 59, 0.85)' : 'rgba(255, 255, 255, 0.95)'};
  padding: 3.5rem 2rem;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  box-shadow: 0 25px 60px rgba(0,0,0,0.08);
  border: 1px solid rgba(255,255,255,0.2);
  z-index: 10;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  @media (max-width: 1024px) {
    position: relative;
    bottom: auto;
    left: auto;
    transform: none;
    width: calc(100% - 4rem);
    margin: -3rem 2rem 4rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 0 1rem;
  flex: 1;
  min-width: 200px;
  
  .icon-wrap {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}22, ${props => props.theme.colors.secondary}22);
    color: ${props => props.theme.colors.primary};
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    margin-bottom: 0.5rem;
    transition: transform 0.3s ease;
  }

  &:hover .icon-wrap {
    transform: scale(1.1) rotate(5deg);
  }

  .number {
    font-size: 3.5rem;
    font-weight: 800;
    line-height: 1;
    background: linear-gradient(to right, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .label {
    font-size: 1.1rem;
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    opacity: 0.8;
  }
`;
const IntroSection = styled.section`
  padding: 8rem 4rem 6rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    padding: 6rem 2rem;
  }
`;

const WelcomeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 4rem;
  }
`;

const WelcomeText = styled.div`
  h2 {
    font-size: 4rem;
    color: ${props => props.theme.colors.accent};
    margin-bottom: 2.5rem;
    line-height: 1.1;
  }
  
  p {
    font-size: 1.35rem;
    color: ${props => props.theme.colors.text};
    opacity: 0.8;
    line-height: 1.8;
    margin-bottom: 3.5rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 20px;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-8px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 15px 35px rgba(0,0,0,0.05);
  }

  .icon-circle {
    width: 50px;
    height: 50px;
    background: ${props => props.theme.colors.primary}11;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
    font-size: 1.5rem;
  }

  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.accent};
  }

  p {
    font-size: 1.05rem;
    line-height: 1.5;
    margin-bottom: 0;
  }
`;

const Home = () => {
  const { theme } = useTheme();
  const vaccinationSlides = [
    {
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80',
      title: 'IAP Protocol Vaccination',
      description: 'Following the latest Indian Academy of Pediatrics (IAP) guidelines for comprehensive childhood immunization.'
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&q=80',
      title: 'Safety First Monitoring',
      description: 'Sterile, safe environment with dedicated post-vaccination monitoring for your peace of mind.'
    }
  ];

  const growthSlides = [
    {
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
      title: 'Developmental Screening',
      description: 'Regular assessment of motor, social, and cognitive milestones to ensure on-track development.'
    }
  ];

  return (
    <HomeContainer>
      <HeroSection>
        <HeroBackground />
        <HeroContent>
          <TextBlock>

            <h1>Nurturing <br /> <span className="accent">Health</span> & Magic</h1>
            <p>
              Premium pediatric care designed for the most precious people in your life. Experience world-class medical excellence.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="/contact" className="cta-btn">Book Consultation</a>
              <a href="/about" className="cta-btn secondary">Our Story</a>
            </div>
          </TextBlock>
          <HeroImageWrapper className="floating">
            <img src="/Pediatric Care.jpeg" alt="Kidz Clinic Care" />
          </HeroImageWrapper>
        </HeroContent>
        <FloatingStats>
          <StatItem>
            <div className="icon-wrap">🌟</div>
            <div className="number">15+</div>
            <div className="label">Years of Care</div>
          </StatItem>
          <StatItem>
            <div className="icon-wrap">👩‍👧‍👦</div>
            <div className="number">10K+</div>
            <div className="label">Happy Parents</div>
          </StatItem>
          <StatItem>
            <div className="icon-wrap">⚕️</div>
            <div className="number">24/7</div>
            <div className="label">Expert Support</div>
          </StatItem>
        </FloatingStats>
      </HeroSection>

      <IntroSection>
        <WelcomeGrid>
          <WelcomeText>
            <h2 className="text-gradient">Complete Child Care Under One Roof</h2>
            <p>
              Our facility isn't just a clinic; it's a sanctuary for healing. We combine cutting-edge pediatric science with a compassionate, child-centric approach that makes every visit a positive experience.
            </p>
            <FeatureGrid>
              <FeatureCard>
                <div className="icon-circle">⚕️</div>
                <h4>Holistic Medicine</h4>
                <p>Treating the whole child, not just the symptoms.</p>
              </FeatureCard>
              <FeatureCard>
                <div className="icon-circle">✨</div>
                <h4>Child-Friendly</h4>
                <p>Designed to put kids at ease and reduce anxiety.</p>
              </FeatureCard>
            </FeatureGrid>
          </WelcomeText>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <img
              src="/assets/hero-pediatric-care.png"
              alt="Pediatric Care Medical Consultation"
              style={{ width: '100%', maxWidth: '600px', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }}
            />
          </div>
        </WelcomeGrid>
      </IntroSection>

      <div style={{ background: theme.mode === 'light' ? '#f8fafc' : theme.colors.cardBackground, padding: '4rem 0' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '0 4rem' }}>
          <SwipeableSection title="Essential Vaccination" slides={vaccinationSlides} sectionId="vaccination" />
          <SwipeableSection title="Growth Monitoring" slides={growthSlides} sectionId="growth" />
        </div>
      </div>

      <div style={{ padding: '4rem 0' }}>
        <AgeGroupsSection />
      </div>

      <CTASection />
    </HomeContainer >
  );
};

export default Home;
