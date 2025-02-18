import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import FadeWrapper from '@/Components/FadeWrapper';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Collab() {
    const { t } = useTranslation();
    const [activeProject, setActiveProject] = useState(0);
    const [activeImage, setActiveImage] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [showDetailsKitty, setShowDetailsKitty] = useState(false);
    const [activeKittyImage, setActiveKittyImage] = useState(0);

    const projects = [
        {
            title: t('collab.projects.lucile.title'),
            client: t('collab.projects.lucile.client'),
            description: t('collab.projects.lucile.description'),
            benefits: t('collab.projects.lucile.benefits.items', { returnObjects: true }),
            features: t('collab.projects.lucile.features.sections', { returnObjects: true }),
            image: "/images/mockups/lucile-pigeot.png"
        },
        {
            title: t('collab.projects.kitty.title'),
            description: t('collab.projects.kitty.description'),
            benefits: t('collab.projects.kitty.benefits.items', { returnObjects: true }),
            features: t('collab.projects.kitty.features.sections', { returnObjects: true }),
            image: "/images/mockups/kitty-1.png"
        }
    ];

    const projectImages = [
        {
            src: "/images/mockups/lucile-pigeot.png",
            alt: t('collab.projects.images.lucile.alt.0')
        },
        {
            src: "/images/mockups/lucile-pigeot-2.png",
            alt: t('collab.projects.images.lucile.alt.1')
        },
        {
            src: "/images/mockups/lucile-pigeot-3.png",
            alt: t('collab.projects.images.lucile.alt.2')
        }
    ];

    const kittyImages = [
        {
            src: "/images/mockups/kitty-1.png",
            alt: t('collab.projects.images.kitty.alt.0')
        },
        {
            src: "/images/mockups/kitty-2.png",
            alt: t('collab.projects.images.kitty.alt.1')
        },
        {
            src: "/images/mockups/kitty-3.png",
            alt: t('collab.projects.images.kitty.alt.2')
        },
        {
            src: "/images/mockups/kitty-4.png",
            alt: t('collab.projects.images.kitty.alt.3')
        }
    ];
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
            <Head title={t('collab.title')} />
            
            {/* Titre principal */}
            <div className="w-full bg-white py-12 sm:py-24">
                <div className="container mx-auto px-4 text-center">
                    <FadeWrapper>
                        <span className="text-blue-700 text-xl sm:text-2xl font-medium block">
                            {t('title')}
                        </span>
                        <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                            {t('subtitle')} <br />
                            <span className="text-blue-600">{t('cta')} </span>
                        </h1>
                    </FadeWrapper>
                </div>
            </div>
            
            {/* Container principal */}
            <div className="flex flex-col sm:snap-y sm:snap-mandatory sm:h-screen sm:overflow-y-auto sm:divide-y-2 sm:divide-gray-200">
                {/* Section Lucile Pigeot */}
                <section className="flex flex-col sm:flex-row sm:h-screen sm:snap-start">
                    {/* Image Section - Full width on mobile */}
                    <div className="w-full sm:w-1/2 relative p-4 sm:p-12">
                        <FadeWrapper key={activeImage}>
                            <img 
                                src={projectImages[activeImage].src}
                                alt={projectImages[activeImage].alt}
                                className="w-full h-auto rounded-lg shadow-xl"
                            />
                        </FadeWrapper>
                        
                        {/* Navigation buttons */}
                        <div className="flex justify-between mt-4">
                            <button onClick={prevImage} className="p-2 bg-white rounded-full shadow-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button onClick={nextImage} className="p-2 bg-white rounded-full shadow-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full sm:w-1/2 p-4 sm:p-12 bg-white">
                        <div className="max-w-2xl mx-auto">
                            <div className={`transition-all duration-300 ${showDetails ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                                    {t('collab.projects.lucile.title')}
                                </h2>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                        {t('collab.projects.lucile.benefits.title')}
                                    </h3>
                                    <ul className="space-y-3">
                                        {projects[0].benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                <span className="text-blue-600 font-semibold mr-2">✓</span>
                                                <span><strong>{benefit.title}:</strong> {benefit.description}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => setShowDetails(true)}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    {t('collab.projects.common.discover')}
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
                                    {t('collab.projects.common.back')}
                                </button>

                                <p className="text-gray-600 mb-8">
                                    {projects[activeProject].description}
                                </p>

                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-blue-600">
                                        {t('collab.projects.lucile.features.title')}
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
                </section>

                {/* Section Kitty */}
                <section className="flex flex-col sm:flex-row sm:h-screen sm:snap-start">
                    {/* Image Section - Full width on mobile */}
                    <div className="w-full sm:w-1/2 relative p-4 sm:p-12">
                        <FadeWrapper key={activeKittyImage}>
                            <img 
                                src={kittyImages[activeKittyImage].src}
                                alt={kittyImages[activeKittyImage].alt}
                                className="w-full h-auto rounded-lg shadow-xl"
                            />
                        </FadeWrapper>
                        
                        {/* Navigation buttons */}
                        <div className="flex justify-between mt-4">
                            <button onClick={prevKittyImage} className="p-2 bg-white rounded-full shadow-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button onClick={nextKittyImage} className="p-2 bg-white rounded-full shadow-lg">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="w-full sm:w-1/2 p-4 sm:p-12 bg-white">
                        <div className="max-w-2xl mx-auto">
                            <div className={`transition-all duration-300 ${showDetailsKitty ? 'h-0 opacity-0 overflow-hidden' : 'h-auto opacity-100'}`}>
                                <h2 className="text-2xl font-semibold text-gray-800 mb-8">
                                    {t('collab.projects.kitty.title')}
                                </h2>

                                <div className="mb-8">
                                    <h3 className="text-xl font-semibold text-blue-600 mb-4">
                                        {t('collab.projects.kitty.benefits.title')}
                                    </h3>
                                    <ul className="space-y-3">
                                        {projects[1].benefits.map((benefit, index) => (
                                            <li key={index} className="flex items-center text-gray-700">
                                                <span className="text-blue-600 font-semibold mr-2">✓</span>
                                                <span><strong>{benefit.title}:</strong> {benefit.description}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => setShowDetailsKitty(true)}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                                >
                                    {t('collab.projects.common.discover')}
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
                                    {t('collab.projects.common.back')}
                                </button>

                                <p className="text-gray-600 mb-8">
                                    {projects[1].description}
                                </p>

                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold text-blue-600">
                                        {t('collab.projects.common.technicalFeatures')}
                                    </h3>

                                    <div className="space-y-4">
                                        {projects[1].features.map((feature, index) => (
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