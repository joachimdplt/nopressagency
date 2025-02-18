import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
    const { t } = useTranslation();
    const [openQuestion, setOpenQuestion] = useState(null);
    const faqs = t('faq.questions', { returnObjects: true });

    return (
        <section className="py-8 sm:py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                        {t('faq.title')}
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
                        {t('faq.subtitle')}
                    </p>

                    <div className="space-y-3 sm:space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className="border border-gray-200 rounded-xl overflow-hidden bg-white"
                            >
                                <button
                                    onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                                    className="w-full p-4 sm:p-6 flex items-start justify-between text-left"
                                >
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        <span className="text-xl sm:text-2xl flex-shrink-0">{faq.icon}</span>
                                        <span className="text-sm sm:text-base font-medium text-gray-900 pt-1">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <svg 
                                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transform transition-transform flex-shrink-0 ml-3 sm:ml-4 mt-1 ${
                                            openQuestion === index ? 'rotate-180' : ''
                                        }`}
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {openQuestion === index && (
                                        <motion.div
                                            initial={{ height: 0 }}
                                            animate={{ height: "auto" }}
                                            exit={{ height: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-4 sm:p-6 pt-0 text-sm sm:text-base text-gray-600 pl-11 sm:pl-14">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 sm:mt-12 text-center text-sm sm:text-base text-gray-600">
                        {t('faq.support')}
                    </div>
                </div>
            </div>
        </section>
    );
} 