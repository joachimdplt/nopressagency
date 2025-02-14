'use client';

import { motion, AnimatePresence } from 'framer-motion';
const FadeWrapper = ({ children, duration = 0.5, delay = 0, show = true }) => {
    return (

        <AnimatePresence>
            {show && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ 
                        duration: duration,
                        delay: delay,
                        ease: "easeOut"
                    }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FadeWrapper; 