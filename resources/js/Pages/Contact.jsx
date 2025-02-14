import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';

export default function Contact() {
    return (
        <>
            <Head title="Contact" />
            <div className="py-12">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-8">
                        Contact
                    </h1>
                    {/* Contenu de la page */}
                </div>
            </div>
        </>
    );
}

Contact.layout = page => <AppLayout children={page} /> 