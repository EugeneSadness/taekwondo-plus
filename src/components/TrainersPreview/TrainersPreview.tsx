import styled from 'styled-components';
import { SectionTitle } from '@/components/UI/Container/Container';
import { PrimaryButton } from '@/components/UI/Button/Button';

const TrainersContainer = styled.div`
  margin: 50px 0;
`;

const TrainersHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
  }
`;

const TrainersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TrainerCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const TrainerImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 320px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const TrainerInfo = styled.div`
  padding: 20px;
`;

const TrainerName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 5px;
  color: #333;
`;

const TrainerPosition = styled.p`
  font-size: 16px;
  color: #B71C1C;
  margin-bottom: 10px;
`;

const TrainerDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

// Данные о тренерах (пример)
const trainersData = [
  {
    id: 1,
    name: 'Алексей Иванов',
    position: 'Главный тренер',
    description: '5 дан, Мастер спорта международного класса. Опыт преподавания более 15 лет.',
    imageUrl: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Елена Петрова',
    position: 'Тренер детских групп',
    description: '4 дан, призер международных соревнований. Специализируется на работе с детьми от 6 до 12 лет.',
    imageUrl: 'https://images.unsplash.com/photo-1607990283143-e81e7a2c9349?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: 'Дмитрий Сидоров',
    position: 'Тренер спортивных групп',
    description: '4 дан, чемпион России. Готовит спортсменов к соревнованиям национального и международного уровня.',
    imageUrl: 'https://images.unsplash.com/photo-1590556409324-aa1d726e5c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const TrainersPreview = () => {
  return (
    <TrainersContainer>
      <TrainersHeader>
        <SectionTitle>Наши тренеры</SectionTitle>
      </TrainersHeader>
      
      <TrainersGrid>
        {trainersData.map((trainer) => (
          <TrainerCard key={trainer.id}>
            <TrainerImage imageUrl={trainer.imageUrl} />
            <TrainerInfo>
              <TrainerName>{trainer.name}</TrainerName>
              <TrainerPosition>{trainer.position}</TrainerPosition>
              <TrainerDescription>{trainer.description}</TrainerDescription>
            </TrainerInfo>
          </TrainerCard>
        ))}
      </TrainersGrid>
      
      <ButtonContainer>
        <PrimaryButton to="/trainers">Все тренеры</PrimaryButton>
      </ButtonContainer>
    </TrainersContainer>
  );
};

export default TrainersPreview; 