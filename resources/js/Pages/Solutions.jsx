import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import FadeWrapper from '@/Components/FadeWrapper';
import { useState } from 'react';
import ContactForm from '@/Components/ContactForm';

export default function Solutions() {
    const [selectedCard, setSelectedCard] = useState(null);
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

    const solutions = [
        {
            type: 'Site',
            title: 'Vitrine',
            subtitle: 'Votre présence en ligne',
            features: [
                'Présentation professionnelle',
                'Promotion efficace',
                'Contact simplifié'
            ],
            packs: [
                {
                    name: 'Pack Basic',
                    description: 'Un site vitrine simple avec 3 pages (Accueil, Services, Contact)',
                    delivery: 'Livraison en 7 jours'
                },
                {
                    name: 'Pack Pro',
                    description: 'Site vitrine avec fonctionnalités avancées (Blog, formulaire de contact, etc.)',
                    delivery: 'Livraison en 30 jours'
                }
            ],
            buttonColor: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            type: 'Site',
            title: 'Web App',
            subtitle: 'Une application robuste conçue pour répondre à des besoins spécifiques',
            features: [
                'Application sur mesure',
                'Tableau de bord',
                'Gestion des données'
            ],
            packs: [
                {
                    name: 'Pack Standard',
                    description: 'Application simple avec authentification et gestion CRUD',
                    delivery: 'Livraison en 60 jours'
                },
                {
                    name: 'Pack Avancé',
                    description: 'Application complexe avec tableau de bord, intégration API et analyses',
                    delivery: 'Livraison en 90 jours'
                }
            ],
            buttonColor: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            type: 'Site',
            title: 'E-Commerce',
            subtitle: 'Votre boutique virtuelle',
            features: [
                'Large choix de produits',
                'Commande simplifiée',
                'Achats sécurisés'
            ],
            packs: [
                {
                    name: 'Pack Startup',
                    description: 'Boutique simple avec paiement en ligne',
                    delivery: 'Livraison en 30 jours'
                },
                {
                    name: 'Pack Business',
                    description: 'Boutique complète avec gestion de stock et multi-devises',
                    delivery: 'Livraison en 60 jours'
                }
            ],
            buttonColor: 'bg-blue-600 hover:bg-blue-700'
        },
        {
            type: 'App',
            title: 'Mobile App',
            subtitle: 'Créer une expérience utilisateur sur mobile',
            features: [
                'Design natif',
                'Performance optimale',
                'Expérience fluide'
            ],
            packs: [
                {
                    name: 'Pack Startup',
                    description: 'Application mobile hybride avec fonctionnalités basiques',
                    delivery: 'Livraison en 90 jours'
                },
                {
                    name: 'Pack Premium',
                    description: 'Application native avec intégrations complexes (paiement, notifications, etc.)',
                    delivery: 'Livraison en 180 jours'
                }
            ],
            buttonColor: 'bg-blue-600 hover:bg-blue-700'
        }
    ];

    return (
        <>
            <Head title="Nos Solutions" />
            
            {/* Hero Section */}
            <section className="min-h-screen flex items-center bg-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeWrapper>
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 text-center max-w-5xl mx-auto leading-tight">
                            Une vitrine, un site e-commerce, une application ? Nous avons tout ce qu'il vous faut.
                        </h1>
                        
                        <p className="mt-8 text-xl text-gray-600 text-center max-w-3xl mx-auto">
                           Présentez vos problématiques, nous avons les solutions pour vous démarquer sur le web !
                        </p>

                        <div className="mt-12 flex justify-center">
                            <button
                                onClick={() => setIsContactFormOpen(true)}
                                className="px-8 py-4 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-all text-lg flex items-center gap-2"
                            >
                                Nous contacter
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                    </FadeWrapper>
                </div>
            </section>

            {/* Section Solutions */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {solutions.map((solution, index) => (
                            <FadeWrapper key={index} delay={index * 0.2}>
                                <div 
                                    className={`${
                                        selectedCard === index ? 'bg-blue-600' : 'bg-white'
                                    } rounded-3xl shadow-xl p-6 relative transform hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                                    onClick={() => setSelectedCard(index)}
                                >
                                    {/* Badge Type */}
                                    <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-6">
                                        {solution.type}
                                    </span>

                                    {/* Titre et Sous-titre */}
                                    <h3 className={`text-3xl font-bold ${
                                        selectedCard === index ? 'text-white' : 'text-gray-900'
                                    } mb-2`}>
                                        {solution.title}
                                    </h3>
                                    <p className={`text-lg ${
                                        selectedCard === index ? 'text-blue-100' : 'text-blue-600'
                                    } mb-8`}>
                                        {solution.subtitle}
                                    </p>

                                    {/* Liste des fonctionnalités */}
                                    <ul className="space-y-4 mb-8">
                                        {solution.features.map((feature, idx) => (
                                            <li 
                                                key={idx}
                                                className={`flex items-center ${
                                                    selectedCard === index ? 'text-white' : 'text-gray-600'
                                                }`}
                                            >
                                                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                                </svg>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Packs */}
                                    <div className="space-y-4 mb-8">
                                        {solution.packs.map((pack, idx) => (
                                            <div 
                                                key={idx}
                                                className={`p-4 rounded-xl ${
                                                    selectedCard === index 
                                                        ? 'bg-blue-500 bg-opacity-50' 
                                                        : 'bg-gray-50'
                                                }`}
                                            >
                                                <h4 className={`font-bold mb-2 ${
                                                    selectedCard === index ? 'text-white' : 'text-gray-900'
                                                }`}>
                                                    {pack.name}
                                                </h4>
                                                <p className={`text-sm mb-2 ${
                                                    selectedCard === index ? 'text-blue-100' : 'text-gray-600'
                                                }`}>
                                                    {pack.description}
                                                </p>
                                                <span className={`text-xs font-medium ${
                                                    selectedCard === index ? 'text-blue-200' : 'text-blue-600'
                                                }`}>
                                                    {pack.delivery}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Bouton */}
                                    <button
                                        className={`w-full ${
                                            selectedCard === index 
                                                ? 'bg-emerald-400 hover:bg-emerald-500' 
                                                : 'bg-blue-600 hover:bg-blue-700'
                                        } text-white rounded-xl py-4 font-medium transition-colors flex items-center justify-center gap-2`}
                                    >
                                        Obtenir un devis
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </button>
                                </div>
                            </FadeWrapper>
                        ))}
                    </div>
                </div>
            </section>

            <ContactForm 
                isOpen={isContactFormOpen}
                onClose={() => setIsContactFormOpen(false)}
            />
        </>
    );
}

Solutions.layout = page => <AppLayout children={page} /> 