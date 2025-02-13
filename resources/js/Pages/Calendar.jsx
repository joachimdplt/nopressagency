import { Head } from '@inertiajs/react'
import CustomCalendar from '@/Components/CustomCalendar'
import FadeWrapper from '@/Components/FadeWrapper'

export default function Calendar() {
    return (
        <div className="min-h-screen bg-gray-100 pt-screen">
            <Head title="Prendre rendez-vous" />
            
            {/* Espace vide pour pousser le contenu en bas */}
            <div className="h-screen" />
            
            {/* Section calendrier */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex justify-end">
                    <div className="w-full max-w-md">
                        <FadeWrapper>
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
        </div>
    );
} 