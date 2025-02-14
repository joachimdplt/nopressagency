import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "solutions": "Solutions",
      "contact": "Contact",
      "hero": {
        "title": "The #1 Communication Agency in Nancy",
        "subtitle": "Need help? Our team is here for you!",
        "cta": "Contact us now",
        "contact_us": "Contact our team!"
      },
      "contact_page": {
        "schedule": "Mon. to Fri. (9am - 9pm)",
        "call_us": "Call our support",
        "email_us": "Send an email",
        "response_time": "Get a response within 24 hours",
        "location": "Location",
        "address": "18 Quai Claude le Lorrain,",
        "book_appointment": "Book an appointment",
        "social_media": {
          "title": "Follow us on social media",
          "followers": "Followers"
        }
      },
      "solutions_page": {
        "showcase": {
          "title": "Showcase",
          "subtitle": "Your online presence",
          "features": [
            "Professional presentation",
            "Effective promotion",
            "Simplified contact"
          ],
          "packs": {
            "basic": {
              "name": "Basic Pack",
              "description": "A simple showcase site with 3 pages (Home, Services, Contact)",
              "delivery": "Delivery in 7 days"
            },
            "pro": {
              "name": "Pro Pack",
              "description": "Showcase site with advanced features (Blog, contact form, etc.)",
              "delivery": "Delivery in 30 days"
            }
          }
        },
        "webapp": {
          "title": "Web App",
          "subtitle": "A robust application designed to meet specific needs",
          "features": [
            "Custom application",
            "Dashboard",
            "Data management"
          ]
        },
        "ecommerce": {
          "title": "E-Commerce",
          "subtitle": "Your virtual store",
          "features": [
            "Wide range of products",
            "Simplified ordering",
            "Secure purchases"
          ]
        }
      },
      "features": {
        "design": {
          "title": "Striking designs",
          "description": "Enhance your business with striking designs and adapted content"
        },
        "security": {
          "title": "Guaranteed security",
          "description": "Ensure the security of your online presence with reliable solutions"
        },
        "training": {
          "title": "Included training",
          "description": "Learn to easily modify your site with our integrated training modules"
        },
        "performance": {
          "title": "Guaranteed performance",
          "description": "We optimize all sites for maximum performance"
        },
        "support": {
          "title": "Reactive customer support",
          "description": "Benefit from professional assistance to quickly meet your needs"
        },
        "visibility": {
          "title": "Increased visibility",
          "description": "Reach a global audience through effective online presence"
        }
      },
      "faq": {
        "title": "General Questions",
        "subtitle": "Discover the answers to your questions: Everything you need to know about our services",
        "support_message": "Our team remains available to answer all your questions and provide continuous assistance for any modifications or potential issues"
      }
    }
  },
  fr: {
    translation: {
      "solutions": "Solutions",
      "contact": "Contact",
      "hero": {
        "title": "L'agence De Communication N°1 à Nancy",
        "subtitle": "Besoin d'aide ? Notre équipe est là pour vous !",
        "cta": "Contactez-nous dès maintenant",
        "contact_us": "Contactez notre équipe !"
      },
      "contact_page": {
        "schedule": "Lun. au ven. (9h - 21h)",
        "call_us": "Contactez notre support",
        "email_us": "Envoyer un email",
        "response_time": "Obtenez une réponse dans les 24 heures",
        "location": "Localisation",
        "address": "18 Quai Claude le Lorrain,",
        "book_appointment": "Prendre rendez-vous",
        "social_media": {
          "title": "Suivez-nous sur les réseaux sociaux",
          "followers": "Abonnés"
        }
      },
      "solutions_page": {
        "showcase": {
          "title": "Vitrine",
          "subtitle": "Votre présence en ligne",
          "features": [
            "Présentation professionnelle",
            "Promotion efficace",
            "Contact simplifié"
          ],
          "packs": {
            "basic": {
              "name": "Pack Basic",
              "description": "Un site vitrine simple avec 3 pages (Accueil, Services, Contact)",
              "delivery": "Livraison en 7 jours"
            },
            "pro": {
              "name": "Pack Pro",
              "description": "Site vitrine avec fonctionnalités avancées (Blog, formulaire de contact, etc.)",
              "delivery": "Livraison en 30 jours"
            }
          }
        },
        "webapp": {
          "title": "Web App",
          "subtitle": "Une application robuste conçue pour répondre à des besoins spécifiques",
          "features": [
            "Application sur mesure",
            "Tableau de bord",
            "Gestion des données"
          ]
        },
        "ecommerce": {
          "title": "E-Commerce",
          "subtitle": "Votre boutique virtuelle",
          "features": [
            "Large choix de produits",
            "Commande simplifiée",
            "Achats sécurisés"
          ]
        }
      },
      "features": {
        "design": {
          "title": "Designs percutants",
          "description": "Valorisez votre entreprise avec des designs percutants et des contenus adaptés"
        },
        "security": {
          "title": "Sécurité garantie",
          "description": "Assurez la sécurité de votre présence en ligne avec des solutions fiables"
        },
        "training": {
          "title": "Formation incluse",
          "description": "Apprenez à modifier votre site facilement avec nos modules de formation intégrés"
        },
        "performance": {
          "title": "Performances garanties",
          "description": "Nous optimisons tous les sites pour des performances maximales"
        },
        "support": {
          "title": "Support client réactif",
          "description": "Bénéficiez d'une assistance professionnelle pour répondre à vos besoins rapidement"
        },
        "visibility": {
          "title": "Visibilité accrue",
          "description": "Atteignez une audience mondiale grâce à une présence en ligne efficace"
        }
      },
      "faq": {
        "title": "Questions Générales",
        "subtitle": "Découvrez les réponses à vos interrogations : Tout ce que vous devez savoir sur nos services",
        "support_message": "Notre équipe reste disponible pour répondre à toutes vos questions et vous fournir une assistance continue pour toute modification ou problème éventuel"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n; 