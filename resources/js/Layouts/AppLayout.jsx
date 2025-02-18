import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import { motion } from 'framer-motion';
import { useState, createContext } from 'react';

// Créer un contexte pour partager l'état du menu
export const MenuContext = createContext();

export default function AppLayout({ children }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
            <div className="relative">
                <Navbar />
                <motion.div
                    animate={{
                        y: isMenuOpen ? "100vh" : 0
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <main className="relative">
                        {children}
                    </main>
                    <Footer />
                </motion.div>
            </div>
        </MenuContext.Provider>
    );
} 