import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            icon: "🔍",
            question: "Quels types de sites proposez-vous et quelles sont leurs différences ?",
            answer: "Nous proposons trois types principaux : sites vitrines pour présenter votre activité, web apps pour des fonctionnalités avancées, et e-commerce pour la vente en ligne. Chaque solution est adaptée à des besoins spécifiques."
        },
        {
            icon: "⚡",
            question: "Comment fonctionne le processus de création d'un site avec votre service ?",
            answer: "Notre processus se déroule en plusieurs étapes : consultation initiale, proposition personnalisée, design, développement, tests et mise en ligne. Vous êtes impliqué à chaque étape pour garantir votre satisfaction."
        },
        {
            icon: "🎨",
            question: "Offrez-vous des services de personnalisation ou de développement sur mesure ?",
            answer: "Oui, nous proposons des solutions entièrement personnalisables. Chaque projet est unique et nous adaptons nos services à vos besoins spécifiques."
        },
        {
            icon: "⏱️",
            question: "Quels sont les délais de livraison habituels pour la création d'un site ?",
            answer: "Les délais varient selon la complexité : 7 jours pour un site vitrine basic, 30 jours pour un site plus élaboré, et jusqu'à 90 jours pour une application web complexe."
        },
        {
            icon: "🛠️",
            question: "Comment fonctionne le support client après la livraison du site ?",
            answer: "Notre équipe reste disponible pour répondre à toutes vos questions et vous fournir une assistance continue pour toute modification ou problème éventuel."
        },
        {
            icon: "🔄",
            question: "Puis-je mettre à jour mon site moi-même après sa création ?",
            answer: "Oui, nous fournissons un système de gestion de contenu intuitif qui vous permet de mettre à jour facilement votre site. Une formation est incluse à la livraison."
        },
        {
            icon: "🏢",
            question: "Est-ce que vous proposez des services d'hébergement pour les sites que vous créez ?",
            answer: "Oui, nous proposons des solutions d'hébergement sécurisées et optimisées pour votre site. Nous gérons l'ensemble de l'infrastructure technique pour vous."
        },
        {
            icon: "➕",
            question: "Est-il possible d'ajouter de nouvelles fonctionnalités à mon site à l'avenir ?",
            answer: "Absolument ! Votre site est conçu de manière évolutive. Nous pouvons ajouter de nouvelles fonctionnalités selon vos besoins futurs."
        },
        {
            icon: "🔧",
            question: "Comment se passe le processus de maintenance de mon site après sa création ?",
            answer: "Nous proposons différentes formules de maintenance incluant les mises à jour de sécurité, les sauvegardes régulières et le support technique."
        },
        {
            icon: "💰",
            question: "Quelles sont vos tarifs pour les services supplémentaires comme la maintenance et les mises à jour ?",
            answer: "Nos tarifs de maintenance sont adaptés à vos besoins. Nous proposons des forfaits mensuels ou annuels incluant différents niveaux de service."
        }
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Colonne de gauche */}
                    <div className="sticky top-24">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Questions Générales
                        </h2>
                        <p className="text-lg text-gray-600">
                            Découvrez les réponses à vos interrogations : Tout ce que vous devez savoir sur nos services.
                        </p>
                    </div>

                    {/* Colonne de droite - Questions scrollables */}
                    <div className="space-y-4 max-h-[800px] overflow-y-auto pr-4 scroll-smooth scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-xl">
                                <button
                                    className="w-full text-left p-6 hover:bg-gray-50 rounded-xl shadow-sm transition-colors border border-gray-100"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="text-xl">{faq.icon}</span>
                                        <span className="text-lg font-medium text-gray-900">
                                            {faq.question}
                                        </span>
                                    </div>
                                </button>
                                
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="p-6 bg-white">
                                                <p className="text-gray-600">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Message de support */}
                <div className="mt-12 text-center text-gray-600 max-w-2xl mx-auto">
                    Notre équipe reste disponible pour répondre à toutes vos questions et vous fournir une assistance continue pour toute modification ou problème éventuel.
                </div>
            </div>
        </section>
    );
};

export default FAQ; 