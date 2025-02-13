import { Head } from '@inertiajs/react'
import { useState } from 'react'
import TypeformSurvey from '@/Components/TypeformSurvey'

export default function Home() {
    const [isFormOpen, setIsFormOpen] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <Head title="Accueil" />
            
            <h1 className="text-4xl font-bold text-gray-800">Bienvenue sur notre site !</h1>
            <p className="text-lg text-gray-600 mt-4">Découvrez nos fonctionnalités et explorez le contenu.</p>
            
            <button
                onClick={() => setIsFormOpen(true)}
                className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
                Commencer le questionnaire
            </button>

            <TypeformSurvey 
                isOpen={isFormOpen}
                onClose={() => setIsFormOpen(false)}
            />
        </div>
    )
}
