import { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

export default function How() {
    const [open, setOpen] = useState(false);

    return (
        <div className="how">
            {/* Bouton principal pour ouvrir le détail */}
            <button 
                type="button" 
                className="btn-show" 
                onClick={() => setOpen(true)}
            >
                The Path
            </button>

            {/* Texte détaillé, affiché seulement si open=true */}
            {open && (
                <div className="text">
                    {/* Bouton pour fermer */}
                    <button 
                        type="button" 
                        className="btn-close" 
                        onClick={() => setOpen(false)}
                    >
                        <XMarkIcon className="icon-close" />
                    </button>

                    <p>
                        With AI and my Spark projects, I can create all sorts of tools — educational apps, games, experiments — to enjoy every moment as if I had eternity.  
                        I also try to pursue the impossible, even when I don’t know where to start. Every ambitious idea requires the right tools, and the journey itself becomes a part of the adventure.
                    </p>

                    <p>
                        One dream: a crystal-based computer, straight out of a science-fiction story.  
                        Compact like a desktop, yet powerful enough to rival multiple supercomputers worldwide.  
                        To make this possible, new technologies would be needed — conductive crystals for memory and processors, flexible metallic connections, circuits beyond conventional materials.
                    </p>

                    <p>
                        To reach such goals, I need to build tools first: virtual labs, simulation environments, and learning platforms.  
                        Along the way, I can create apps that teach me mathematics, physics, chemistry, and science, or design games just for fun.  
                        The point is to experiment, create, learn, and enjoy every step — even from a simple garage — until, one day, the impossible becomes real.
                    </p>
                </div>
            )}
        </div>
    );
}