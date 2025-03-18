import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import TrainersPage from '../pages/TrainersPage/TrainersPage';
import NewsPage from '../pages/NewsPage/NewsPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/trainers" element={<TrainersPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/sign-up" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRoutes; 