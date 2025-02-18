import { Head, Link } from '@inertiajs/react'
import { useState, useEffect } from 'react'
import TypeformSurvey from '@/Components/TypeformSurvey'
import CustomCalendar from '@/Components/CustomCalendar'
import FadeWrapper from '@/Components/FadeWrapper'
import Terminal from '@/Components/Terminal'
import TechScroll from '@/Components/TechScroll'
import Typewriter from '@/Components/Typewriter'
import AppLayout from '@/Layouts/AppLayout'
import OffersSection from '@/Components/OffersSection'
import { useTranslation } from 'react-i18next'

export default function Home() {
    const { t } = useTranslation()
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [showCalendar, setShowCalendar] = useState(false)

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
            
            {/* Typewriter */}
            <Typewriter />
            
            {/* Section Hero - Retour à la version simple */}
            <section className="h-screen flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="max-w-2xl">
                            <FadeWrapper>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight max-w-3xl whitespace-pre-line">
                                    {t('home.hero.title')}
                                </h1>
                                <h2 className="text-2xl md:text-3xl font-medium text-blue-600 mt-4 max-w-2xl">
                                    {t('home.hero.subtitle')}
                                </h2>
                            </FadeWrapper>

                            <FadeWrapper delay={1}>
                                <div className="flex flex-wrap gap-4 mt-12">
                                    <button
                                        onClick={() => setIsFormOpen(true)}
                                        className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
                                    >
                                        {t('home.hero.cta.website')}
                                    </button>
                                    <button
                                        onClick={scrollToCalendly}
                                        className="px-8 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition-colors whitespace-nowrap"
                                    >
                                        {t('home.hero.cta.meeting')}
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

            {/* Section Nos Offres */}
            <OffersSection />

            {/* Section Calendrier avec background */}
            <section id="calendly-section" className="py-24 relative">
                {/* Background Image avec overlay */}
                <div 
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/mockups/image copy.png')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                >
                    <div className="absolute inset-0 bg-white/80" />
                </div>

                {/* Contenu */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Texte à gauche */}
                        <FadeWrapper show={showCalendar}>
                            <div className="max-w-xl space-y-6">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                                    {t('home.calendar.title')}
                                </h2>
                                <p className="text-xl text-gray-600 max-w-2xl">
                                    {t('home.calendar.description')}
                                </p>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <span className="text-green-500 text-xl">✓</span>
                                        {t('home.calendar.benefits.integration')}
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <span className="text-green-500 text-xl">✓</span>
                                        {t('home.calendar.benefits.noSubscription')}
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <span className="text-green-500 text-xl">✓</span>
                                        {t('home.calendar.benefits.support')}
                                    </li>
                                </ul>
                            </div>
                        </FadeWrapper>

                        {/* Calendrier à droite */}
                        <FadeWrapper show={showCalendar} delay={0.3}>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        {t('home.calendar.booking')}
                                    </h3>
                                </div>
                                <CustomCalendar />
                            </div>
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

Home.layout = page => <AppLayout children={page} />
