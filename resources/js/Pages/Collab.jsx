import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import FadeWrapper from '@/Components/FadeWrapper';
import { useState } from 'react';

export default function Collab() {
    const [activeProject, setActiveProject] = useState(0);
    const [activeImage, setActiveImage] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [showDetailsKitty, setShowDetailsKitty] = useState(false);
    const [activeKittyImage, setActiveKittyImage] = useState(0);

    const projects = [
        {
            title: "Développement d'un SPA avec React, Laravel, Inertia et MySQL",
            client: "Lucile Pigeot",
            description: "Ce projet a été développé pour Lucile Pigeot, avec pour objectif de simplifier la gestion et la publication de contenus scientifiques en intégrant une API externe (HAL Science). L'interface offre une expérience fluide et moderne grâce à une approche Single Page Application (SPA) et une administration centralisée via un tableau de bord privé.",
            benefits: [
                { title: "Gain de temps", description: "gestion et publication des articles automatisée" },
                { title: "Contrôle total", description: "un CMS sur mesure adapté à ses besoins" },
                { title: "Accessibilité", description: "une interface intuitive accessible sur tous les appareils" },
                { title: "Fiabilité", description: "sécurité et performance assurées" }
            ],
            features: [
                {
                    title: "Dashboard Administratif Privé",
                    items: [
                        "Interface sécurisée permettant de gérer les contenus sans compétences techniques.",
                        "Système de connexion avec authentification sécurisée (JWT, Laravel Sanctum).",
                        "Gestion des utilisateurs et permissions pour contrôler l'accès aux différentes sections."
                    ]
                },
                {
                    title: "Intégration Automatique des Articles via l'API HAL Science",
                    items: [
                        "Connexion à l'API HAL pour récupérer automatiquement les articles scientifiques publiés.",
                        "Possibilité de modifier, supprimer ou enrichir les articles directement depuis l'interface.",
                        "Système de mise à jour automatique pour synchroniser les nouveaux articles."
                    ]
                },
                {
                    title: "CMS Privé et Personnalisable",
                    items: [
                        "Création, modification et suppression de contenus via un éditeur ergonomique.",
                        "Ajout d'images et de fichiers pour enrichir les articles.",
                        "Organisation du contenu par catégories et filtres intelligents."
                    ]
                },
                {
                    title: "Expérience Utilisateur Optimisée avec une SPA",
                    items: [
                        "Interface ultra-réactive et fluide grâce à React et Inertia.js.",
                        "Navigation instantanée sans rechargement de page.",
                        "Design moderne et responsive, adapté à tous les écrans."
                    ]
                },
                {
                    title: "Performance et Sécurité",
                    items: [
                        "Base de données MySQL optimisée pour une recherche rapide et efficace.",
                        "Sauvegarde et gestion des données pour éviter toute perte de contenu.",
                        "Hébergement sur un serveur performant garantissant une haute disponibilité."
                    ]
                }
            ],
            image: "/images/mockups/lucile-pigeot.png"
        },
        // Ajoutez d'autres projets ici
    ];

    const projectImages = [
        {
            src: "/images/mockups/lucile-pigeot.png",
            alt: "Dashboard du projet Lucile Pigeot"
        },
        {
            src: "/images/mockups/lucile-pigeot-2.png",
            alt: "Interface de gestion des articles"
        },
        {
            src: "/images/mockups/lucile-pigeot-3.png",
            alt: "Page d'accueil du site"
        }
    ];

    const kittyImages = [
        {
            src: "/images/mockups/kitty-1.png",
            alt: "Interface principale de l'application Kitty"
        },
        {
            src: "/images/mockups/kitty-2.png",
            alt: "Dashboard de streaming Kitty"
        },
        {
            src: "/images/mockups/kitty-3.png",
            alt: "Dashboard de streaming Kitty"
        },
        {
            src: "/images/mockups/kitty-4.png",
            alt: "Dashboard de streaming Kitty"
        }
    ];

    const nextProject = () => {
        setActiveProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const nextImage = () => {
        setActiveImage((prev) => (prev + 1) % projectImages.length);
    };

    const prevImage = () => {
        setActiveImage((prev) => (prev - 1 + projectImages.length) % projectImages.length);
    };

    const nextKittyImage = () => {
        setActiveKittyImage((prev) => (prev + 1) % kittyImages.length);
    };

    const prevKittyImage = () => {
        setActiveKittyImage((prev) => (prev - 1 + kittyImages.length) % kittyImages.length);
    };

    return (
        <>
            <Head title="Collaboration" />
            
            {/* Titre principal fixe */}
            <div className="w-full bg-white py-24">
                <div className="container mx-auto px-4 text-center">
                    <FadeWrapper>
                        <span className="text-blue-600 font-medium block">NOS RÉALISATIONS</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                            🔹 Besoin d'une plateforme <br />
                            sur-mesure pour gérer votre contenu ? <br />
                            <span className="text-blue-600">Parlons-en ! 🚀</span>
                        </h1>
                    </FadeWrapper>
                </div>
            </div>
            
            {/* Container pour les sections scrollables */}
            <div className="snap-y snap-mandatory h-screen overflow-y-auto divide-y-2 divide-gray-200">
                {/* Section Lucile Pigeot */}
                <section className="h-screen flex snap-start border-b-4 border-gray-200">
                    <div className="w-1/2 bg-white p-12">
                        <div className="max-w-2xl mx-auto">
                            <div className={`transition-all duration-300 ${showDetails ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                                    Développement d'un SPA avec React, Laravel, Inertia et MySQL
                                </h2>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                        Bénéfices pour Lucile Pigeot
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-blue-600 font-semibold mr-2">✓</span>
                                            <span><strong>Gain de temps :</strong> gestion et publication des articles automatisée</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-blue-600 font-semibold mr-2">✓</span>
                                            <span><strong>Contrôle total :</strong> un CMS sur mesure adapté à ses besoins</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-blue-600 font-semibold mr-2">✓</span>
                                            <span><strong>Accessibilité :</strong> une interface intuitive accessible sur tous les appareils</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-blue-600 font-semibold mr-2">✓</span>
                                            <span><strong>Fiabilité :</strong> sécurité et performance assurées</span>
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    onClick={() => setShowDetails(true)}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    Découvrir le projet
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            <div className={`transition-all duration-300 overflow-y-auto ${showDetails ? 'opacity-100 h-[calc(100vh-200px)]' : 'opacity-0 h-0'}`}>
                                <button
                                    onClick={() => setShowDetails(false)}
                                    className="mb-6 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                    Retour
                                </button>

                                <p className="text-gray-600 mb-8">
                                    {projects[activeProject].description}
                                </p>

                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-blue-600">
                                        Fonctionnalités Clés
                                    </h3>

                                    <div className="space-y-6">
                                        {projects[activeProject].features.map((feature, index) => (
                                            <div key={index}>
                                                <h4 className="font-semibold text-gray-800">{feature.title}</h4>
                                                <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                                    {feature.items.map((item, itemIndex) => (
                                                        <li key={itemIndex}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/2 bg-gray-50 relative">
                        <button 
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button 
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="h-full flex flex-col items-center justify-center p-12 -mt-12">
                            <FadeWrapper key={activeImage}>
                                <img 
                                    src={projectImages[activeImage].src}
                                    alt={projectImages[activeImage].alt}
                                    className="max-w-full h-auto shadow-xl rounded-lg mb-8"
                                />
                            </FadeWrapper>

                            <div className="flex space-x-2">
                                {projectImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            index === activeImage ? 'bg-blue-600 w-4' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section Kitty */}
                <section className="h-screen flex snap-start border-t-4 border-gray-200">
                    <div className="w-1/2 bg-white relative">
                        <button 
                            onClick={prevKittyImage}
                            className="absolute left-4 top-1/2 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button 
                            onClick={nextKittyImage}
                            className="absolute right-4 top-1/2 z-10 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-all"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="h-full flex flex-col items-center justify-center p-12 -mt-12">
                            <FadeWrapper key={activeKittyImage}>
                                <img 
                                    src={kittyImages[activeKittyImage].src}
                                    alt={kittyImages[activeKittyImage].alt}
                                    className="max-w-full h-auto shadow-xl rounded-lg mb-8"
                                />
                            </FadeWrapper>

                            <div className="flex space-x-2">
                                {kittyImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveKittyImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            index === activeKittyImage ? 'bg-blue-600 w-4' : 'bg-gray-300'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="w-1/2 bg-gray-50 p-12">
                        <div className="max-w-2xl mx-auto">
                            <div className={`transition-all duration-300 ${showDetailsKitty ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                                    Application Mobile Kitty - Streaming Privé
                                </h2>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                        Bénéfices pour les Créateurs
                                    </h3>
                                    <ul className="space-y-3">
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-blue-600 font-semibold mr-2">✓</span>
                                            <span><strong>Monétisation directe :</strong> gestion des abonnements et contenus premium</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-blue-600 font-semibold mr-2">✓</span>
                                            <span><strong>Engagement communautaire :</strong> interactions en temps réel avec les abonnés</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-blue-600 font-semibold mr-2">✓</span>
                                            <span><strong>Sécurité maximale :</strong> protection des contenus privés</span>
                                        </li>
                                        <li className="flex items-center text-gray-700">
                                            <span className="text-blue-600 font-semibold mr-2">✓</span>
                                            <span><strong>Analytics avancés :</strong> suivi des performances en temps réel</span>
                                        </li>
                                    </ul>
                                </div>

                                <button
                                    onClick={() => setShowDetailsKitty(true)}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    Découvrir le projet
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            <div className={`transition-all duration-300 overflow-y-auto ${showDetailsKitty ? 'opacity-100 h-[calc(100vh-200px)]' : 'opacity-0 h-0'}`}>
                                <button
                                    onClick={() => setShowDetailsKitty(false)}
                                    className="mb-6 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                    Retour
                                </button>

                                <p className="text-gray-600 mb-8">
                                    Application mobile développée avec React Native et Supabase, permettant aux créateurs de contenu de gérer leur communauté via du streaming privé et du contenu exclusif. L'application intègre des fonctionnalités avancées de streaming en direct, de gestion des abonnements et de protection des contenus.
                                </p>

                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-blue-600">
                                        Caractéristiques Techniques
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Infrastructure Temps Réel</h4>
                                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                                <li>Intégration de Supabase pour la gestion en temps réel des données</li>
                                                <li>Système de streaming optimisé pour la basse latence</li>
                                                <li>Gestion des websockets pour les interactions live</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800">Sécurité et Authentification</h4>
                                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                                <li>Authentification sécurisée via Supabase Auth</li>
                                                <li>Chiffrement des contenus privés</li>
                                                <li>Gestion des droits d'accès granulaire</li>
                                            </ul>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-gray-800">Performance Mobile</h4>
                                            <ul className="list-disc ml-6 text-gray-600 space-y-2">
                                                <li>Application React Native pour des performances natives</li>
                                                <li>Optimisation de la consommation de données</li>
                                                <li>Mise en cache intelligente des contenus</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3 */}
                <section className="h-screen flex snap-start border-t-4 border-gray-200">
                    <div className="w-1/2 bg-white">
                        <div className="container h-full flex items-center">
                        </div>
                    </div>
                    <div className="w-1/2 bg-gray-50">
                        <div className="container h-full flex items-center">
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

Collab.layout = page => <AppLayout children={page} /> 