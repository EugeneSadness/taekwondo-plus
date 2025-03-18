import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 50px 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  padding: 0 20px;
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 20px;
  color: #fff;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 40px;
    height: 2px;
    background-color: #B71C1C;
    bottom: -8px;
    left: 0;
  }
`;

const FooterLink = styled(Link)`
  color: #ccc;
  margin-bottom: 10px;
  transition: color 0.3s;
  
  &:hover {
    color: #fff;
  }
`;

const FooterAddress = styled.address`
  font-style: normal;
  margin-top: 10px;
  line-height: 1.6;
  color: #ccc;
`;

const FooterCopyright = styled.div`
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: #ccc;
  font-size: 14px;
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>О нас</FooterTitle>
          <FooterLink to="/about">О школе</FooterLink>
          <FooterLink to="/trainers">Наши тренеры</FooterLink>
          <FooterLink to="/schedule">Расписание</FooterLink>
          <FooterLink to="/prices">Цены</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Информация</FooterTitle>
          <FooterLink to="/news">Новости</FooterLink>
          <FooterLink to="/events">Мероприятия</FooterLink>
          <FooterLink to="/gallery">Фотогалерея</FooterLink>
          <FooterLink to="/faq">Часто задаваемые вопросы</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterTitle>Контакты</FooterTitle>
          <FooterAddress>
            г. Москва, ул. Примерная, д. 123<br />
            Телефон: +7 (123) 456-78-90<br />
            Email: info@taekwondoplus.ru
          </FooterAddress>
        </FooterColumn>
      </FooterContent>
      
      <FooterContent>
        <FooterCopyright>
          © {currentYear} ТхэквондоПлюс. Все права защищены.
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer; 