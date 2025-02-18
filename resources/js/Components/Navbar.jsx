import { useState, useContext, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from '@/Components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import { MenuContext } from '@/Layouts/AppLayout';

export default function Navbar() {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
    const { t } = useTranslation();

    // Empêcher le scroll quand le menu est ouvert
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const menuItems = [
        { title: t('nav.home'), href: '/' },
        { title: t('nav.solutions'), href: '/solutions' },
        { title: t('nav.contact'), href: '/contact' },
        { title: t('nav.collab'), href: '/collab' },
    ];

    return (
        <>
            <nav className="fixed w-full z-50 px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center bg-white">
                <Link href="/" className="flex items-center space-x-2">
                </Link>

                <div className="flex items-center gap-4 sm:gap-6">
                    <LanguageSwitcher />
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="p-2"
                        aria-label="Menu"
                    >
                        {isMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

            <AnimatePresence mode="wait">
                {isMenuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100dvh", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                            duration: 0.5, 
                            ease: "easeInOut",
                            opacity: { duration: 0.2 }
                        }}
                        className="fixed top-0 left-0 w-full bg-[#E6EFFE] z-40 overflow-hidden touch-none"
                    >
                        <motion.div 
                            className="relative h-full container mx-auto px-4 sm:px-6 pt-20 sm:pt-28 flex flex-col"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 20 }}
                            transition={{ 
                                delay: 0.2,
                                duration: 0.3
                            }}
                        >
                            <div className="grid grid-cols-1 grid-rows-2 h-[40vh] sm:h-[70vh] max-w-6xl mx-auto">
                                <div className="grid grid-cols-2 border-b border-gray-200">
                                    <Link
                                        href={menuItems[0].href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-center group relative border-r border-gray-200"
                                    >
                                        <motion.div
                                            className="text-center w-full h-full flex items-center justify-center"
                                            whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-2xl sm:text-6xl font-medium text-gray-900 font-sans">
                                                {menuItems[0].title}
                                            </span>
                                        </motion.div>
                                    </Link>
                                    <Link
                                        href={menuItems[1].href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-center group relative"
                                    >
                                        <motion.div
                                            className="text-center w-full h-full flex items-center justify-center"
                                            whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-2xl sm:text-6xl font-medium text-gray-900 font-sans">
                                                {menuItems[1].title}
                                            </span>
                                        </motion.div>
                                    </Link>
                                </div>
                                <div className="grid grid-cols-2">
                                    <Link
                                        href={menuItems[2].href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-center group relative border-r border-gray-200"
                                    >
                                        <motion.div
                                            className="text-center w-full h-full flex items-center justify-center"
                                            whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-2xl sm:text-6xl font-medium text-gray-900 font-sans">
                                                {menuItems[2].title}
                                            </span>
                                        </motion.div>
                                    </Link>
                                    <Link
                                        href={menuItems[3].href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="flex items-center justify-center group relative"
                                    >
                                        <motion.div
                                            className="text-center w-full h-full flex items-center justify-center"
                                            whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <span className="text-2xl sm:text-6xl font-medium text-gray-900 font-sans">
                                                {menuItems[3].title}
                                            </span>
                                        </motion.div>
                                    </Link>
                                </div>
                            </div>

                            <div className="mt-auto pb-4 sm:pb-12">
                                <div className="max-w-6xl mx-auto">
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-12 mb-6 sm:mb-8">
                                        <div className="space-y-2">
                                            <h3 className="text-gray-900 font-medium mb-3">{t('footer.contact.title')}</h3>
                                            <div className="space-y-1 text-sm text-gray-600">
                                                <p>71-75 Shelton Street</p>
                                                <p>Covent Garden</p>
                                                <p>London, WC2H 9JQ</p>
                                                <p>United Kingdom</p>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <h3 className="text-gray-900 font-medium mb-3">{t('footer.company.name')}</h3>
                                            <p className="text-sm text-gray-600">
                                                {t('footer.company.description')}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {t('footer.company.number')}
                                            </p>
                                        </div>
                                        <div className="space-y-2 sm:pl-12">
                                            <h3 className="text-gray-900 font-medium mb-3">{t('footer.legal.title')}</h3>
                                            <div className="space-y-1">
                                                <Link href="/privacy" className="block text-sm text-gray-600 hover:text-gray-900">
                                                    {t('footer.legal.privacy')}
                                                </Link>
                                                <Link href="/terms" className="block text-sm text-gray-600 hover:text-gray-900">
                                                    {t('footer.legal.terms')}
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-end pt-6 sm:pt-8 border-t border-gray-200">
                                        <div className="flex items-center space-x-6">
                                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                                </svg>
                                            </a>
                                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                                </svg>
                                            </a>
                                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                                                </svg>
                                            </a>
                                            <a href="#" className="text-gray-600 hover:text-gray-900">
                                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// Composant NavLink avec animation
const NavLink = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="relative text-gray-600 hover:text-blue-600 transition-colors font-medium"
        >
            <span>{children}</span>
            <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
            />
        </Link>
    );
}; 