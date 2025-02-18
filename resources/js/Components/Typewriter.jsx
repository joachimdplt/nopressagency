import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Typewriter = () => {
    const { t } = useTranslation();
    const [displayTexts, setDisplayTexts] = useState(['noPress', '']);
    const [currentPhrase, setCurrentPhrase] = useState(1);
    const [isTyping, setIsTyping] = useState(true);
    const [isVisible, setIsVisible] = useState(true);

    const lines = t('typewriter.lines', { returnObjects: true });

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        let timeout;
        
        if (isTyping) {
            const currentText = displayTexts[1] || '';
            if (currentText.length < lines[currentPhrase].length) {
                timeout = setTimeout(() => {
                    setDisplayTexts(prev => [
                        'noPress',
                        lines[currentPhrase].slice(0, currentText.length + 1)
                    ]);
                }, 100);
            } else {
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, 1500);
            }
        } else {
            timeout = setTimeout(() => {
                setDisplayTexts(['noPress', '']);
                setCurrentPhrase(prev => prev === lines.length - 1 ? 1 : prev + 1);
                setIsTyping(true);
            }, 1000);
        }

        return () => clearTimeout(timeout);
    }, [displayTexts, isTyping, currentPhrase]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div 
                    className="fixed top-8 left-8 z-50"
                    initial={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="font-mono space-y-2"
                    >
                        <motion.div>
                            <span className="text-2xl font-bold text-blue-600">
                                {displayTexts[0]}
                            </span>
                        </motion.div>
                        <motion.div
                            key={currentPhrase}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="text-2xl font-bold text-gray-800">
                                {displayTexts[1]}
                            </span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Typewriter; 