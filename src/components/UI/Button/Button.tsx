import styled from 'styled-components';
import { Link } from 'react-router-dom';

interface ButtonProps {
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  fullWidth?: boolean;
}

const BaseButton = styled.button<{ fullWidth?: boolean }>`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

const BaseButtonLink = styled(Link)<{ fullWidth?: boolean }>`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
`;

export const PrimaryButtonStyle = styled(BaseButton)`
  background-color: #B71C1C;
  color: white;
  border: 2px solid #B71C1C;
  
  &:hover {
    background-color: #8B0000;
    border-color: #8B0000;
  }
`;

export const PrimaryButtonLinkStyle = styled(BaseButtonLink)`
  background-color: #B71C1C;
  color: white;
  border: 2px solid #B71C1C;
  
  &:hover {
    background-color: #8B0000;
    border-color: #8B0000;
  }
`;

export const SecondaryButtonStyle = styled(BaseButton)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SecondaryButtonLinkStyle = styled(BaseButtonLink)`
  background-color: transparent;
  color: white;
  border: 2px solid white;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const OutlineButtonStyle = styled(BaseButton)`
  background-color: transparent;
  color: #B71C1C;
  border: 2px solid #B71C1C;
  
  &:hover {
    background-color: rgba(183, 28, 28, 0.1);
  }
`;

export const OutlineButtonLinkStyle = styled(BaseButtonLink)`
  background-color: transparent;
  color: #B71C1C;
  border: 2px solid #B71C1C;
  
  &:hover {
    background-color: rgba(183, 28, 28, 0.1);
  }
`;

export const PrimaryButton = ({ children, to, onClick, fullWidth }: ButtonProps) => {
  if (to) {
    return (
      <PrimaryButtonLinkStyle to={to} fullWidth={fullWidth}>
        {children}
      </PrimaryButtonLinkStyle>
    );
  }
  
  return (
    <PrimaryButtonStyle onClick={onClick} fullWidth={fullWidth}>
      {children}
    </PrimaryButtonStyle>
  );
};

export const SecondaryButton = ({ children, to, onClick, fullWidth }: ButtonProps) => {
  if (to) {
    return (
      <SecondaryButtonLinkStyle to={to} fullWidth={fullWidth}>
        {children}
      </SecondaryButtonLinkStyle>
    );
  }
  
  return (
    <SecondaryButtonStyle onClick={onClick} fullWidth={fullWidth}>
      {children}
    </SecondaryButtonStyle>
  );
};

export const OutlineButton = ({ children, to, onClick, fullWidth }: ButtonProps) => {
  if (to) {
    return (
      <OutlineButtonLinkStyle to={to} fullWidth={fullWidth}>
        {children}
      </OutlineButtonLinkStyle>
    );
  }
  
  return (
    <OutlineButtonStyle onClick={onClick} fullWidth={fullWidth}>
      {children}
    </OutlineButtonStyle>
  );
};