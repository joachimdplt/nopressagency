import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translation: {
          "title": "NOS RÉALISATIONS",
          "subtitle": "Besoin d'une plateforme sur-mesure pour gérer votre contenu ?",
          "cta": "Parlons-en !",
          "discover": "Découvrir le projet",
          "home": {
            "hero": {
              "title": "Vitrine, web app ou application mobile ?",
              "subtitle": "Nous avons tout ce qu'il vous faut.",
              "cta": {
                "website": "Je veux un site",
                "meeting": "Prendre rendez-vous"
              }
            },
            "calendar": {
              "title": "Pourquoi payer Calendly tous les mois ?",
              "description": "Nous pouvons vous intégrer des solutions sur mesure, adaptées à vos besoins spécifiques, sans frais mensuels récurrents.",
              "benefits": {
                "integration": "Intégration personnalisée",
                "noSubscription": "Sans abonnement mensuel",
                "support": "Support inclus"
              },
              "booking": "Prenez rendez-vous",
              "months": {
                "0": "Janvier",
                "1": "Février",
                "2": "Mars",
                "3": "Avril",
                "4": "Mai",
                "5": "Juin",
                "6": "Juillet",
                "7": "Août",
                "8": "Septembre",
                "9": "Octobre",
                "10": "Novembre",
                "11": "Décembre"
              },
              "days": {
                "0": "Dim",
                "1": "Lun",
                "2": "Mar",
                "3": "Mer",
                "4": "Jeu",
                "5": "Ven",
                "6": "Sam"
              },
              "chooseDateTime": "Choisissez une date et une heure",
              "availableHours": "Heures disponibles pour le",
              "confirmAppointment": "Confirmer le rendez-vous",
              "contactForm": {
                "title": "Vos informations de contact",
                "name": "Nom",
                "phone": "Téléphone",
                "email": "Email",
                "cancel": "Annuler",
                "confirm": "Confirmer"
              },
              "success": {
                "title": "Rendez-vous confirmé !",
                "message": "Nous vous avons envoyé un email de confirmation."
              }
            }
          },
          "typewriter": {
            "lines": [
              "Une agence pour les pros.",
              "Prenez rendez-vous dès aujourd'hui !",
              "Votre site est livré en 5 jours !"
            ]
          },
          "offers": {
            "title": "NOS OFFRES",
            "subtitle": "Des offres de qualité conçues pour s'adapter\nà votre activité et à votre budget",
            "items": [
              {
                "title": "Site Web",
                "description": "Boostez votre activité grâce à votre site internet clé en main.",
                "link": "/solutions#site-web"
              },
              {
                "title": "Publicité Google",
                "description": "Générez plus de contacts en passant de visible à incontournable.",
                "link": "/solutions#google-ads"
              },
              {
                "title": "Application Mobile",
                "description": "Transformez votre présence en ligne en une véritable vitrine incontournable pour générer davantage de contacts",
                "link": "/solutions#app-mobile"
              }
            ],
            "discover": "Découvrir",
            "seeMore": "Consultez nos services"
          },
          "terminal": {
            "slogans": [
              "Votre vision, notre code",
              "Du design au déploiement",
              "Des sites qui convertissent",
              "Performance et élégance",
              "Codé avec passion"
            ],
            "expertise": {
              "title": "Expertise:",
              "items": [
                "Architecture Cloud ☁️",
                "API RESTful 🚀",
                "Applications Web Progressives ⚛️",
                "Optimisation SEO 🔍",
                "Sécurité & Performance ⚡️",
                "Design Mobile First 📱",
                "Bases de données évolutives 🗄️",
                "Intégration Continue 🔄"
              ]
            }
          },
          "solutions": {
            "title": "Nos Solutions",
            "hero": {
              "title": "Une vitrine, un site e-commerce, une application ? Nous avons tout ce qu'il vous faut.",
              "subtitle": "Présentez vos problématiques, nous avons les solutions pour vous démarquer sur le web !",
              "contact": "Nous contacter",
              "cta": {
                "website": "Je veux un site"
              }
            },
            "cards": [
              {
                "type": "Site",
                "title": "Vitrine",
                "subtitle": "Votre présence en ligne",
                "features": [
                  "Présentation professionnelle",
                  "Promotion efficace",
                  "Contact simplifié"
                ],
                "packs": [
                  {
                    "name": "Pack Basic",
                    "description": "Un site vitrine simple avec 3 pages (Accueil, Services, Contact)",
                    "delivery": "Livraison en 7 jours"
                  },
                  {
                    "name": "Pack Pro",
                    "description": "Site vitrine avec fonctionnalités avancées (Blog, formulaire de contact, etc.)",
                    "delivery": "Livraison en 30 jours"
                  }
                ]
              },
              {
                "type": "Site",
                "title": "Web App",
                "subtitle": "Une application robuste conçue pour répondre à des besoins spécifiques",
                "features": [
                  "Application sur mesure",
                  "Tableau de bord",
                  "Gestion des données"
                ],
                "packs": [
                  {
                    "name": "Pack Standard",
                    "description": "Application simple avec authentification et gestion CRUD",
                    "delivery": "Livraison en 60 jours"
                  },
                  {
                    "name": "Pack Avancé",
                    "description": "Application complexe avec tableau de bord, intégration API et analyses",
                    "delivery": "Livraison en 90 jours"
                  }
                ]
              },
              {
                "type": "Site",
                "title": "E-Commerce",
                "subtitle": "Votre boutique virtuelle",
                "features": [
                  "Large choix de produits",
                  "Commande simplifiée",
                  "Achats sécurisés"
                ],
                "packs": [
                  {
                    "name": "Pack Startup",
                    "description": "Boutique simple avec paiement en ligne",
                    "delivery": "Livraison en 30 jours"
                  },
                  {
                    "name": "Pack Business",
                    "description": "Boutique complète avec gestion de stock et multi-devises",
                    "delivery": "Livraison en 60 jours"
                  }
                ]
              },
              {
                "type": "App",
                "title": "Mobile App",
                "subtitle": "Créer une expérience utilisateur sur mobile",
                "features": [
                  "Design natif",
                  "Performance optimale",
                  "Expérience fluide"
                ],
                "packs": [
                  {
                    "name": "Pack Startup",
                    "description": "Application mobile hybride avec fonctionnalités basiques",
                    "delivery": "Livraison en 90 jours"
                  },
                  {
                    "name": "Pack Premium",
                    "description": "Application native avec intégrations complexes (paiement, notifications, etc.)",
                    "delivery": "Livraison en 180 jours"
                  }
                ]
              }
            ],
            "getQuote": "Obtenir un devis"
          },
          "collab": {
            "projects": {
              "lucile": {
                "title": "Développement d'un SPA avec React, Laravel, Inertia et MySQL",
                "client": "Lucile Pigeot",
                "description": "Ce projet a été développé pour Lucile Pigeot, avec pour objectif de simplifier la gestion et la publication de contenus scientifiques en intégrant une API externe (HAL Science). L'interface offre une expérience fluide et moderne grâce à une approche Single Page Application (SPA) et une administration centralisée via un tableau de bord privé.",
                "benefits": {
                  "title": "Bénéfices pour Lucile Pigeot",
                  "items": [
                    { "title": "Gain de temps", "description": "gestion et publication des articles automatisée" },
                    { "title": "Contrôle total", "description": "un CMS sur mesure adapté à ses besoins" },
                    { "title": "Accessibilité", "description": "une interface intuitive accessible sur tous les appareils" },
                    { "title": "Fiabilité", "description": "sécurité et performance assurées" }
                  ]
                },
                "features": {
                  "title": "Fonctionnalités Clés",
                  "sections": [
                    {
                      "title": "Dashboard Administratif Privé",
                      "items": [
                        "Interface sécurisée permettant de gérer les contenus sans compétences techniques.",
                        "Système de connexion avec authentification sécurisée (JWT, Laravel Sanctum).",
                        "Gestion des utilisateurs et permissions pour contrôler l'accès aux différentes sections."
                      ]
                    },
                    {
                      "title": "Intégration Automatique des Articles via l'API HAL Science",
                      "items": [
                        "Connexion à l'API HAL pour récupérer automatiquement les articles scientifiques publiés.",
                        "Possibilité de modifier, supprimer ou enrichir les articles directement depuis l'interface.",
                        "Système de mise à jour automatique pour synchroniser les nouveaux articles."
                      ]
                    }
                  ]
                }
              },
              "kitty": {
                "title": "Application Mobile Kitty - Streaming Privé",
                "description": "Application mobile développée avec React Native et Supabase, permettant aux créateurs de contenu de gérer leur communauté via du streaming privé et du contenu exclusif. L'application intègre des fonctionnalités avancées de streaming en direct, de gestion des abonnements et de protection des contenus.",
                "benefits": {
                  "title": "Bénéfices pour les Créateurs",
                  "items": [
                    { "title": "Monétisation directe", "description": "gestion des abonnements et contenus premium" },
                    { "title": "Engagement communautaire", "description": "interactions en temps réel avec les abonnés" },
                    { "title": "Sécurité maximale", "description": "protection des contenus privés" },
                    { "title": "Analytics avancés", "description": "suivi des performances en temps réel" }
                  ]
                },
                "features": {
                  "title": "Caractéristiques Techniques",
                  "sections": [
                    {
                      "title": "Infrastructure Temps Réel",
                      "items": [
                        "Intégration de Supabase pour la gestion en temps réel des données",
                        "Système de streaming optimisé pour la basse latence",
                        "Gestion des websockets pour les interactions live"
                      ]
                    },
                    {
                      "title": "Sécurité et Authentification",
                      "items": [
                        "Authentification sécurisée via Supabase Auth",
                        "Chiffrement des contenus privés",
                        "Gestion des droits d'accès granulaire"
                      ]
                    },
                    {
                      "title": "Performance Mobile",
                      "items": [
                        "Application React Native pour des performances natives",
                        "Optimisation de la consommation de données",
                        "Mise en cache intelligente des contenus"
                      ]
                    }
                  ]
                }
              },
              "images": {
                "lucile": {
                  "alt": [
                    "Dashboard du projet Lucile Pigeot",
                    "Interface de gestion des articles",
                    "Page d'accueil du site"
                  ]
                },
                "kitty": {
                  "alt": [
                    "Interface principale de l'application Kitty",
                    "Dashboard de streaming Kitty",
                    "Dashboard de streaming Kitty",
                    "Dashboard de streaming Kitty"
                  ]
                }
              },
              "common": {
                "discover": "Découvrir le projet",
                "back": "Retour",
                "technicalFeatures": "Caractéristiques Techniques"
              },
              "faq": {
                "title": "General Questions",
                "subtitle": "Find answers to your questions: Everything you need to know about our services.",
                "support": "Our team remains available to answer all your questions and provide ongoing assistance for any modifications or potential issues.",
                "questions": [
                  {
                    "icon": "🔍",
                    "question": "What types of websites do you offer and what are their differences?",
                    "answer": "We offer three main types: showcase websites to present your business, web apps for advanced functionality, and e-commerce for online sales. Each solution is adapted to specific needs."
                  },
                  {
                    "icon": "⚡",
                    "question": "How does the site creation process work with your service?",
                    "answer": "Our process involves several steps: initial consultation, personalized proposal, design, development, testing, and launch. You are involved at each step to ensure your satisfaction."
                  },
                  {
                    "icon": "🎨",
                    "question": "Do you offer customization or custom development services?",
                    "answer": "Yes, we offer fully customizable solutions. Each project is unique and we tailor our services to your specific needs."
                  },
                  {
                    "icon": "⏱️",
                    "question": "What are the usual delivery times for site creation?",
                    "answer": "Delivery times vary depending on complexity: 7 days for a basic showcase site, 30 days for a more complex site, and up to 90 days for a complex web application."
                  },
                  {
                    "icon": "🛠️",
                    "question": "How does the client support work after the site is delivered?",
                    "answer": "Our team remains available to answer all your questions and provide ongoing assistance for any modifications or potential issues."
                  },
                  {
                    "icon": "🔄",
                    "question": "Can I update my site myself after its creation?",
                    "answer": "Yes, we provide an intuitive content management system that allows you to easily update your site. Training is included with delivery."
                  },
                  {
                    "icon": "🏢",
                    "question": "Do you offer hosting services for the sites you create?",
                    "answer": "Yes, we offer secure and optimized hosting solutions for your site. We manage the entire technical infrastructure for you."
                  },
                  {
                    "icon": "➕",
                    "question": "Is it possible to add new features to my site in the future?",
                    "answer": "Absolutely! Your site is designed to be scalable. We can add new features based on your future needs."
                  },
                  {
                    "icon": "🔧",
                    "question": "How does the site maintenance process work after its creation?",
                    "answer": "We offer different maintenance formulas including security updates, regular backups, and technical support."
                  },
                  {
                    "icon": "💰",
                    "question": "What are your rates for additional services like maintenance and updates?",
                    "answer": "Our maintenance rates are adapted to your needs. We offer monthly or annual packages including different levels of service."
                  }
                ]
              }
            }
          },
          "faq": {
            "title": "General Questions",
            "subtitle": "Find answers to your questions: Everything you need to know about our services.",
            "support": "Our team remains available to answer all your questions and provide ongoing assistance for any modifications or potential issues.",
            "questions": [
              {
                "icon": "🔍",
                "question": "What types of websites do you offer and what are their differences?",
                "answer": "We offer three main types: showcase websites to present your business, web apps for advanced functionality, and e-commerce for online sales. Each solution is adapted to specific needs."
              },
              {
                "icon": "⚡",
                "question": "How does the site creation process work with your service?",
                "answer": "Our process involves several steps: initial consultation, personalized proposal, design, development, testing, and launch. You are involved at each step to ensure your satisfaction."
              },
              {
                "icon": "🎨",
                "question": "Do you offer customization or custom development services?",
                "answer": "Yes, we offer fully customizable solutions. Each project is unique and we tailor our services to your specific needs."
              },
              {
                "icon": "⏱️",
                "question": "What are the usual delivery times for site creation?",
                "answer": "Delivery times vary depending on complexity: 7 days for a basic showcase site, 30 days for a more complex site, and up to 90 days for a complex web application."
              },
              {
                "icon": "🛠️",
                "question": "How does the client support work after the site is delivered?",
                "answer": "Our team remains available to answer all your questions and provide ongoing assistance for any modifications or potential issues."
              },
              {
                "icon": "🔄",
                "question": "Can I update my site myself after its creation?",
                "answer": "Yes, we provide an intuitive content management system that allows you to easily update your site. Training is included with delivery."
              },
              {
                "icon": "🏢",
                "question": "Do you offer hosting services for the sites you create?",
                "answer": "Yes, we offer secure and optimized hosting solutions for your site. We manage the entire technical infrastructure for you."
              },
              {
                "icon": "➕",
                "question": "Is it possible to add new features to my site in the future?",
                "answer": "Absolutely! Your site is designed to be scalable. We can add new features based on your future needs."
              },
              {
                "icon": "🔧",
                "question": "How does the site maintenance process work after its creation?",
                "answer": "We offer different maintenance formulas including security updates, regular backups, and technical support."
              },
              {
                "icon": "💰",
                "question": "What are your rates for additional services like maintenance and updates?",
                "answer": "Our maintenance rates are adapted to your needs. We offer monthly or annual packages including different levels of service."
              }
            ]
          },
          "typeform": {
            "intro": {
              "title": "Afin de mieux comprendre vos besoins et de créer le site parfait et entièrement personnalisé pour vous, j'ai quelques questions à vous poser. 🚀"
            },
            "questions": [
              {
                "title": "D'abord, j'aimerais connaître votre prénom, s'il vous plaît !",
                "subtitle": "Cette question est requise*",
                "key": "firstName",
                "type": "text",
                "placeholder": "Votre prénom",
                "required": true
              },
              {
                "title": "Pourrions-nous connaître le nom de votre entreprise, s'il vous plaît ?",
                "titleWithName": "Salut ! {{firstName}}, Pourrions-nous connaître le nom de votre entreprise, s'il vous plaît ?",
                "subtitle": "Cette question est indispensable ✅",
                "key": "companyName",
                "type": "text",
                "placeholder": "Nom de l'entreprise",
                "required": true
              },
              {
                "title": "Avez-vous déjà un Site Internet ?",
                "key": "hasSite",
                "type": "radio",
                "options": [
                  { "value": "yes", "label": "Oui" },
                  { "value": "no", "label": "Non" }
                ]
              },
              {
                "title": "Quel est votre budget ?",
                "key": "budget",
                "type": "radio",
                "options": [
                  { "value": "-1000", "label": "Moins de 1000 €" },
                  { "value": "1000-2000", "label": "1000 - 2000 €" },
                  { "value": "2000-3000", "label": "2000 - 3000 €" },
                  { "value": "3000+", "label": "Plus de 3000 €" }
                ]
              },
              {
                "title": "Quelle est votre adresse e-mail de contact ? 📧",
                "subtitle": "Cette question est requise*",
                "key": "email",
                "type": "email",
                "placeholder": "votre@email.com",
                "required": true
              },
              {
                "title": "À propos de votre site web idéal, pourriez-vous nous en parler en quelques phrases ?",
                "subtitle": "(One page, E-commerce, Full section, site vitrine, marketplace...) Cette question est cruciale ✅",
                "key": "projectDescription",
                "type": "text",
                "placeholder": "Décrivez votre projet idéal...",
                "required": true
              },
              {
                "title": "Pouvez-vous me renseigner votre numéro ?",
                "subtitle": "Cette question est requise*",
                "key": "phone",
                "type": "tel",
                "placeholder": "06 XX XX XX XX",
                "required": true
              }
            ],
            "final": {
              "title": "Merci d'avoir rempli ce formulaire",
              "subtitle": "Je vais vous contacter sous 24H"
            },
            "buttons": {
              "cancel": "Annuler",
              "start": "Commencer",
              "next": "Suivant",
              "finish": "Terminer"
            },
            "progress": "Question {{current}} sur {{total}}"
          },
          "footer": {
            "company": {
              "name": "noPress",
              "description": "noPress est une solution développée par Shakepoint.ltd, un groupe d'intelligence humaine digitale fournissant les meilleures solutions",
              "number": "Numéro d'entreprise : 16216625"
            },
            "legal": {
              "title": "Informations légales",
              "privacy": "Politique de confidentialité",
              "terms": "Conditions d'utilisation"
            },
            "contact": {
              "title": "Contact"
            }
          },
          nav: {
            home: "Accueil",
            solutions: "Solutions",
            collab: "Collaborations",
            contact: "Contact"
          }
        }
      },
      en: {
        translation: {
          "title": "OUR WORK",
          "subtitle": "Need a custom platform to manage your content?",
          "cta": "Let's talk!",
          "discover": "Discover project",
          "home": {
            "hero": {
              "title": "Website, web app\nor mobile app?",
              "subtitle": "We've got you covered.",
              "cta": {
                "website": "I want a website",
                "meeting": "Book a meeting"
              }
            },
            "calendar": {
              "title": "Why pay Calendly monthly?",
              "description": "We can integrate custom solutions tailored to your specific needs, without recurring monthly fees.",
              "benefits": {
                "integration": "Custom integration",
                "noSubscription": "No monthly subscription",
                "support": "Support included"
              },
              "booking": "Book an appointment",
              "months": {
                "0": "January",
                "1": "February",
                "2": "March",
                "3": "April",
                "4": "May",
                "5": "June",
                "6": "July",
                "7": "August",
                "8": "September",
                "9": "October",
                "10": "November",
                "11": "December"
              },
              "days": {
                "0": "Sun",
                "1": "Mon",
                "2": "Tue",
                "3": "Wed",
                "4": "Thu",
                "5": "Fri",
                "6": "Sat"
              },
              "chooseDateTime": "Choose a date and time",
              "availableHours": "Available times for",
              "confirmAppointment": "Confirm appointment",
              "contactForm": {
                "title": "Your contact information",
                "name": "Name",
                "phone": "Phone",
                "email": "Email",
                "cancel": "Cancel",
                "confirm": "Confirm"
              },
              "success": {
                "title": "Appointment confirmed!",
                "message": "We've sent you a confirmation email."
              }
            }
          },
          "typewriter": {
            "lines": [
              "An agency for professionals.",
              "Book your appointment today!",
              "Your website delivered in 5 days!"
            ]
          },
          "offers": {
            "title": "OUR OFFERS",
            "subtitle": "Quality offers designed to adapt\nto your business and budget",
            "items": [
              {
                "title": "Website",
                "description": "Boost your business with your turnkey website.",
                "link": "/solutions#site-web"
              },
              {
                "title": "Google Ads",
                "description": "Generate more leads by becoming unmissable online.",
                "link": "/solutions#google-ads"
              },
              {
                "title": "Mobile App",
                "description": "Transform your online presence into a must-see showcase to generate more contacts",
                "link": "/solutions#app-mobile"
              }
            ],
            "discover": "Discover",
            "seeMore": "See our services"
          },
          "terminal": {
            "slogans": [
              "Your vision, our code",
              "From design to deployment",
              "Websites that convert",
              "Performance and elegance",
              "Coded with passion"
            ],
            "expertise": {
              "title": "Expertise:",
              "items": [
                "Cloud Architecture ☁️",
                "RESTful API 🚀",
                "Progressive Web Apps ⚛️",
                "SEO Optimization 🔍",
                "Security & Performance ⚡️",
                "Mobile First Design 📱",
                "Scalable Databases 🗄️",
                "Continuous Integration 🔄"
              ]
            }
          },
          "solutions": {
            "title": "Our Solutions",
            "hero": {
              "title": "A showcase, an e-commerce site, an application? We have everything you need.",
              "subtitle": "Present your challenges, we have the solutions to make you stand out on the web!",
              "contact": "Contact us",
              "cta": {
                "website": "Je veux un site"
              }
            },
            "cards": [
              {
                "type": "Site",
                "title": "Showcase",
                "subtitle": "Your online presence",
                "features": [
                  "Professional presentation",
                  "Effective promotion",
                  "Simplified contact"
                ],
                "packs": [
                  {
                    "name": "Basic Pack",
                    "description": "A simple showcase site with 3 pages (Home, Services, Contact)",
                    "delivery": "Delivery in 7 days"
                  },
                  {
                    "name": "Pro Pack",
                    "description": "Showcase site with advanced features (Blog, contact form, etc.)",
                    "delivery": "Delivery in 30 days"
                  }
                ]
              },
              {
                "type": "Site",
                "title": "Web App",
                "subtitle": "A robust application designed to meet specific needs",
                "features": [
                  "Custom application",
                  "Dashboard",
                  "Data management"
                ],
                "packs": [
                  {
                    "name": "Standard Pack",
                    "description": "Simple application with authentication and CRUD management",
                    "delivery": "Delivery in 60 days"
                  },
                  {
                    "name": "Advanced Pack",
                    "description": "Complex application with dashboard, API integration and analytics",
                    "delivery": "Delivery in 90 days"
                  }
                ]
              },
              {
                "type": "Site",
                "title": "E-Commerce",
                "subtitle": "Your virtual store",
                "features": [
                  "Wide range of products",
                  "Simplified ordering",
                  "Secure purchases"
                ],
                "packs": [
                  {
                    "name": "Startup Pack",
                    "description": "Simple store with online payment",
                    "delivery": "Delivery in 30 days"
                  },
                  {
                    "name": "Business Pack",
                    "description": "Complete store with stock management and multi-currency",
                    "delivery": "Delivery in 60 days"
                  }
                ]
              },
              {
                "type": "App",
                "title": "Mobile App",
                "subtitle": "Create a mobile user experience",
                "features": [
                  "Native design",
                  "Optimal performance",
                  "Fluid experience"
                ],
                "packs": [
                  {
                    "name": "Startup Pack",
                    "description": "Hybrid mobile application with basic features",
                    "delivery": "Delivery in 90 days"
                  },
                  {
                    "name": "Premium Pack",
                    "description": "Native application with complex integrations (payment, notifications, etc.)",
                    "delivery": "Delivery in 180 days"
                  }
                ]
              }
            ],
            "getQuote": "Get a quote"
          },
          "collab": {
            "projects": {
              "lucile": {
                "title": "SPA Development with React, Laravel, Inertia and MySQL",
                "client": "Lucile Pigeot",
                "description": "This project was developed for Lucile Pigeot, aiming to simplify the management and publication of scientific content by integrating an external API (HAL Science). The interface provides a smooth and modern experience through a Single Page Application (SPA) approach and centralized administration via a private dashboard.",
                "benefits": {
                  "title": "Benefits for Lucile Pigeot",
                  "items": [
                    { "title": "Time saving", "description": "automated article management and publication" },
                    { "title": "Full control", "description": "a custom CMS tailored to her needs" },
                    { "title": "Accessibility", "description": "an intuitive interface accessible on all devices" },
                    { "title": "Reliability", "description": "ensured security and performance" }
                  ]
                },
                "features": {
                  "title": "Key Features",
                  "sections": [
                    {
                      "title": "Private Admin Dashboard",
                      "items": [
                        "Secure interface for content management without technical skills.",
                        "Login system with secure authentication (JWT, Laravel Sanctum).",
                        "User and permission management to control access to different sections."
                      ]
                    },
                    {
                      "title": "Automatic Article Integration via HAL Science API",
                      "items": [
                        "HAL API connection to automatically retrieve published scientific articles.",
                        "Ability to modify, delete or enrich articles directly from the interface.",
                        "Automatic update system to synchronize new articles."
                      ]
                    }
                  ]
                }
              },
              "kitty": {
                "title": "Kitty Mobile App - Private Streaming",
                "description": "Mobile application developed with React Native and Supabase, allowing content creators to manage their community through private streaming and exclusive content. The app integrates advanced features for live streaming, subscription management, and content protection.",
                "benefits": {
                  "title": "Benefits for Creators",
                  "items": [
                    { "title": "Direct monetization", "description": "subscription and premium content management" },
                    { "title": "Community engagement", "description": "real-time interactions with subscribers" },
                    { "title": "Maximum security", "description": "private content protection" },
                    { "title": "Advanced analytics", "description": "real-time performance tracking" }
                  ]
                },
                "features": {
                  "title": "Technical Features",
                  "sections": [
                    {
                      "title": "Real-Time Infrastructure",
                      "items": [
                        "Supabase integration for real-time data management",
                        "Streaming system optimized for low latency",
                        "Websocket management for live interactions"
                      ]
                    },
                    {
                      "title": "Security and Authentication",
                      "items": [
                        "Secure authentication via Supabase Auth",
                        "Private content encryption",
                        "Granular access rights management"
                      ]
                    },
                    {
                      "title": "Mobile Performance",
                      "items": [
                        "React Native application for native performance",
                        "Data consumption optimization",
                        "Smart content caching"
                      ]
                    }
                  ]
                }
              },
              "images": {
                "lucile": {
                  "alt": [
                    "Lucile Pigeot project dashboard",
                    "Article management interface",
                    "Website homepage"
                  ]
                },
                "kitty": {
                  "alt": [
                    "Kitty app main interface",
                    "Kitty streaming dashboard",
                    "Kitty streaming dashboard",
                    "Kitty streaming dashboard"
                  ]
                }
              },
              "common": {
                "discover": "Discover project",
                "back": "Back",
                "technicalFeatures": "Technical Features"
              },
              "faq": {
                "title": "General Questions",
                "subtitle": "Find answers to your questions: Everything you need to know about our services.",
                "support": "Our team remains available to answer all your questions and provide ongoing assistance for any modifications or potential issues.",
                "questions": [
                  {
                    "icon": "🔍",
                    "question": "What types of websites do you offer and what are their differences?",
                    "answer": "We offer three main types: showcase websites to present your business, web apps for advanced functionality, and e-commerce for online sales. Each solution is adapted to specific needs."
                  },
                  {
                    "icon": "⚡",
                    "question": "How does the site creation process work with your service?",
                    "answer": "Our process involves several steps: initial consultation, personalized proposal, design, development, testing, and launch. You are involved at each step to ensure your satisfaction."
                  },
                  {
                    "icon": "🎨",
                    "question": "Do you offer customization or custom development services?",
                    "answer": "Yes, we offer fully customizable solutions. Each project is unique and we tailor our services to your specific needs."
                  },
                  {
                    "icon": "⏱️",
                    "question": "What are the usual delivery times for site creation?",
                    "answer": "Delivery times vary depending on complexity: 7 days for a basic showcase site, 30 days for a more complex site, and up to 90 days for a complex web application."
                  },
                  {
                    "icon": "🛠️",
                    "question": "How does the client support work after the site is delivered?",
                    "answer": "Our team remains available to answer all your questions and provide ongoing assistance for any modifications or potential issues."
                  },
                  {
                    "icon": "🔄",
                    "question": "Can I update my site myself after its creation?",
                    "answer": "Yes, we provide an intuitive content management system that allows you to easily update your site. Training is included with delivery."
                  },
                  {
                    "icon": "🏢",
                    "question": "Do you offer hosting services for the sites you create?",
                    "answer": "Yes, we offer secure and optimized hosting solutions for your site. We manage the entire technical infrastructure for you."
                  },
                  {
                    "icon": "➕",
                    "question": "Is it possible to add new features to my site in the future?",
                    "answer": "Absolutely! Your site is designed to be scalable. We can add new features based on your future needs."
                  },
                  {
                    "icon": "🔧",
                    "question": "How does the site maintenance process work after its creation?",
                    "answer": "We offer different maintenance formulas including security updates, regular backups, and technical support."
                  },
                  {
                    "icon": "💰",
                    "question": "What are your rates for additional services like maintenance and updates?",
                    "answer": "Our maintenance rates are adapted to your needs. We offer monthly or annual packages including different levels of service."
                  }
                ]
              }
            }
          },
          "faq": {
            "title": "General Questions",
            "subtitle": "Find answers to your questions: Everything you need to know about our services.",
            "support": "Our team remains available to answer all your questions and provide ongoing assistance for any modifications or potential issues.",
            "questions": [
              {
                "icon": "🔍",
                "question": "What types of websites do you offer and what are their differences?",
                "answer": "We offer three main types: showcase websites to present your business, web apps for advanced functionality, and e-commerce for online sales. Each solution is adapted to specific needs."
              },
              {
                "icon": "⚡",
                "question": "How does the site creation process work with your service?",
                "answer": "Our process involves several steps: initial consultation, personalized proposal, design, development, testing, and launch. You are involved at each step to ensure your satisfaction."
              },
              {
                "icon": "🎨",
                "question": "Do you offer customization or custom development services?",
                "answer": "Yes, we offer fully customizable solutions. Each project is unique and we tailor our services to your specific needs."
              },
              {
                "icon": "⏱️",
                "question": "What are the usual delivery times for site creation?",
                "answer": "Delivery times vary depending on complexity: 7 days for a basic showcase site, 30 days for a more complex site, and up to 90 days for a complex web application."
              },
              {
                "icon": "🛠️",
                "question": "How does the client support work after the site is delivered?",
                "answer": "Our team remains available to answer all your questions and provide ongoing assistance for any modifications or potential issues."
              },
              {
                "icon": "🔄",
                "question": "Can I update my site myself after its creation?",
                "answer": "Yes, we provide an intuitive content management system that allows you to easily update your site. Training is included with delivery."
              },
              {
                "icon": "🏢",
                "question": "Do you offer hosting services for the sites you create?",
                "answer": "Yes, we offer secure and optimized hosting solutions for your site. We manage the entire technical infrastructure for you."
              },
              {
                "icon": "➕",
                "question": "Is it possible to add new features to my site in the future?",
                "answer": "Absolutely! Your site is designed to be scalable. We can add new features based on your future needs."
              },
              {
                "icon": "🔧",
                "question": "How does the site maintenance process work after its creation?",
                "answer": "We offer different maintenance formulas including security updates, regular backups, and technical support."
              },
              {
                "icon": "💰",
                "question": "What are your rates for additional services like maintenance and updates?",
                "answer": "Our maintenance rates are adapted to your needs. We offer monthly or annual packages including different levels of service."
              }
            ]
          },
          "typeform": {
            "intro": {
              "title": "To better understand your needs and create the perfect, fully customized site for you, I have a few questions to ask you. 🚀"
            },
            "questions": [
              {
                "title": "First, I'd like to know your first name, please!",
                "subtitle": "This question is required*",
                "key": "firstName",
                "type": "text",
                "placeholder": "Your first name",
                "required": true
              },
              {
                "title": "Could you tell us your company name, please?",
                "titleWithName": "Hi {{firstName}}! Could you tell us your company name, please?",
                "subtitle": "This question is essential ✅",
                "key": "companyName",
                "type": "text",
                "placeholder": "Company name",
                "required": true
              },
              {
                "title": "Do you already have a website?",
                "key": "hasSite",
                "type": "radio",
                "options": [
                  { "value": "yes", "label": "Yes" },
                  { "value": "no", "label": "No" }
                ]
              },
              {
                "title": "What is your budget?",
                "key": "budget",
                "type": "radio",
                "options": [
                  { "value": "-1000", "label": "Less than €1000" },
                  { "value": "1000-2000", "label": "€1000 - €2000" },
                  { "value": "2000-3000", "label": "€2000 - €3000" },
                  { "value": "3000+", "label": "More than €3000" }
                ]
              },
              {
                "title": "What is your contact email address? 📧",
                "subtitle": "This question is required*",
                "key": "email",
                "type": "email",
                "placeholder": "your@email.com",
                "required": true
              },
              {
                "title": "About your ideal website, could you tell us about it in a few sentences?",
                "subtitle": "(One page, E-commerce, Full section, showcase site, marketplace...) This question is crucial ✅",
                "key": "projectDescription",
                "type": "text",
                "placeholder": "Describe your ideal project...",
                "required": true
              },
              {
                "title": "Could you provide your phone number?",
                "subtitle": "This question is required*",
                "key": "phone",
                "type": "tel",
                "placeholder": "06 XX XX XX XX",
                "required": true
              }
            ],
            "final": {
              "title": "Thank you for completing this form",
              "subtitle": "I will contact you within 24 hours"
            },
            "buttons": {
              "cancel": "Cancel",
              "start": "Start",
              "next": "Next",
              "finish": "Finish"
            },
            "progress": "Question {{current}} of {{total}}"
          },
          "footer": {
            "company": {
              "name": "noPress",
              "description": "noPress is a solution developped by Shakepoint.ltd a group of human intelligence providing best solutions",
              "number": "Company number: 16216625"
            },
            "legal": {
              "title": "Legal",
              "privacy": "Privacy Policy",
              "terms": "Terms of Service"
            },
            "contact": {
              "title": "Contact"
            }
          },
          nav: {
            home: "Home",
            solutions: "Solutions",
            collab: "Collaborations",
            contact: "Contact"
          }
        }
      }
    },
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n; 