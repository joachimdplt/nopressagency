import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import FadeWrapper from '@/Components/FadeWrapper';
import { useState } from 'react';
import ContactForm from '@/Components/ContactForm';
import FAQ from '@/Components/FAQ';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundGrid from '@/Components/BackgroundGrid';

export default function Solutions() {
    const { t } = useTranslation();
    const [selectedCard, setSelectedCard] = useState(null);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);
    const solutions = t('solutions.cards', { returnObjects: true });

    // Ajouter une vérification
    if (!Array.isArray(solutions)) {
        console.error('solutions.cards is not an array:', solutions);
        return null;
    }

    return (
        <>
            <Head title={t('solutions.title')} />
            
            {/* Hero Section */}
            <section className="relative min-h-[55vh] sm:min-h-screen flex items-start sm:items-center justify-center overflow-hidden">
                <div className="hidden sm:block">
                    <BackgroundGrid />
                </div>
                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-24 sm:pt-0">
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
                        {t('solutions.hero.title')}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8">
                        {t('solutions.hero.subtitle')}
                    </p>
                    <motion.button
                        onClick={() => setIsContactFormOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-700 transition-colors"
                    >
                        {t('solutions.hero.contact')}
                    </motion.button>
                </div>
            </section>

            {/* Section Solutions */}
            <section className="py-0 sm:py-24 -mt-12 sm:mt-0 bg-white sm:bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Version Mobile */}
                    <div className="sm:hidden space-y-3">
                        {solutions.map((solution, index) => (
                            <FadeWrapper key={index} delay={index * 0.1}>
                                <div className="bg-white border rounded-xl overflow-hidden">
                                    <div 
                                        onClick={() => setSelectedCard(selectedCard === index ? null : index)}
                                        className="p-3 sm:p-4 cursor-pointer"
                                    >
                                        <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                                            {solution.type}
                                        </span>
                                        <div className="flex justify-between items-start gap-3">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">
                                                    {solution.title}
                                                </h3>
                                                <p className="text-sm text-blue-600">
                                                    {solution.subtitle}
                                                </p>
                                            </div>
                                            <svg 
                                                className={`w-5 h-5 text-gray-400 transform transition-transform ${
                                                    selectedCard === index ? 'rotate-180' : ''
                                                }`}
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                            </svg>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {selectedCard === index && (
                                            <motion.div
                                                initial={{ height: 0 }}
                                                animate={{ height: "auto" }}
                                                exit={{ height: 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="p-3 sm:p-4 pt-0">
                                                    {/* Features */}
                                                    <ul className="space-y-3 mb-6">
                                                        {solution.features.map((feature, idx) => (
                                                            <li key={idx} className="flex items-center text-gray-600">
                                                                <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                                </svg>
                                                                {feature}
                                                            </li>
                                                        ))}
                                                    </ul>

                                                    {/* Packs */}
                                                    <div className="space-y-4 mb-6">
                                                        {solution.packs.map((pack, idx) => (
                                                            <div key={idx} className="bg-gray-50 rounded-lg p-4">
                                                                <h4 className="font-bold text-gray-900 mb-2">{pack.name}</h4>
                                                                <p className="text-sm text-gray-600 mb-2">{pack.description}</p>
                                                                <span className="text-xs font-medium text-blue-600">{pack.delivery}</span>
                                                            </div>
                                                        ))}
                                                    </div>

                                                    <button
                                                        onClick={() => setIsContactFormOpen(true)}
                                                        className="w-full px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                                                    >
                                                        {t('solutions.getQuote')}
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </FadeWrapper>
                        ))}
                    </div>

                    {/* Version Desktop (inchangée) */}
                    <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {solutions.map((solution, index) => (
                            <FadeWrapper key={index} delay={index * 0.2}>
                                <div 
                                    className={`${
                                        selectedCard === index ? 'bg-blue-600' : 'bg-white'
                                    } rounded-3xl shadow-xl p-6 relative transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                                    onClick={() => setSelectedCard(index)}
                                >
                                    <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                                        {solution.type}
                                    </span>

                                    <h3 className={`text-3xl font-bold ${
                                        selectedCard === index ? 'text-white' : 'text-gray-900'
                                    } mb-2`}>
                                        {solution.title}
                                    </h3>
                                    <p className={`text-lg ${
                                        selectedCard === index ? 'text-blue-100' : 'text-blue-600'
                                    } mb-8`}>
                                        {solution.subtitle}
                                    </p>

                                    <ul className="space-y-4 mb-8">
                                        {solution.features.map((feature, idx) => (
                                            <li 
                                                key={idx}
                                                className={`flex items-center ${
                                                    selectedCard === index ? 'text-white' : 'text-gray-600'
                                                }`}
                                            >
                                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Packs */}
                                    <div className="space-y-4 mb-8">
                                        {solution.packs.map((pack, idx) => (
                                            <div 
                                                key={idx}
                                                className={`p-4 rounded-xl ${
                                                    selectedCard === index 
                                                        ? 'bg-blue-500 bg-opacity-50' 
                                                        : 'bg-gray-50'
                                                }`}
                                            >
                                                <h4 className={`font-bold mb-2 ${
                                                    selectedCard === index ? 'text-white' : 'text-gray-900'
                                                }`}>
                                                    {pack.name}
                                                </h4>
                                                <p className={`text-sm mb-2 ${
                                                    selectedCard === index ? 'text-blue-100' : 'text-gray-600'
                                                }`}>
                                                    {pack.description}
                                                </p>
                                                <span className={`text-xs font-medium ${
                                                    selectedCard === index ? 'text-blue-200' : 'text-blue-600'
                                                }`}>
                                                    {pack.delivery}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setIsContactFormOpen(true)}
                                        className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all text-lg flex items-center gap-2"
                                    >
                                        {t('solutions.getQuote')}
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </button>
                                </div>
                            </FadeWrapper>
                        ))}
                    </div>
                </div>
            </section>

            <FAQ />

            <ContactForm 
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
            />
        </>
    );
}

Solutions.layout = page => <AppLayout children={page} /> 