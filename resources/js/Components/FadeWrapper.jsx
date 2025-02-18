'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useRef } from 'react';

const FadeWrapper = ({ children, duration = 0.5, delay = 0, show = true }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px -100px 0px"
    });

    return (
        <AnimatePresence>
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ 
                    duration: duration,
                    delay: delay,
                    ease: "easeOut"
                }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default FadeWrapper; 