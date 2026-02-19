import React, { useState } from 'react';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';
import { FaPalette, FaSun, FaMoon, FaWater } from 'react-icons/fa';

const SwitcherContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const ToggleButton = styled.button`
  background: ${props => props.theme.colors.cardBackground};
  color: ${props => props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  z-index: 1001;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  }
`;

const ModeMenu = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  background: ${props => props.theme.colors.cardBackground};
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.15);
  min-width: 120px;
  z-index: 1000;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
  transform: ${props => (props.isOpen ? 'translateY(0)' : 'translateY(-10px)')};
  transition: all 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    top: -6px;
    right: 14px;
    width: 12px;
    height: 12px;
    background: ${props => props.theme.colors.cardBackground};
    border-left: 1px solid ${props => props.theme.colors.border};
    border-top: 1px solid ${props => props.theme.colors.border};
    transform: rotate(45deg);
  }
`;

const ModeOption = styled.button`
  background: transparent;
  color: ${props => props.theme.colors.text};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.9rem;
  text-align: left;
  transition: background 0.2s;
  width: 100%;

  &:hover {
    background: ${props => props.theme.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'};
  }

  svg {
    font-size: 1.1rem;
  }
`;

const ThemeSwitcher = () => {
    const { toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    // We should verify if react-icons is installed. If not, I will install it.
    // Assuming standard implementation first.

    return (
        <SwitcherContainer>
            <ToggleButton onClick={() => setIsOpen(!isOpen)} title="Change Theme">
                <FaPalette />
            </ToggleButton>
            <ModeMenu isOpen={isOpen}>
                <ModeOption onClick={() => { toggleTheme('light'); setIsOpen(false); }}>
                    <FaSun style={{ color: '#fdb813' }} /> Light
                </ModeOption>
                <ModeOption onClick={() => { toggleTheme('dark'); setIsOpen(false); }}>
                    <FaMoon style={{ color: '#7c4dff' }} /> Dark
                </ModeOption>
                <ModeOption onClick={() => { toggleTheme('blue'); setIsOpen(false); }}>
                    <FaWater style={{ color: '#2196f3' }} /> Ocean
                </ModeOption>
            </ModeMenu>
        </SwitcherContainer>
    );
};

export default ThemeSwitcher;
