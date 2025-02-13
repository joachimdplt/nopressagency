import { Head } from '@inertiajs/react'
import { useEffect } from 'react'

export default function Calendar() {
    useEffect(() => {
        // Chargement du script Calendly
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            // Nettoyage du script lors du démontage
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className="min-h-screen bg-gray-100">
            <Head title="Prendre RDV" />
            
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Prenez rendez-vous avec nous
                    </h1>
                    
                    <div className="calendly-inline-widget" 
                        data-url="VOTRE_URL_CALENDLY_ICI"
                        style={{ minWidth: '320px', height: '700px' }} 
                    />
                </div>
            </div>
        </div>
    )
} 