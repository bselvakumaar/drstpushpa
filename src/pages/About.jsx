import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
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

const AboutContent = styled.div`
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  line-height: 1.8;
  color: #555;
`;

const About = () => {
  return (
    <AboutContainer>
      <PageTitle>About Dr.S.T.Pushpa</PageTitle>
      <AboutContent>
        <h2>Professional Background</h2>
        <p>
          Dr. S.T. Pushpa is a renowned pediatrician with over 15 years of experience in child healthcare. 
          She completed her MBBS and MD in Pediatrics from prestigious medical institutions and has been 
          serving the Bangalore community with dedication and compassion.
        </p>
        <br />
        <h2>Areas of Expertise</h2>
        <p>
          Dr. Pushpa specializes in newborn care, vaccination management, growth and development monitoring, 
          and treatment of common childhood illnesses. Her approach combines medical expertise with a 
          child-friendly demeanor that helps children feel comfortable during medical examinations.
        </p>
        <br />
        <h2>Philosophy of Care</h2>
        <p>
          "Every child deserves the best possible start in life. My goal is to provide comprehensive, 
          compassionate care that supports not just physical health, but emotional well-being and 
          developmental milestones as well."
        </p>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
