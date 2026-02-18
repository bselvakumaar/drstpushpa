import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const SwipeableSectionContainer = styled.div`
  background: white;
  padding: 3rem 2rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.1);
  margin-bottom: 3rem;
  transition: transform 0.3s, box-shadow 0.3s;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  }
  
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  color: #00897b;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: linear-gradient(135deg, #00897b, #00796b);
    border-radius: 2px;
  }
`;

const SwipeableContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
`;

const SwipeableContent = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 16px;
  background: #f8f9fa;
`;

const SwipeSlide = styled.div`
  min-width: 100%;
  transition: transform 0.5s ease;
  display: ${props => props.active ? 'block' : 'none'};
`;

const SlideContent = styled.div`
  padding: 2rem;
  text-align: center;
`;

const SlideImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: 250px;
  object-fit: cover;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 8px 25px rgba(0,0,0,0.1);
`;

const SlideTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  color: #004d40;
  margin-bottom: 1rem;
`;

const SlideDescription = styled.p`
  color: #666;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const SwipeArrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255,255,255,0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  transition: all 0.3s;
  z-index: 10;
  
  &:hover {
    background: white;
    box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const SwipeArrowLeft = styled(SwipeArrow)`
  left: -25px;
  
  @media (max-width: 768px) {
    left: -20px;
  }
`;

const SwipeArrowRight = styled(SwipeArrow)`
  right: -25px;
  
  @media (max-width: 768px) {
    right: -20px;
  }
`;

const SwipeDots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  gap: 0.5rem;
`;

const SwipeDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${props => props.active ? '#00897b' : '#e0e0e0'};
  cursor: pointer;
  transition: all 0.3s;
  transform: ${props => props.active ? 'scale(1.2)' : 'scale(1)'};
  border: none;
  padding: 0;
`;

const SwipeableSection = ({ title, slides, sectionId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const changeSlide = (direction) => {
    const newSlide = currentSlide + direction;
    if (newSlide >= 0 && newSlide < slides.length) {
      setCurrentSlide(newSlide);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') {
        changeSlide(-1);
      } else if (e.key === 'ArrowRight') {
        changeSlide(1);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide]);

  return (
    <SwipeableSectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <SwipeableContainer>
        <SwipeArrowLeft onClick={() => changeSlide(-1)} aria-label="Previous slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </SwipeArrowLeft>
        
        <SwipeableContent>
          {slides.map((slide, index) => (
            <SwipeSlide key={index} active={index === currentSlide}>
              <SlideContent>
                <SlideImage src={slide.image} alt={slide.title} />
                <SlideTitle>{slide.title}</SlideTitle>
                <SlideDescription>{slide.description}</SlideDescription>
              </SlideContent>
            </SwipeSlide>
          ))}
        </SwipeableContent>
        
        <SwipeArrowRight onClick={() => changeSlide(1)} aria-label="Next slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </SwipeArrowRight>
      </SwipeableContainer>
      
      <SwipeDots>
        {slides.map((_, index) => (
          <SwipeDot
            key={index}
            active={index === currentSlide}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </SwipeDots>
    </SwipeableSectionContainer>
  );
};

export default SwipeableSection;
