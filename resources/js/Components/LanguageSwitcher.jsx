import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex gap-2 items-center">
            <button 
                onClick={() => changeLanguage('fr')}
                className={`p-1.5 rounded-full transition-all text-lg ${
                    i18n.language === 'fr' 
                        ? 'opacity-100 scale-110 transform' 
                        : 'opacity-50 hover:opacity-75'
                }`}
                aria-label="Français"
            >
                🇫🇷
            </button>
            <button 
                onClick={() => changeLanguage('en')}
                className={`p-1.5 rounded-full transition-all text-lg ${
                    i18n.language === 'en' 
                        ? 'opacity-100 scale-110 transform' 
                        : 'opacity-50 hover:opacity-75'
                }`}
                aria-label="English"
            >
                🇬🇧
            </button>
        </div>
    );
} 