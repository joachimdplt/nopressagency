import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="text-xl font-bold text-blue-600">
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex gap-8">
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/solutions">Solutions</NavLink>
                        <NavLink href="/collab">They loved us</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Composant NavLink avec animation
const NavLink = ({ href, children }) => {
    return (
        <Link
            href={href}
            className="relative text-gray-600 hover:text-blue-600 transition-colors font-medium"
        >
            <span>{children}</span>
            <motion.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.2 }}
            />
        </Link>
    );
};

export default Navbar; 