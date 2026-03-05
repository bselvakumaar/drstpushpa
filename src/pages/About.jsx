import React from 'react';
import styled from 'styled-components';
import CTASection from '../components/CTASection';

const AboutContainer = styled.div`
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  min-height: 80vh;
  display: flex;
  align-items: center;
  position: relative;
  background: ${props => props.theme.colors.background};
  padding: 10rem 0 16rem;
  margin-bottom: 6rem;
  
  @media (max-width: 1024px) {
    min-height: auto;
    padding: 10rem 0 6rem;
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

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.3;
  }

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
  color: ${props => props.theme.mode === 'light' ? props.theme.colors.text : 'white'};
  
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
    color: ${props => props.theme.mode === 'light' ? props.theme.colors.text : '#ffffff'};
    opacity: ${props => props.theme.mode === 'light' ? '0.8' : '0.95'};
    max-width: 600px;
    margin-bottom: 3rem;
    line-height: 1.6;

    @media (max-width: 1024px) {
      margin: 0 auto 3rem;
    }
  }
`;

const floatAnimation = `
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }
`;

const ProfileCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 3rem;
  border-radius: 40px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.border};
  position: relative;
  z-index: 3;

  &.floating {
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: contain;
    background: ${props => props.theme.mode === 'light' ? '#f0f9ff' : '#1e3a5f'};
    padding: 1rem;
    margin-bottom: 2rem;
    border: 4px solid ${props => props.theme.colors.primary};
    box-shadow: 0 8px 24px rgba(0,0,0,0.12);
  }
  
  h2 {
    font-size: 2.2rem;
    color: ${props => props.theme.colors.accent};
    margin-bottom: 0.5rem;
    white-space: nowrap;
  }
  
  .subtitle {
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.95rem;
  }

  @media (max-width: 1024px) {
    max-width: 360px;
    margin: 0 auto;
  }
`;

const StatsBar = styled.div`
  display: flex;
  justify-content: space-around;
  background: ${props => props.theme.colors.cardBackground};
  padding: 3rem;
  border-radius: 40px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.05);
  margin-top: -60px;
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid ${props => props.theme.colors.border};

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  .num {
    font-size: 3rem;
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
    display: block;
  }
  .label {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    opacity: 0.6;
    font-size: 0.9rem;
  }
`;

const GridSection = styled.section`
  max-width: 1400px;
  margin: 6rem auto;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
  }
`;

const InfoCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 4rem;
  border-radius: 32px;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  }

  h3 {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
    color: ${props => props.theme.colors.accent};
    display: flex;
    align-items: center;
    gap: 1.5rem;

    &::before {
      content: '';
      width: 6px;
      height: 30px;
      background: ${props => props.theme.colors.primary};
      border-radius: 3px;
    }
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    padding: 1.25rem 0;
    border-bottom: 1px solid #f1f5f9;
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    color: ${props => props.theme.colors.text};
    font-size: 1.1rem;
    
    &::before {
      content: '✦';
      color: ${props => props.theme.colors.primary};
      font-weight: bold;
    }

    &:last-child {
      border-bottom: none;
    }
  }
`;

const TimelineSection = styled.section`
  padding: 6rem 4rem;
  background: ${props => props.theme.mode === 'light' ? '#f8fafc' : props.theme.colors.cardBackground};
`;

const TimelineItem = styled.div`
  max-width: 900px;
  margin: 0 auto 3rem;
  background: ${props => props.theme.colors.cardBackground};
  padding: 3rem;
  border-radius: 24px;
  display: flex;
  gap: 3rem;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateX(10px);
  }

  .year {
    font-size: 1.25rem;
    font-weight: 800;
    color: white;
    background: ${props => props.theme.colors.primary};
    padding: 0.5rem 1.5rem;
    border-radius: 50px;
    white-space: nowrap;
  }

  .content {
    h4 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      color: ${props => props.theme.colors.accent};
    }
    p {
      opacity: 0.7;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
  }
`;

