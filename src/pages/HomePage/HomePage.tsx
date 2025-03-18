import Hero from '@/components/Hero/Hero';
import PageContainer from '@/components/UI/Container/Container';
import Features from '@/components/Features/Features';
import SchedulePreview from '@/components/SchedulePreview/SchedulePreview';
import TrainersPreview from '@/components/TrainersPreview/TrainersPreview';
import NewsPreview from '@/components/NewsPreview/NewsPreview';
import CTASection from '@/components/CTASection/CTASection';

const HomePage = () => {
  return (
    <>
      <Hero />
      <PageContainer>
        <Features />
        <SchedulePreview />
        <TrainersPreview />
        <NewsPreview />
      </PageContainer>
      <CTASection />
    </>
  );
};

export default HomePage;