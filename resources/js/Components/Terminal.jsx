import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Terminal = () => {
    const [text, setText] = useState('');
    const fullText = `$ no-press start
> Initializing No Press Agency...

=== No Press Agency ===
> "Your vision, our code"
> "From design to deployment"
> "Websites that convert"
> "Performance and elegance"
> "Coded with passion"

> Expertise:
  - Cloud Architecture ☁️
  - RESTful API 🚀
  - Progressive Web Apps ⚛️
  - SEO Optimization 🔍
  - Security & Performance ⚡️
  - Mobile First Design 📱
  - Scalable Databases 🗄️
  - Continuous Integration 🔄

Status: Ready to create amazing things!
$ _`;

    useEffect(() => {
        let currentIndex = 0;
        const timer = setInterval(() => {
            if (currentIndex <= fullText.length) {
                setText(fullText.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(timer);
            }
        }, 30);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="flex justify-center items-center w-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-gray-900 rounded-lg p-6 font-mono text-base text-green-400 w-[600px] h-[600px] overflow-hidden shadow-2xl border border-gray-700"
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <pre className="whitespace-pre-wrap">
                    {text}
                    <span className="animate-pulse">|</span>
                </pre>
            </motion.div>
        </div>
    );
};

export default Terminal; 