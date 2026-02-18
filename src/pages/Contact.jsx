import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
`;

const ContactForm = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  color: #00897b;
  margin-bottom: 1.5rem;
`;

const ContactItem = styled.div`
  margin-bottom: 1.5rem;
  
  h3 {
    color: #004d40;
    margin-bottom: 0.5rem;
  }
  
  p {
    color: #666;
    line-height: 1.6;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  
  label {
    color: #004d40;
    font-weight: 500;
    margin-bottom: 0.5rem;
  }
  
  input, textarea {
    padding: 0.75rem;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-family: inherit;
    transition: border-color 0.3s;
    
    &:focus {
      outline: none;
      border-color: #00897b;
    }
  }
  
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: #00897b;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.3s;
  
  &:hover {
    background: #00695c;
  }
`;

const MapContainer = styled.div`
  margin-top: 3rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
`;

const Contact = () => {
  return (
    <ContactContainer>
      <PageTitle>Contact Us</PageTitle>
      <ContactGrid>
        <ContactInfo>
          <SectionTitle>Get in Touch</SectionTitle>
          <ContactItem>
            <h3>📍 Address</h3>
            <p>
              No 42, 89/5, ASR Complex, Horamavu, Agara Main Road, 
              1st Block, Prakruthii Twp, Bengaluru, Karnataka - 560043
            </p>
          </ContactItem>
          <ContactItem>
            <h3>📞 Phone</h3>
            <p>+91 9566293322</p>
            <p>+91 9940636769</p>
          </ContactItem>
          <ContactItem>
            <h3>📧 Email</h3>
            <p>kidzclinics@gmail.com</p>
            <p>dr.pushpa@kidzclinic.com</p>
          </ContactItem>
          <ContactItem>
            <h3>🕐 Clinic Hours</h3>
            <p><strong>Monday - Saturday:</strong></p>
            <p>Morning: 11:00 AM - 1:00 PM</p>
            <p>Evening: 5:00 PM - 9:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
          </ContactItem>
        </ContactInfo>
        
        <ContactForm>
          <SectionTitle>Send us a Message</SectionTitle>
          <Form>
            <FormGroup>
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required />
            </FormGroup>
            <FormGroup>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </FormGroup>
            <FormGroup>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </ContactForm>
      </ContactGrid>
      
      <MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.947094306!2d77.6328!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTgnMTcuOSJOIDc3wrAzOScxNi44IkU!5e0!3m2!1sen!2sin!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Clinic Location Map"
        />
      </MapContainer>
    </ContactContainer>
  );
};

export default Contact;
