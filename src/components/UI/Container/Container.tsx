import styled from 'styled-components';

interface PageContainerProps {
  fullWidth?: boolean;
}

export const PageContainer = styled.main<PageContainerProps>`
  width: 100%;
  margin: 0 auto;
  padding: ${({ fullWidth }) => (fullWidth ? '0' : '50px')};
  max-width: ${({ fullWidth }) => (fullWidth ? '100%' : '1200px')};
  display: flex;
  flex-direction: column;
  
  @media (max-width: 768px) {
    padding: ${({ fullWidth }) => (fullWidth ? '0' : '30px 20px')};
  }
`;

export const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 3px;
    background-color: #B71C1C;
    bottom: -10px;
    left: 0;
  }
`;

export const SectionContainer = styled.section`
  width: 100%;
  margin-bottom: 60px;
`;

export default PageContainer; 