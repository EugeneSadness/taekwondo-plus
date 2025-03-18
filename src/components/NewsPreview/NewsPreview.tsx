import styled from 'styled-components';
import { SectionTitle } from '@/components/UI/Container/Container';
import { OutlineButton } from '@/components/UI/Button/Button';

const NewsContainer = styled.div`
  margin: 50px 0;
`;

const NewsHeader = styled.div`
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

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const NewsCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const NewsImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 200px;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
`;

const NewsInfo = styled.div`
  padding: 20px;
`;

const NewsDate = styled.p`
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
`;

const NewsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #333;
  
  &:hover {
    color: #B71C1C;
  }
`;

const NewsExcerpt = styled.p`
  font-size: 14px;
  line-height: 1.5;
  color: #666;
  margin-bottom: 15px;
`;

const ReadMoreLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #B71C1C;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  
  &:hover {
    text-decoration: underline;
  }
  
  svg {
    width: 16px;
    height: 16px;
    margin-left: 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

// Данные о новостях (пример)
const newsData = [
  {
    id: 1,
    title: 'Результаты городского чемпионата по тхэквондо',
    date: '10 марта 2024',
    excerpt: 'Наши спортсмены завоевали 5 золотых, 3 серебряных и 4 бронзовых медали на прошедшем городском чемпионате по тхэквондо.',
    imageUrl: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb3ed3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    title: 'Набор в новые группы для начинающих',
    date: '5 марта 2024',
    excerpt: 'Открыт набор в новые группы для начинающих всех возрастов. Занятия проводятся опытными тренерами в удобное время.',
    imageUrl: 'https://images.unsplash.com/photo-1617775047746-5b9a3b61b4d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    title: 'Мастер-класс от чемпиона мира',
    date: '28 февраля 2024',
    excerpt: 'В нашей школе прошел мастер-класс от чемпиона мира по тхэквондо. Участники получили ценный опыт и новые знания.',
    imageUrl: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

const NewsPreview = () => {
  return (
    <NewsContainer>
      <NewsHeader>
        <SectionTitle>Последние новости</SectionTitle>
      </NewsHeader>
      
      <NewsGrid>
        {newsData.map((news) => (
          <NewsCard key={news.id}>
            <NewsImage imageUrl={news.imageUrl} />
            <NewsInfo>
              <NewsDate>{news.date}</NewsDate>
              <NewsTitle>{news.title}</NewsTitle>
              <NewsExcerpt>{news.excerpt}</NewsExcerpt>
              <ReadMoreLink href={`/news/${news.id}`}>
                Читать дальше
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </ReadMoreLink>
            </NewsInfo>
          </NewsCard>
        ))}
      </NewsGrid>
      
      <ButtonContainer>
        <OutlineButton to="/news">Все новости</OutlineButton>
      </ButtonContainer>
    </NewsContainer>
  );
};

export default NewsPreview; 