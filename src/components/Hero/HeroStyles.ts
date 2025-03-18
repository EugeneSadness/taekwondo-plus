import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 600px;
  padding: 80px 50px;
  background-color: #B71C1C;
  color: white;
  background-image: radial-gradient(circle at 100% 100%, rgba(255, 255, 255, 0.05) 0%, transparent 40%);
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SubTitle = styled.h3`
  font-size: 16px;
  letter-spacing: 1px;
  margin-bottom: 20px;
  font-weight: 500;
  position: relative;
  display: inline-block;
  
  &:before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    background-color: white;
    left: -40px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
  max-width: 700px;
  line-height: 1.2;
`;

export const Description = styled.p`
  font-size: 18px;
  max-width: 650px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 50px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 80px;
  margin-top: 20px;
  
  @media (max-width: 992px) {
    gap: 40px;
  }
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 20px 40px;
  }
`;

export const StatsItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatsNumber = styled.span`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const StatsText = styled.span`
  font-size: 14px;
  opacity: 0.9;
`;