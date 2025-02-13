import { useState } from 'react'
import axios from 'axios'

export default function CustomCalendar({ onSubmitSuccess }) {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [showContactForm, setShowContactForm] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [contactInfo, setContactInfo] = useState({
        name: '',
        phone: '',
        email: ''
    })
    const currentDate = new Date() // Plus besoin de state pour currentDate
    
    // Heures disponibles
    const availableHours = [
        '09:00', '10:00', '11:00', '14:00', '15:00', '16:00'
    ]

    const months = [
        'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
        'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ]

    const generateCalendar = () => {
        const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
        const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()
        const today = new Date()
        
        let days = []
        // Ajouter les jours vides pour l'alignement
        for (let i = 0; i < firstDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-4" />)
        }
        
        // Ajouter les jours du mois
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
            const isToday = today.getDate() === day
            const isPast = date < new Date(new Date().setHours(0, 0, 0, 0))
            
            days.push(
                <button
                    key={day}
                    onClick={() => !isPast && setSelectedDate(date)}
                    disabled={isPast}
                    className={`p-4 rounded-lg transition-colors ${
                        isPast 
                            ? 'text-gray-400 cursor-not-allowed'
                            : isToday
                                ? 'bg-blue-100 hover:bg-blue-200'
                                : selectedDate?.getDate() === day
                                    ? 'bg-blue-500 text-white'
                                    : 'hover:bg-gray-100'
                    }`}
                >
                    {day}
                </button>
            )
        }
        
        return days
    }

    const handleSubmit = async () => {
        if (selectedDate && selectedTime) {
            setShowContactForm(true)
        }
    }

    const handleContactSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('/calendly-appointments', {
                appointment_date: selectedDate.toISOString().split('T')[0],
                appointment_time: selectedTime,
                ...contactInfo
            });
            
            if (response.data.success) {
                setShowSuccess(true)
                setTimeout(() => {
                    setShowSuccess(false)
                    setShowContactForm(false)
                    setSelectedDate(null)
                    setSelectedTime(null)
                    setContactInfo({ name: '', phone: '', email: '' })
                    onSubmitSuccess?.()
                }, 3000)
            }
        } catch (error) {
            console.error('Erreur détaillée:', error.response?.data)
            alert('Erreur lors de la création du rendez-vous')
        }
    }

    // Modal de contact
    const ContactForm = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
                <h3 className="text-xl font-bold mb-4">Vos informations de contact</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Nom</label>
                        <input
                            type="text"
                            required
                            value={contactInfo.name}
                            onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Téléphone</label>
                        <input
                            type="tel"
                            required
                            value={contactInfo.phone}
                            onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            required
                            value={contactInfo.email}
                            onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-4">
                        <button
                            type="button"
                            onClick={() => setShowContactForm(false)}
                            className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                        >
                            Annuler
                        </button>
                        <button
                            type="submit"
                            className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Confirmer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

    // Message de succès
    const SuccessMessage = () => (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-xl text-center">
                <div className="text-green-500 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold mb-2">Rendez-vous confirmé !</h3>
                <p className="text-gray-600">
                    Nous vous avons envoyé un email de confirmation.
                </p>
            </div>
        </div>
    )

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg relative">
            <h2 className="text-2xl font-bold mb-6">Choisissez une date et une heure</h2>
            
            {/* En-tête du mois actuel */}
            <div className="text-lg font-semibold text-center mb-4">
                {months[currentDate.getMonth()]} {currentDate.getFullYear()}
            </div>
            
            {/* Calendrier */}
            <div className="mb-8">
                <div className="grid grid-cols-7 gap-1 mb-2 text-center">
                    {['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'].map(day => (
                        <div key={day} className="font-semibold">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                    {generateCalendar()}
                </div>
            </div>

            {/* Heures disponibles */}
            {selectedDate && (
                <div className="mb-8">
                    <h3 className="text-lg font-semibold mb-4">
                        Heures disponibles pour le {selectedDate.toLocaleDateString()}
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                        {availableHours.map(time => (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`p-2 rounded-lg border transition-colors ${
                                    selectedTime === time
                                        ? 'bg-blue-500 text-white border-blue-500'
                                        : 'border-gray-300 hover:border-blue-500'
                                }`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Bouton de confirmation */}
            {selectedDate && selectedTime && (
                <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                >
                    Confirmer le rendez-vous
                </button>
            )}

            {showContactForm && <ContactForm />}
            {showSuccess && <SuccessMessage />}
        </div>
    )
} 