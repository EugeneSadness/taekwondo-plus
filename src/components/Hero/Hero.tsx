import { Container, ContentWrapper, SubTitle, Title, Description, ButtonsContainer, StatsContainer, StatsItem, StatsNumber, StatsText } from './HeroStyles';
import { PrimaryButton, SecondaryButton } from '@/components/UI/Button/Button';

const Hero = () => {
  return (
    <Container>
      <ContentWrapper>
        <SubTitle>ПУТЬ К СОВЕРШЕНСТВУ</SubTitle>
        <Title>Школа тхэквондо для всех возрастов</Title>
        <Description>
          Профессиональные тренеры, современное оборудование и индивидуальный
          подход к каждому ученику. Начните свой путь к мастерству сегодня!
        </Description>
        <ButtonsContainer>
          <SecondaryButton to="/trainers">Наши тренеры</SecondaryButton>
          <PrimaryButton to="/sign-up">Записаться на тренировку</PrimaryButton>
        </ButtonsContainer>

        <StatsContainer>
          <StatsItem>
            <StatsNumber>10+</StatsNumber>
            <StatsText>Лет опыта</StatsText>
          </StatsItem>
          <StatsItem>
            <StatsNumber>500+</StatsNumber>
            <StatsText>Учеников</StatsText>
          </StatsItem>
          <StatsItem>
            <StatsNumber>15+</StatsNumber>
            <StatsText>Тренеров</StatsText>
          </StatsItem>
          <StatsItem>
            <StatsNumber>50+</StatsNumber>
            <StatsText>Наград</StatsText>
          </StatsItem>
        </StatsContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Hero;