import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "solutions": "Solutions",
      "contact": "Contact",
      "hero": {
        "title": "The #1 Communication Agency in Nancy",
        "subtitle": "Need help? Our team is here for you!",
        "cta": "Contact us now"
      },
      // ... autres traductions
    }
  },
  fr: {
    translation: {
      "solutions": "Solutions",
      "contact": "Contact",
      "hero": {
        "title": "L'agence De Communication N°1 à Nancy",
        "subtitle": "Besoin d'aide ? Notre équipe est là pour vous !",
        "cta": "Contactez-nous dès maintenant"
      },
      // ... autres traductions
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n; 