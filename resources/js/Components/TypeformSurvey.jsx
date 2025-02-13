import { useState } from 'react'

export default function TypeformSurvey({ isOpen, onClose }) {
    const [step, setStep] = useState(-1)
    const [answers, setAnswers] = useState({
        firstName: '',
        companyName: '',
        hasSite: '',
        budget: '',
        email: '',
        projectType: '',
        projectDescription: '',
        phone: ''
    })

    const intro = {
        title: "Afin de mieux comprendre vos besoins et de créer le site parfait et entièrement personnalisé pour vous, j'ai quelques questions à vous poser. 🚀",
        isIntro: true
    }

    const questions = [
        {
            title: "D'abord, j'aimerais connaître votre prénom, s'il vous plaît !",
            subtitle: "Cette question est requise*",
            key: "firstName",
            type: "text",
            placeholder: "Votre prénom",
            required: true
        },
        {
            title: answers.firstName ? `Salut ! ${answers.firstName}, Pourrions-nous connaître le nom de votre entreprise, s'il vous plaît ?` : "Pourrions-nous connaître le nom de votre entreprise, s'il vous plaît ?",
            subtitle: "Cette question est indispensable ✅",
            key: "companyName",
            type: "text",
            placeholder: "Nom de l'entreprise",
            required: true
        },
        {
            title: "Avez-vous déjà un Site Internet ?",
            key: "hasSite",
            type: "radio",
            options: [
                { value: "yes", label: "Oui" },
                { value: "no", label: "Non" }
            ]
        },
        {
            title: "Quel est votre budget ?",
            key: "budget",
            type: "radio",
            options: [
                { value: "-1000", label: "Moins de 1000 €" },
                { value: "1000-2000", label: "1000 - 2000 €" },
                { value: "2000-3000", label: "2000 - 3000 €" },
                { value: "3000+", label: "Plus de 3000 €" }
            ]
        },
        {
            title: "Quelle est votre adresse e-mail de contact ? 📧",
            subtitle: "Cette question est requise*",
            key: "email",
            type: "email",
            placeholder: "votre@email.com",
            required: true
        },
        {
            title: "À propos de votre site web idéal, pourriez-vous nous en parler en quelques phrases ?",
            subtitle: "(One page, E-commerce, Full section, site vitrine, marketplace...) Cette question est cruciale ✅",
            key: "projectDescription",
            type: "text",
            placeholder: "Décrivez votre projet idéal...",
            required: true
        },
        {
            title: "Pouvez-vous me renseigner votre numéro ?",
            subtitle: "Cette question est requise*",
            key: "phone",
            type: "tel",
            placeholder: "06 XX XX XX XX",
            required: true
        }
    ]

    const finalMessage = {
        title: "Merci d'avoir rempli ce formulaire",
        subtitle: "Je vais vous contacter sous 24H",
        isFinal: true
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && step >= 0 && answers[questions[step].key]) {
            nextStep()
        }
    }

    const handleChange = (e) => {
        if (step >= 0) {
            setAnswers({
                ...answers,
                [questions[step].key]: e.target.value
            })
        }
    }

    const handleRadioChange = (value) => {
        setAnswers({
            ...answers,
            [questions[step].key]: value
        })
    }

    const nextStep = () => {
        if (step < questions.length - 1) {
            setStep(step + 1)
        } else {
            // Afficher le message final pendant 2 secondes avant de fermer
            setStep(questions.length)
            setTimeout(() => {
                onClose()
                setStep(-1)
                setAnswers({ firstName: '', companyName: '', hasSite: '', budget: '', email: '', projectType: '', projectDescription: '', phone: '' })
            }, 2000)
        }
    }

    if (!isOpen) return null

    const currentQuestion = step === -1 
        ? intro 
        : step === questions.length 
            ? finalMessage 
            : questions[step]

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white w-full max-w-lg p-8 rounded-lg shadow-xl">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">
                        {currentQuestion.title}
                    </h2>
                    {currentQuestion.subtitle && (
                        <p className="text-sm text-gray-500 mb-4">{currentQuestion.subtitle}</p>
                    )}
                    
                    {!currentQuestion.isIntro && !currentQuestion.isFinal && (
                        currentQuestion.type === 'radio' ? (
                            <div className="space-y-4">
                                {currentQuestion.options.map((option) => (
                                    <button
                                        key={option.value}
                                        onClick={() => handleRadioChange(option.value)}
                                        className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                                            answers[currentQuestion.key] === option.value
                                                ? 'border-blue-500 bg-blue-50'
                                                : 'border-gray-200 hover:border-gray-300'
                                        }`}
                                    >
                                        {option.label}
                                    </button>
                                ))}
                            </div>
                        ) : currentQuestion.type === 'textarea' ? (
                            <textarea
                                className="w-full p-4 text-xl border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                                placeholder={currentQuestion.placeholder}
                                value={answers[currentQuestion.key]}
                                onChange={handleChange}
                                rows={4}
                                autoFocus
                            />
                        ) : (
                            <input
                                type={currentQuestion.type}
                                className="w-full p-4 text-xl border-b-2 border-gray-300 focus:border-blue-500 outline-none"
                                placeholder={currentQuestion.placeholder}
                                value={answers[currentQuestion.key]}
                                onChange={handleChange}
                                onKeyPress={handleKeyPress}
                                autoFocus
                            />
                        )
                    )}
                </div>

                {!currentQuestion.isFinal && (
                    <div className="flex justify-between items-center">
                        {step >= 0 && (
                            <div className="text-sm text-gray-500">
                                Question {step + 1} sur {questions.length}
                            </div>
                        )}
                        
                        <div className="flex gap-4 ml-auto">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-gray-600 hover:text-gray-800"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={nextStep}
                                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                                disabled={currentQuestion.required && !answers[currentQuestion.key]}
                            >
                                {step === -1 ? 'Commencer' : step === questions.length - 1 ? 'Terminer' : 'Suivant'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
} 