import React from 'react';
import styled from 'styled-components';
import CTASection from '../components/CTASection';

const AboutContainer = styled.div`
  overflow-x: hidden;
`;

const AboutHero = styled.section`
  min-height: 70vh;
  display: flex;
  align-items: center;
  position: relative;
  background: ${props => props.theme.mode === 'dark' ? props.theme.colors.background : props.theme.colors.accent};
  padding: 10rem 0 4rem;
  
  @media (max-width: 1024px) {
    min-height: auto;
    padding: 10rem 0 6rem;
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
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 4rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 2rem;
  }
`;

const TextBlock = styled.div`
  color: white;
  
  h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 800;
    line-height: 1.1;
    margin-bottom: 2rem;
    letter-spacing: -2px;
  }

  p {
    font-size: 1.4rem;
    opacity: 0.9;
    max-width: 600px;
    margin-bottom: 3rem;
    line-height: 1.6;

    @media (max-width: 1024px) {
      margin: 0 auto 3rem;
    }
  }
`;

const ProfileCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 3rem;
  border-radius: 40px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid ${props => props.theme.colors.border};
  
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 2rem;
    border: 4px solid ${props => props.theme.colors.primary};
  }
  
  h2 {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.accent};
    margin-bottom: 0.5rem;
  }
  
  .subtitle {
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 1rem;
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
    { year: 'Since 2010', title: 'Proprietor, Kidz Clinic', text: 'Established Private Practice focusing on holistic child healthcare and preventive medicine.' },
    { year: '2018-2023', title: 'Pediatrician, WCF Hospitals', text: 'Head of Pediatric Department, managing complex clinical cases and neonatal care.' },
    { year: '2017-2018', title: 'Consultant, Apollo Hospitals', text: 'Specialized in Newborn ICU (NICU) and Pediatric Emergency management.' },
    { year: '2014-2017', title: 'Consultant, Specialist Hospital', text: 'Managed pediatric outpatient services and critical care emergencies.' },
  ];

  return (
    <AboutContainer>
      <AboutHero>
        <HeroBackground />
        <HeroContent>
          <TextBlock>
            <h1>Meet Dr.S.T.Pushpa</h1>
            <p>
              A legacy of compassion and excellence in pediatric care for over 15 years. Dedicated to nurturing the health and futures of little ones.
            </p>
          </TextBlock>
          <ProfileCard className="floating">
            <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80" alt="Dr. ST Pushpa" />
            <h2>Dr.S.T.Pushpa</h2>
            <div className="subtitle">Paediatrician & Child Specialist</div>
          </ProfileCard>
        </HeroContent>
      </AboutHero>

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
            <li>International Pediatric PG Certificate (IPPC), Sydney</li>
            <li>Pediatric Asthma/Allergy Specialist (AASC), USA</li>
          </ul>
        </InfoCard>
        <InfoCard>
          <h3>Expertise</h3>
          <ul>
            <li>Neonatal & Newborn Special Care</li>
            <li>Growth & Developmental Monitoring</li>
            <li>IAP Advanced Immunization Services</li>
            <li>Pediatric Allergy & Asthma Management</li>
            <li>Pediatric Nutritional Counseling</li>
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

      <CTASection />
    </AboutContainer>
  );
};

export default About;
