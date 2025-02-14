import Navbar from '@/Components/Navbar';

export default function AppLayout({ children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <main className="pt-16">
                {children}
            </main>
        </div>
    );
} 