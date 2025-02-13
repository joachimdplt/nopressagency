import { Head } from '@inertiajs/react'
import { useState, useEffect } from 'react'
import TypeformSurvey from '@/Components/TypeformSurvey'
import CustomCalendar from '@/Components/CustomCalendar'
import FadeWrapper from '@/Components/FadeWrapper'
import Terminal from '@/Components/Terminal'

export default function Home() {
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
            
            {/* Section Hero */}
            <section className="h-screen flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="max-w-2xl">
                            <FadeWrapper>
                                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                                    Une vitrine, une web app ou une application mobile ?
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

            {/* Section Calendrier */}
            <section id="calendly-section" className="h-screen flex items-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-end">
                        <div className="w-full max-w-md">
                            <FadeWrapper show={showCalendar}>
                                <div className="bg-white rounded-2xl shadow-xl p-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                        Prenez rendez-vous
                                    </h2>
                                    <CustomCalendar />
                                </div>
                            </FadeWrapper>
                        </div>
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
