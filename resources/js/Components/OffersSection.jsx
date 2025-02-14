import { Link } from '@inertiajs/react'
import FadeWrapper from '@/Components/FadeWrapper'

const offers = [
    {
        title: "Site Web",
        description: "Boostez votre activité grâce à votre site internet clé en main.",
        image: "/images/mockups/site-web.jpg",
        link: "/solutions#site-web",
        isNew: true
    },
    {
        title: "Publicité Google",
        description: "Générez plus de contacts en passant de visible à incontournable.",
        image: "/images/mockups/google-ads.png",
        link: "/solutions#google-ads",
        isNew: true
    },
    {
        title: "Application Mobile",
        description: "Transformez votre présence en ligne en une véritable vitrine incontournable pour générer davantage de contacts",
        image: "/images/mockups/4273279.jpg",
        link: "/solutions#app-mobile",
        isNew: true
    }
];

const OffersSection = () => {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <FadeWrapper show={true}>
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-medium">NOS OFFRES</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">
                            Des offres de qualité conçues pour s'adapter<br />
                            à votre activité et à votre budget
                        </h2>
                    </div>
                </FadeWrapper>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <FadeWrapper key={index} show={true} delay={index * 0.2}>
                            <Link 
                                href={offer.link}
                                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow overflow-hidden"
                            >
                                {offer.isNew && (
                                    <span className="absolute top-4 right-4 bg-green-400 text-white text-xs font-medium px-2.5 py-1 rounded-full z-10">
                                        New
                                    </span>
                                )}
                                
                                <div className="relative h-64 overflow-hidden bg-gray-50">
                                    <img 
                                        src={offer.image} 
                                        alt={offer.title}
                                        className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {offer.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {offer.description}
                                    </p>
                                    <span className="inline-flex items-center text-blue-600 font-medium">
                                        Découvrir
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </span>
                                </div>
                            </Link>
                        </FadeWrapper>
                    ))}
                </div>

                <FadeWrapper show={true} delay={0.6}>
                    <div className="text-center mt-12">
                        <Link 
                            href="/solutions"
                            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700"
                        >
                            Consultez nos services
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                            </svg>
                        </Link>
                    </div>
                </FadeWrapper>
            </div>
        </section>
    );
};

export default OffersSection; 