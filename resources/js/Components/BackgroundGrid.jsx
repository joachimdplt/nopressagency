import Rectangle from '@/Components/Rectangle';

export default function BackgroundGrid() {
    const blocks = [];
    const rows = 12;
    const cols = 24;
    
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            blocks.push({
                id: blocks.length,
                x: col * 4.2,
                y: row * 8.5
            });
        }
    }

    // Fonction pour vérifier si un bloc est dans la zone de texte
    const isInTextZone = (x, y) => {
        return (
            x >= 20 && 
            x <= 80 && 
            y >= 15 && 
            y <= 65
        );
    };

    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="relative w-full h-full">
                {blocks.map((block) => {
                    // Zone de texte élargie
                    if (isInTextZone(block.x, block.y)) {
                        return null;
                    }

                    return (
                        <div
                            key={block.id}
                            className="absolute cursor-pointer"
                            style={{
                                left: `${block.x}%`,
                                top: `${block.y}%`,
                                transform: 'translate(-50%, -50%)',
                                zIndex: 1,
                                pointerEvents: 'auto',
                                touchAction: 'auto'
                            }}
                        >
                            <Rectangle />
                        </div>
                    );
                })}
            </div>
        </div>
    );
} 