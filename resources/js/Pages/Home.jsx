import { Head } from '@inertiajs/react'
import { useState, useEffect } from 'react'
import TypeformSurvey from '@/Components/TypeformSurvey'
import CustomCalendar from '@/Components/CustomCalendar'
import FadeWrapper from '@/Components/FadeWrapper'
import Terminal from '@/Components/Terminal'
import { motion } from 'framer-motion'
import TechLogo from '@/Components/TechLogo'
import TechScroll from '@/Components/TechScroll'

const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Laravel', icon: '🚀' },
    { name: 'MySQL', icon: '🗄️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Supabase', icon: '⚡' },
    { name: 'Google Cloud', icon: '☁️' },
    { name: 'React Native', icon: '📱' }
];

// Dupliquer les technologies pour un défilement continu
const duplicatedTechnologies = [...technologies, ...technologies];

export default function Home() {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById('calendly-section')
            if (section) {
                const rect = section.getBoundingClientRect()
                setShowCalendar(rect.top <= window.innerHeight)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToCalendly = () => {
        document.getElementById('calendly-section').scrollIntoView({ 
            behavior: 'smooth'
        })
    }

    return (
        <div className="min-h-[200vh] bg-gray-100">
            <Head title="Accueil" />
            
            {/* Section Hero */}
            <section className="h-screen flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="max-w-2xl">
                            <FadeWrapper>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                                    Vitrine, web app ou application mobile ?
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-medium text-blue-600 mt-4">
                                    Nous avons tout ce qu'il vous faut.
                                </h2>
                            </FadeWrapper>

                            <FadeWrapper delay={1}>
                                <div className="flex gap-4 mt-12">
                                    <button
                                        onClick={() => setIsFormOpen(true)}
                                        className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors"
                                    >
                                        Je veux un site internet
                                    </button>
                                    <button
                                        onClick={scrollToCalendly}
                                        className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors"
                                    >
                                        Prendre rendez-vous
                                    </button>
                                </div>
                            </FadeWrapper>
                        </div>

                        <div className="hidden lg:block">
                            <Terminal />
                        </div>
                    </div>
                </div>
            </section>

            {/* Bandeau de technologies avec défilement */}
            <TechScroll />

            {/* Section Calendrier */}
            <section id="calendly-section" className="h-screen flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center text-center mb-8">
                        <FadeWrapper show={showCalendar}>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-4">
                                Pourquoi payer Calendly tous les mois ?
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl">
                                Nous pouvons vous intégrer des solutions sur mesure, adaptées à vos besoins spécifiques, sans frais mensuels récurrents.
                            </p>
                        </FadeWrapper>
                    </div>

                    <div className="flex justify-center">
                        <FadeWrapper show={showCalendar} delay={0.3}>
                            <motion.div
                                layout
                                transition={{
                                    layout: { duration: 0.3 }
                                }}
                            >
                                {!isCalendarOpen ? (
                                    <motion.button
                                        onClick={() => setIsCalendarOpen(true)}
                                        className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                    >
                                        Réserver un créneau
                                    </motion.button>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-white rounded-2xl shadow-xl p-6 max-w-md w-full"
                                    >
                                        <div className="flex justify-between items-center mb-6">
                                            <h2 className="text-2xl font-bold text-gray-900">
                                                Prenez rendez-vous
                                            </h2>
                                            <motion.button
                                                onClick={() => setIsCalendarOpen(false)}
                                                className="text-gray-500 hover:text-gray-700"
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                ✕
                                            </motion.button>
                                        </div>
                                        <CustomCalendar 
                                            onSubmitSuccess={() => {
                                                setTimeout(() => {
                                                    setIsCalendarOpen(false)
                                                }, 3500)
                                            }} 
                                        />
                                    </motion.div>
                                )}
                            </motion.div>
                        </FadeWrapper>
                    </div>
                </div>
            </section>

            <TypeformSurvey 
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />
        </div>
    )
}
