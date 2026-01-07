import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HomePage,
  ArticlesPage,
  ArticleDetailPage,
  FAQPage,
  NutritionistPage,
  TeamPage,
  TasksPage,
} from './pages';

import './index.css';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter basename="/nutriplan-fd">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/nutritionist/:id" element={<NutritionistPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
