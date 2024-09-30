import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n'; // Import i18n configuration

const Home = () => {
  const { t } = useTranslation();
  return <h2>{t('greeting')}</h2>; // Tərcümə olunmuş mətni göstər
};

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate(); // URL-i dəyişmək üçün navigate istifadə et

  // Dili dəyişmək üçün funksiya
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    navigate(`/${lng}/home`); // URL-i yenilə
  };

  return (
    <select
      className="border p-2 rounded-md"
      onChange={(e) => changeLanguage(e.target.value)}
      defaultValue={i18n.language}
    >
      <option value="en">EN</option>
      <option value="az">AZ</option>
    </select>
  );
};

function App() {
  return (
    <Router>
      <LanguageSwitcher />
      <Routes>
        <Route path="/:lng/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/en/home" />} /> {/* Default dil yönləndirməsi */}
      </Routes>
    </Router>
  );
}

export default App;
