import { Link } from 'react-router-dom';
import { HeaderContainer, Logo, Nav, NavLink, LogoText, LoginButton } from './HeaderStyles';
import logo from '@/assets/logo.svg';

const Header = () => {
  return (
    <HeaderContainer>
      <Link to="/">
        <Logo>
          <img src={logo} alt="ТхэквондоПлюс" />
          <LogoText>ТхэквондоПлюс</LogoText>
        </Logo>
      </Link>
      <Nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/trainers">Тренеры</NavLink>
        <NavLink to="/news">Новости</NavLink>
      </Nav>
      <LoginButton to="/login">Войти</LoginButton>
    </HeaderContainer>
  );
};

export default Header;