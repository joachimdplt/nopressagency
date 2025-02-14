import { Head, Link } from '@inertiajs/react'
import { useState, useEffect } from 'react'
import TypeformSurvey from '@/Components/TypeformSurvey'
import CustomCalendar from '@/Components/CustomCalendar'
import FadeWrapper from '@/Components/FadeWrapper'
import Terminal from '@/Components/Terminal'
import { motion } from 'framer-motion'
import TechLogo from '@/Components/TechLogo'
import TechScroll from '@/Components/TechScroll'
import Typewriter from '@/Components/Typewriter'
import AppLayout from '@/Layouts/AppLayout'
import OffersSection from '@/Components/OffersSection'

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

const offers = [
    {
        title: "Site Web",
        description: "Boostez votre activité grâce à votre site internet clé en main.",
        image: "/images/site-web-mockup.png",
        link: "/solutions#site-web",
        isNew: true
    },
    {
        title: "Publicité Google",
        description: "Générez plus de contacts en passant de visible à incontournable.",
        image: "/images/google-ads-mockup.png",
        link: "/solutions#google-ads",
        isNew: true
    },
    {
        title: "Application Mobile",
        description: "Transformez votre présence en ligne en une véritable vitrine incontournable pour générer davantage de contacts",
        image: "/images/app-mobile-mockup.png",
        link: "/solutions#app-mobile",
        isNew: true
    }
];

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
            
            {/* Typewriter */}
            <Typewriter />
            
            {/* Section Hero - Retour à la version simple */}
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
                            <div className="max-w-xl">
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
                                    Pourquoi payer Calendly tous les mois ?
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Nous pouvons vous intégrer des solutions sur mesure, adaptées à vos besoins spécifiques, sans frais mensuels récurrents.
                                </p>
                                <ul className="mt-8 space-y-4">
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <span className="text-green-500 text-xl">✓</span>
                                        Intégration personnalisée
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <span className="text-green-500 text-xl">✓</span>
                                        Sans abonnement mensuel
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <span className="text-green-500 text-xl">✓</span>
                                        Support inclus
                                    </li>
                                </ul>
                            </div>
                        </FadeWrapper>

                        {/* Calendrier à droite */}
                        <FadeWrapper show={showCalendar} delay={0.3}>
                            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-2xl font-bold text-gray-900">
                                        Prenez rendez-vous
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
