import { Head } from '@inertiajs/react';
import AppLayout from '@/Layouts/AppLayout';
import FadeWrapper from '@/Components/FadeWrapper';

export default function Collab() {
    return (
        <>
            <Head title="Collaboration" />
            
            {/* Page 1 - Blanc à gauche */}
            <section className="h-screen flex">
                <div className="w-1/2 bg-white">
                    <div className="container h-full flex items-center">
                    </div>
                </div>
                <div className="w-1/2 bg-gray-50">
                    <div className="container h-full flex items-center">
                    </div>
                </div>
            </section>

            {/* Page 2 - Blanc à droite */}
            <section className="h-screen flex">
                <div className="w-1/2 bg-gray-50">
                    <div className="container h-full flex items-center">
                    </div>
                </div>
                <div className="w-1/2 bg-white">
                    <div className="container h-full flex items-center">
                    </div>
                </div>
            </section>

            {/* Page 3 - Blanc à gauche */}
            <section className="h-screen flex">
                <div className="w-1/2 bg-white">
                    <div className="container h-full flex items-center">
                    </div>
                </div>
                <div className="w-1/2 bg-gray-50">
                    <div className="container h-full flex items-center">
                    </div>
                </div>
            </section>
        </>
    );
}

Collab.layout = page => <AppLayout children={page} /> 