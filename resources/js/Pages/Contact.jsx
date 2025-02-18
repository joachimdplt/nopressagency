import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import Rectangle from '@/Components/Rectangle';

export default function Contact() {
    return (
        <div className="min-h-screen p-8 flex items-center justify-center">
            <Rectangle />
        </div>
    );
}

Contact.layout = page => <AppLayout children={page} /> 