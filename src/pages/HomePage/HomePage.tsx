import Hero from '@/components/Hero/Hero';
import PageContainer from '@/components/UI/Container/Container';

const HomePage = () => {
  return (
    <>
      <Hero />
      <PageContainer>
        {/* Здесь будет дополнительный контент главной страницы */}
      </PageContainer>
    </>
  );
};

export default HomePage;