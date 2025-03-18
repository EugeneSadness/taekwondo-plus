import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
`;

export const LogoText = styled.span`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const NavLink = styled(Link)`
  color: #333;
  font-size: 16px;
  position: relative;
  font-weight: 500;
  
  &:hover {
    color: #B71C1C;
  }
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #B71C1C;
    transition: width 0.3s;
  }
  
  &:hover:after {
    width: 100%;
  }
`;

export const LoginButton = styled(Link)`
  padding: 8px 20px;
  border: 1px solid #B71C1C;
  border-radius: 4px;
  color: #B71C1C;
  font-weight: 500;
  transition: all 0.3s;
  
  &:hover {
    background-color: #B71C1C;
    color: white;
  }
`;