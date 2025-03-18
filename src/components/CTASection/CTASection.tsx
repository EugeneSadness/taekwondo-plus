import styled from 'styled-components';
import { PrimaryButton } from '@/components/UI/Button/Button';

const CTAWrapper = styled.div`
  background-color: #B71C1C;
  color: white;
  padding: 80px 0;
  margin: 80px 0;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(circle at bottom right, rgba(255, 255, 255, 0.1) 0%, transparent 60%);
    z-index: 1;
  }
`;

const CTAContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  max-width: 800px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CTADescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 700px;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CTASection = () => {
  return (
    <CTAWrapper>
      <CTAContainer>
        <CTATitle>Начните свой путь в тхэквондо сегодня</CTATitle>
        <CTADescription>
          Присоединяйтесь к нашей школе и откройте для себя мир тхэквондо. Первое пробное занятие бесплатно для новых учеников!
        </CTADescription>
        <CTAButtonContainer>
          <PrimaryButton to="/sign-up">Записаться на тренировку</PrimaryButton>
        </CTAButtonContainer>
      </CTAContainer>
    </CTAWrapper>
  );
};

export default CTASection; 