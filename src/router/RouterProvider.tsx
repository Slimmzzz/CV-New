import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  DescriptionPage,
  EducationPage,
  MainPage,
  PortfolioPage,
  SkillsPage,
  WorkExperiencePage,
} from '../pages';
import { NotFound } from '../components';

export const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/description" element={<DescriptionPage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/work-experience" element={<WorkExperiencePage />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
