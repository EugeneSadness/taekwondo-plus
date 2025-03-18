import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
}

const StyledPrimaryButton = styled(Link)`
  display: inline-block;
  padding: 12px 25px;
  background-color: white;
  color: #B71C1C;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s;
  text-align: center;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    transform: translateY(-2px);
  }
`;

const StyledSecondaryButton = styled(Link)`
  display: inline-block;
  padding: 12px 25px;
  background-color: transparent;
  color: white;
  font-weight: 500;
  border: 1px solid white;
  border-radius: 4px;
  transition: all 0.3s;
  text-align: center;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }
`;

export const PrimaryButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({ 
  children, 
  to = '/',
  onClick
}) => {
  return (
    <StyledPrimaryButton to={to} onClick={onClick}>
      {children}
    </StyledPrimaryButton>
  );
};

export const SecondaryButton: React.FC<React.PropsWithChildren<ButtonProps>> = ({ 
  children, 
  to = '/',
  onClick
}) => {
  return (
    <StyledSecondaryButton to={to} onClick={onClick}>
      {children}
    </StyledSecondaryButton>
  );
};