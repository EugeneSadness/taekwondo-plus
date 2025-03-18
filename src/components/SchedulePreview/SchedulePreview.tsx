import styled from 'styled-components';
import { SectionTitle } from '@/components/UI/Container/Container';
import { PrimaryButton } from '@/components/UI/Button/Button';

const ScheduleContainer = styled.div`
  margin: 50px 0;
`;

const ScheduleHeader = styled.div`
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

const ScheduleTable = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ScheduleCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 25px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const DayTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #B71C1C;
  display: flex;
  align-items: center;
  
  svg {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;

const TimeSlot = styled.div`
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const Time = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;

const Group = styled.div`
  font-size: 14px;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

// Данные о расписании (пример)
const scheduleData = [
  {
    day: 'Понедельник',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    slots: [
      { time: '16:00 - 17:00', group: 'Дети 6-9 лет (начинающие)' },
      { time: '17:30 - 19:00', group: 'Дети 10-13 лет (продвинутые)' },
      { time: '19:30 - 21:00', group: 'Взрослые (все уровни)' }
    ]
  },
  {
    day: 'Среда',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    slots: [
      { time: '16:00 - 17:00', group: 'Дети 6-9 лет (начинающие)' },
      { time: '17:30 - 19:00', group: 'Дети 10-13 лет (продвинутые)' },
      { time: '19:30 - 21:00', group: 'Взрослые (все уровни)' }
    ]
  },
  {
    day: 'Пятница',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    slots: [
      { time: '16:00 - 17:00', group: 'Дети 6-9 лет (начинающие)' },
      { time: '17:30 - 19:00', group: 'Дети 10-13 лет (продвинутые)' },
      { time: '19:30 - 21:00', group: 'Взрослые (все уровни)' }
    ]
  }
];

const SchedulePreview = () => {
  return (
    <ScheduleContainer>
      <ScheduleHeader>
        <SectionTitle>Расписание занятий</SectionTitle>
      </ScheduleHeader>
      
      <ScheduleTable>
        {scheduleData.map((day, index) => (
          <ScheduleCard key={index}>
            <DayTitle>
              {day.icon}
              {day.day}
            </DayTitle>
            
            {day.slots.map((slot, slotIndex) => (
              <TimeSlot key={slotIndex}>
                <Time>{slot.time}</Time>
                <Group>{slot.group}</Group>
              </TimeSlot>
            ))}
          </ScheduleCard>
        ))}
      </ScheduleTable>
      
      <ButtonContainer>
        <PrimaryButton to="/schedule">Полное расписание</PrimaryButton>
      </ButtonContainer>
    </ScheduleContainer>
  );
};

export default SchedulePreview; 