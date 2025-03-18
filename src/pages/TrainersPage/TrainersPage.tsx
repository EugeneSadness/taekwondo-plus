import styled from 'styled-components';

const Container = styled.main`
  padding: 50px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 30px;
  color: #333;
`;

const TrainersPage = () => {
  return (
    <Container>
      <Title>Наши тренеры</Title>
      <p>Страница в разработке</p>
    </Container>
  );
};

export default TrainersPage;