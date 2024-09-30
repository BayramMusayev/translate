import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Backend to load translation files
  .use(initReactI18next) // Passes i18n instance to react-i18next.
  .init({
    fallbackLng: 'en', // Default language
    supportedLngs: ['en', 'az'], // Supported languages
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Translation files path
    },
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;

