import { Head } from '@inertiajs/react'
import { useState, useEffect } from 'react'
import TypeformSurvey from '@/Components/TypeformSurvey'
import CustomCalendar from '@/Components/CustomCalendar'

export default function Home() {
    const [isFormOpen, setIsFormOpen] = useState(false)

    useEffect(() => {
        // Chargement du script Calendly
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    const scrollToCalendly = () => {
        document.getElementById('calendly-section').scrollIntoView({ 
            behavior: 'smooth'
        })
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Accueil" />
            
            {/* Section Hero */}
            <section className="min-h-screen flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold text-gray-800">Bienvenue sur notre site !</h1>
                <p className="text-lg text-gray-600 mt-4">Découvrez nos fonctionnalités et explorez le contenu.</p>
                
                <div className="flex gap-4 mt-8">
                    <button
                        onClick={() => setIsFormOpen(true)}
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Commencer le questionnaire
                    </button>

                    <button
                        onClick={scrollToCalendly}
                        className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                    >
                        Prendre rendez-vous
                    </button>
                </div>
            </section>

            {/* Section Calendly remplacée par CustomCalendar */}
            <section id="calendly-section" className="min-h-screen py-12 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Prenez rendez-vous avec nous
                    </h2>
                    
                    <CustomCalendar />
                </div>
            </section>

            <TypeformSurvey 
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />
        </div>
    )
}
