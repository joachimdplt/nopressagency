import { motion } from 'framer-motion';
import TechLogo from '@/Components/TechLogo';

const technologies = [
    'React',
    'Laravel',
    'MySQL',
    'MongoDB',
    'Supabase',
    'Google Cloud'
];

const TechScroll = () => {
    // Dupliquer les technologies pour un défilement continu
    const duplicatedTech = [...technologies, ...technologies];

    return (
        <div className="relative w-full overflow-hidden bg-white py-10">
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-transparent to-white z-10" />
            
            <motion.div
                animate={{
                    x: ['0%', '-50%']
                }}
                transition={{
                    x: {
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear"
                    }
                }}
                className="flex gap-24 px-12"
            >
                {duplicatedTech.map((tech, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 scale-75"
                    >
                        <TechLogo name={tech} />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechScroll; 