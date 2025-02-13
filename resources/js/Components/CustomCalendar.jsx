import { useState } from 'react'

export default function CustomCalendar() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
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

    const handleSubmit = () => {
        if (selectedDate && selectedTime) {
            // Ici vous pouvez ajouter la logique pour envoyer le RDV
            console.log('RDV programmé pour:', selectedDate, selectedTime)
        }
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg">
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
        </div>
    )
} 