const About = () => {
  const timelineItems = [
    { year: 'Since 2010', title: 'Proprietor, Kidz Clinic', text: 'Established Independent Practice focusing on comprehensive holistic child healthcare and preventive medicine.' },
    { year: '2018-2023', title: 'Pediatrician, WCF Hospitals', text: 'Consultant Pediatrician/Head of Pediatrics managing complex clinical cases and neonatal care.' },
    { year: '2017-2018', title: 'Pediatrician, Apollo Hospitals', text: 'Specialized in Pediatrics New Born ICU (NICU) and Pediatric Intensive Care Unit (PICU).' },
    { year: '2014-2017', title: 'Pediatrician, Specialist Hospital, Bangalore', text: 'Consultant Pediatrician and Head of Pediatrics department.' },
    { year: '2014-2017', title: 'Pediatrician, Ovum Hospitals, Bangalore', text: 'Consultant Pediatrician.' },
    { year: '2010-2014', title: 'Pediatrician, Manipal Hospitals, Bangalore', text: 'Pediatrics Specialist in Pediatric Emergencies.' },
  ];

  return (
    <AboutContainer>
      <HeroSection>
        <HeroBackground />
        <HeroContent>
          <TextBlock>
            <h1>About <br /> <span className="accent">Dr. S.T. Pushpa</span></h1>
            <p>
              A legacy of compassion and excellence in pediatric care for over 15 years. Dedicated to nurturing the health and futures of little ones.
            </p>
          </TextBlock>
          <ProfileCard className="floating">
            <img src="/assets/baby_logo_8k.svg" alt="Dr. S.T. Pushpa" />
            <h2>Dr. S.T. Pushpa</h2>
            <div className="subtitle">Paediatrician & Child Specialist</div>
          </ProfileCard>
        </HeroContent>
      </HeroSection>

      <StatsBar>
        <StatItem>
          <span className="num">15+</span>
          <span className="label">Years Experience</span>
        </StatItem>
        <StatItem>
          <span className="num">10K+</span>
          <span className="label">Happy Families</span>
        </StatItem>
        <StatItem>
          <span className="num">100%</span>
          <span className="label">Pure Care</span>
        </StatItem>
      </StatsBar>

      <GridSection>
        <InfoCard>
          <h3>Education</h3>
          <ul>
            <li>MBBS - VIMS, Bellary</li>
            <li>MD (Paediatrics) - Kathmandu University</li>
            <li>Fellowship in Pediatric Emergency, Manipal Hospital</li>
            <li>IPPC (International Pediatric PG Certificate), Sydney, Australia</li>
            <li>AASC (Pediatric Asthma/Allergy Specialist), Colorado, USA</li>
            <li>PGPN (Pediatric Nutrition), Boston, USA</li>
            <li>DPSM (Pediatric Sleep Medicine)</li>
          </ul>
        </InfoCard>
        <InfoCard>
          <h3>Expertise</h3>
          <ul>
            <li>Neonatal & Newborn Special Care</li>
            <li>Childhood Development and Growth</li>
            <li>IAP Advanced Immunization Services</li>
            <li>Pediatric Allergy & Asthma Management</li>
            <li>Pediatric Nutritional Counseling</li>
            <li>Pediatric Sleep Disorders</li>
            <li>Developmental & Behavioral Disorders</li>
            <li>Pediatric Emergency Care</li>
          </ul>
        </InfoCard>
      </GridSection>

      <TimelineSection>
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h2 className="text-gradient" style={{ fontSize: '3.5rem' }}>Professional Journey</h2>
        </div>
        {timelineItems.map((item, index) => (
          <TimelineItem key={index}>
            <div className="year">{item.year}</div>
            <div className="content">
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </TimelineItem>
        ))}
      </TimelineSection>

      <GridSection style={{ marginTop: '0' }}>
        <InfoCard style={{ gridColumn: '1 / -1' }}>
          <h3>Philosophy of Care</h3>
          <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0 2rem' }}>
            <li>Holistic approach to child healthcare</li>
            <li>Evidence-based medicine with compassion</li>
            <li>Preventive healthcare and wellness</li>
            <li>Early detection and intervention</li>
            <li>Family-centered care approach</li>
            <li>Continuous education for parents</li>
          </ul>
        </InfoCard>
      </GridSection>

      <CTASection />
    </AboutContainer>
  );
};

export default About;
