import { useState } from 'react';
import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    LinkIcon,
    InformationCircleIcon,
} from '@heroicons/react/24/outline';

export default function InnerWorld()
{
    const [open, setOpen] = useState(false);

    const toggleText = () => {
        setOpen(!open);
    };

    return (
        <section className="h-inner-world">
            <div className="hiw-wrapper">
                <h2>Inner World – Explore & Create</h2>
                <p>
                    Taking a moment to reflect, meditate, and consolidate ideas allows me to build better projects, enjoy the process, and expand my creative universe. 
                </p>
                
                <div className="frame">
                    <img src="/meditative.png" alt="" />
                    <button
                        className="btn-info"
                        type='button'
                        onClick={toggleText}
                    >
                        <InformationCircleIcon />
                    </button>
                </div>
                

                <div className="text" style={{ display: open ? "block" : "none" }}>
                    {/* <p>
                        I have eternity, and within the infinite exists my own infinity.  
                        With instant access to create perfectly,  
                        I choose to limit myself temporarily — to explore, experiment, and build certain things.  
                        My goal is to fully enjoy this eternity.  
                        Preparing projects in this material world is, in a way, preparing my inner world.  
                        From these foundations, I can always start again, explore new paths, and create endlessly.
                    </p>
                    <p>
                        Meditation helps consolidate and connect my inner world, to rise above chaos and find solutions within it — this is essential.  
                        But meditation doesn’t mean projecting my consciousness outward.  
                        Instead, I retreat into emptiness, visualize internally, and project my dimension into another plane.  
                        My awareness stays within my body, while a larger consciousness resonates elsewhere in the infinite — like a form of quantum teleportation, without any rays, just a point inside connected to the fabric of the world, carrying positive and negative memory of the world.  
                        I filter, organize, and clear my inner chaos, creating clarity within.  
                        From this inner space, I build my Spark projects, shaping and expanding my inner world as a foundation for endless creation,  
                        and progressively bringing these ideas closer to what is possible in the material world.
                    </p>
                    <p>
                        Even if some projects don’t reach their ultimate goal — including the impossible ones —  
                        I can always revisit, refine, and expand them later.  
                        The most important part is to create at my own pace, with care and pleasure,  
                        enjoying every step of the journey.
                    </p>
                    <p>
                        And if it becomes possible to bring the impossible projects from my inner world into this material world,  
                        that would be the ultimate — discovering another realm without limits, purely for fun and exploration.
                    </p> */}
                    <p>
                        Meditation is the art of emptiness. By clearing the mind, ideas become clearer, and solutions arise naturally. Through observation and inner exploration, silence creates space for understanding. In this void, clarity is born — and even the impossible can become possible.
                        At the same time, the material world matters: dedicating focused hours — 2 to 4 hours per day, 10 to 20 hours per week — to work and creating digital products is essential for a developer or graphic designer.
                        Yet the rest of life should be fully enjoyed: spending time in nature, cooking, being with family, watching a movie, or simply living. Technology, especially AI, opens countless possibilities and eases many tasks, though many challenges still remain.
                        True balance lies at the intersection of creation, exploration, and enjoyment — where meaningful work and a fulfilling life meet.
                    </p>
                </div>
            </div>
        </section>
    )
}