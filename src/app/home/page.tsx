'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
    InformationCircleIcon,
    PlayIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';

import { EyeIcon } from '@heroicons/react/16/solid';
import How from './How';

import './sass/main.sass';
import InnerWorld from './InnerWorld';

export default function Page() 
{

    // Disposition circulaire des boutons
    const frameRef = useRef<HTMLDivElement | null>(null);

    // Positionner les boutons en cercle
    useEffect(() => {
        if (!frameRef.current) return;
        const buttons: NodeListOf<HTMLButtonElement> = frameRef.current.querySelectorAll('.project');
        const radius = 120;
        const total = buttons.length;

        buttons.forEach((btn, i) => {
            const angle = (i / total) * 2 * Math.PI;
            const x = radius * Math.cos(angle);
            const y = radius * Math.sin(angle);

            btn.style.position = 'absolute';
            btn.style.left = `${150 + x - 40}px`; // 150 = moitié frame 300px, 40 = moitié bouton 80px
            btn.style.top = `${150 + y - 40}px`;
        });
    }, []);

    // Toggle info pour afficher / cacher le texte complet
    const toggleInfo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const fullDesc = e.currentTarget.nextElementSibling as HTMLDivElement | null;
        if (fullDesc) {
            fullDesc.style.display = fullDesc.style.display === 'none' ? 'block' : 'none';
        }
    };

    return (
        <div id="home">
           <header className="h-zero">
                <div className="hz-wrapper">
                    <div className="hz-left">
                        <img src="/pattern.png" alt="Crystal Computer" />
                    </div>
                    <div className="hz-right">
                        <div className="text">
                            <h1>ITD3VBOX</h1>
                            <h2>Infinite Tinkering · 3 Dimensions · Virtual Box</h2>
                            <p>
                                Build the impossible. <br/>
                                Dream like a child. <br/>
                                Invent like an engineer. <br/>
                            </p>
                        </div>
                    </div>
                </div>
           </header>
           <section className="h-projects">
                <div className="hp-wrapper">
                    <h2>Spark Ecosystem — Build Manage Accelerate</h2>
                    <p>A pocket-sized development ecosystem powered by creativity and AI.</p>
  
                    <div className="hp-projects">

                        <div className="p-projects">
                            {/* <article className="project">
                                <div className="frame">
                                    
                                </div>
                                <div className="core">
                                    <a href="https://github.com/itd3vbox/project-manager-react" target="_blank" rel="noopener noreferrer">
                                        <EyeIcon />
                                    </a>
                                    <h3>Virtual Library</h3>
                                    <p className="description-short">
                                        A project to create, organize, and share documentation and books, locally or remotely.
                                    </p>
                                </div>
                            </article> */}

                            <article className="project">
                                <div className="frame">
                                    
                                </div>
                                <div className="core">
                                    <a href="https://github.com/itd3vbox/project-manager-react" target="_blank" rel="noopener noreferrer">
                                        <EyeIcon />
                                    </a>
                                    <h3>Spark Code</h3>
                                    <p className="description-short">
                                        A mobile-first code editor designed for fast development, anywhere.
                                    </p>
                                </div>
                            </article>

                            <article className="project">
                                <div className="frame">
                                    
                                </div>
                                <div className="core">
                                    <a href="https://github.com/itd3vbox/spark-management" target="_blank" rel="noopener noreferrer">
                                        <EyeIcon />
                                    </a>
                                    <h3>Spark Management</h3>
                                    <p className="description-short">
                                        A project to assist in the development of a technological project.
                                    </p>
                                </div>
                            </article>

                        </div>
                        

                        <div className="p-core">
                            <div className="text">
                                <p>
                                    The Spark Ecosystem is built around a simple idea: 
                                    enabling fast, flexible and comfortable development, anywhere.
                                </p>

                                <p>
                                    By combining <strong>Spark Code</strong>, a mobile-first code editor, 
                                    with <strong>Spark Management</strong>, a project orchestration system, 
                                    and connecting to a local or remote server through SSH, 
                                    a smartphone becomes a fully functional development workstation.
                                </p>

                                <p>
                                    Whether using a laptop, a desktop computer, or a remote server, 
                                    projects can be built, tested and deployed directly from a mobile device, 
                                    transforming mobility into a true creative advantage.
                                </p>

                                <p>
                                    Supported by modern AI tools such as ChatGPT, 
                                    the development workflow becomes faster, clearer and more efficient — 
                                    from problem-solving and learning to coding and debugging.
                                </p>

                                <p>
                                    The result is a lightweight, portable and powerful ecosystem, 
                                    designed to build, manage and accelerate technological projects 
                                    from anywhere, in any position, at any moment.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="hp-more">
                        <Link href="/projects" className='link-more'>See more</Link>
                        <p>Discover other projects.</p>
                    </div>
                </div>
           </section>
            <section className="h-dream-big">
                <div className="hdb-wrapper">
                    <h2>Dream Big - Make the Impossible Possible</h2>
                    <p>
                        Exploring, creating, and dreaming endlessly — every project, big or small, moves me closer to the impossible.
                    </p>
                    <div className="goals">
    
                        <div className="block-possible">
                            <h3>Possible Projects</h3>
                            <div className="frame"  ref={frameRef}>
                                <button type="button" className='project'>
                                    <SparklesIcon />
                                </button>
                                <button type="button" className='project'>
                                    <SparklesIcon />
                                </button>
                                <button type="button" className='project'>
                                    <SparklesIcon />
                                </button>
                            </div>
                            <p className="description-short">
                                Build apps, games, and learning tools — consolidate knowledge and enjoy creative experiments from a smartphone or laptop.
                            </p>
                            <button className="btn-info" onClick={toggleInfo}>
                                <InformationCircleIcon />
                            </button>
                            <div className="description-full" style={{display:"none"}}>
                                <p>
                                Using Virtual Library, I explore my inner world and collect ideas.  
                                I also develop educational apps, Godot Engine games, and small tools to experiment and have fun, all accessible from a smartphone or laptop.
                                </p>
                            </div>
                        </div>

                        <div className="block-impossible">
                            <h3>Impossible Projects</h3>
                            <img src="/crystal-computer.png" alt="Crystal Computer" />
                            <p className="description-short">
                                A vision of a crystal-based computer, compact yet as powerful as multiple supercomputers.
                            </p>
                            <button className="btn-info" type='button' onClick={toggleInfo}>
                                <InformationCircleIcon />
                            </button>
                            <div className="description-full" style={{display:"none"}}>
                                <p>
                                One dream: a crystal-based computer, straight out of science fiction.  
                                Conductive crystals for RAM and CPU, flexible metallic connections, circuits beyond conventional materials.  
                                Every ambitious idea requires building virtual labs, simulation tools, and learning platforms before it can become real.
                                </p>
                            </div>
                        </div>

                    </div>
                    
                    <How/>
                </div>
            </section>
            <InnerWorld />
        </div>
    );
}