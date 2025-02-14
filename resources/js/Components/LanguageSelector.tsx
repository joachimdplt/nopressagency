import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'fr' ? 'en' : 'fr';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
            aria-label="Change language"
        >
            <span className="text-lg">
                {i18n.language === 'fr' ? '🇫🇷' : '🇬🇧'}
            </span>
        </button>
    );
};

export default LanguageSelector; 