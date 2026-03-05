import React, { useState } from 'react';
import styled from 'styled-components';
import CTASection from '../components/CTASection';

const ContactContainer = styled.div`
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

const MainGrid = styled.section`
  max-width: 1400px;
  margin: 6rem auto;
  padding: 0 4rem;
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 2rem;
    gap: 4rem;
  }
`;

const InfoPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

const ContactCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 3rem;
  border-radius: 32px;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.accent};
  }

  .item {
    display: flex;
    gap: 1.25rem;
    margin-bottom: 2rem;
    
    .icon {
      font-size: 1.5rem;
      color: ${props => props.theme.colors.primary};
      background: ${props => props.theme.colors.primary}11;
      width: 50px;
      height: 50px;
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .detail {
      h4 {
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        opacity: 0.6;
        margin-bottom: 0.25rem;
      }
      p, a {
        font-size: 1.15rem;
        color: ${props => props.theme.colors.text};
        text-decoration: none;
        font-weight: 700;
        line-height: 1.4;
      }
    }

    &:last-child { margin-bottom: 0; }
  }
`;

const FormCard = styled.div`
  background: ${props => props.theme.colors.cardBackground};
  padding: 5rem;
  border-radius: 40px;
  box-shadow: 0 30px 60px rgba(0,0,0,0.05);
  border: 1px solid ${props => props.theme.colors.border};

  @media (max-width: 768px) { padding: 3rem; }

  h2 {
    font-size: 2.8rem;
    margin-bottom: 3rem;
    color: ${props => props.theme.colors.accent};
  }
`;

const StyledForm = styled.form`
  display: grid;
  gap: 2rem;

  .group {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    label {
      font-weight: 800;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      opacity: 0.6;
    }

    input, textarea {
      padding: 1.25rem;
      border-radius: 18px;
      border: 1px solid ${props => props.theme.colors.border};
      background: ${props => props.theme.colors.background};
      color: ${props => props.theme.colors.text};
      font-size: 1.1rem;
      transition: all 0.3s ease;

      &:focus {
        outline: none;
        border-color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.cardBackground};
        box-shadow: 0 0 0 4px ${props => props.theme.colors.primary}11;
      }
    }
  }

  button {
    background: ${props => props.theme.colors.primary};
    color: white;
    padding: 1.5rem;
    border: none;
    border-radius: 20px;
    font-size: 1.25rem;
    font-weight: 800;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 10px 30px rgba(0, 129, 255, 0.2);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0, 129, 255, 0.3);
      filter: brightness(1.1);
    }
  }
`;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.target.reset();
  };

  return (
    <ContactContainer>
      <HeroSection>
        <HeroBackground />
        <HeroContent>
          <TextBlock>
            <h1>Contact <br /> <span className="accent">Our Clinic</span></h1>
            <p>
              Your child's health is our priority. Connect with Dr. S.T. Pushpa for expert pediatric care and consultations.
            </p>
          </TextBlock>
          <div className="floating" style={{
            borderRadius: '40px',
            overflow: 'hidden',
            boxShadow: '0 40px 80px rgba(0,0,0,0.25)',
            height: '450px',
            background: 'white',
            padding: '10px',
            border: '2px solid rgba(255,255,255,0.1)'
          }}>
            <iframe
              title="Kidz Clinic Map"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: '30px', filter: 'contrast(1.05)' }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15548.364726451675!2d77.652968!3d13.0298652!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17f7ec026bf3%3A0x6773285956f5aa32!2sKidz%20Clinic%20(Dr.%20S%20T%20Pushpa)!5e0!3m2!1sen!2sin!4v1772690713114!5m2!1sen!2sin"
            ></iframe>
          </div>
        </HeroContent>
      </HeroSection>

      <MainGrid>
        <InfoPanel>
          <ContactCard>
            <h3>Direct Reach</h3>
            <div className="item">
              <div className="icon">📍</div>
              <div className="details">
                <h4>Clinic Address</h4>
                <p>Kidz Clinic<br />ASR Complex, No.41 & 42, 89/5, Prakruthi Township, 1st Block, Horamavu Agara Main Road, Bangalore, Karnataka 560043.</p>
              </div>
            </div>
            <div className="item">
              <div className="icon">📞</div>
              <div className="details">
                <h4>Call Center</h4>
                <p><a href="tel:+919566293322">+91 95662 93322</a></p>
              </div>
            </div>
            <div className="item">
              <div className="icon">📧</div>
              <div className="details">
                <h4>Email Inbox</h4>
                <p><a href="mailto:admin@drstpushpa.com">admin@drstpushpa.com</a></p>
              </div>
            </div>
          </ContactCard>
          <ContactCard>
            <h3>Clinical Hours</h3>
            <div className="item">
              <div className="icon">🕒</div>
              <div className="details">
                <h4>Monday - Saturday</h4>
                <p>11:00 AM - 1:00 PM</p>
                <p>5:00 PM - 9:00 PM</p>
                <p style={{ marginTop: '0.5rem', opacity: 0.8 }}>Sunday Holiday</p>
              </div>
            </div>
          </ContactCard>
        </InfoPanel>

        <FormCard>
          <h2>Clinical Inquiry</h2>
          <StyledForm onSubmit={handleSubmit}>
            <div className="group">
              <label>Guardian Name</label>
              <input type="text" placeholder="e.g. Rahul Sharma" required />
            </div>
            <div className="group">
              <label>Message</label>
              <textarea rows="5" placeholder="Briefly describe your concern..." required></textarea>
            </div>
            <button type="submit">
              {submitted ? 'Inquiry Sent! ✓' : 'Submit Inquiry'}
            </button>
          </StyledForm>
        </FormCard>
      </MainGrid>

      <CTASection />
    </ContactContainer>
  );
};

export default Contact;
