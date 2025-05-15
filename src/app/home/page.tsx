import Link from 'next/link';
import {
    PlayIcon,
} from '@heroicons/react/24/outline';

import './sass/main.sass';
import { EyeIcon } from '@heroicons/react/16/solid';

export default function Page() 
{
    return (
        <div id="home">
           <header className="h-zero">
                <div className="hz-wrapper">
                    <div className="hz-left"></div>
                    <div className="hz-right">
                        <div className="text">
                            <h1>Welcome to ITD3VBOX, a technological development hub</h1>
                            <p>
                                Get ready to embark on an intergalactic journey of creativity and technology! 
                                ITD3VBOX is your space station where I develop exciting projects. 
                                From conception to realization, explore a universe of possibilities and discoveries in the field of development and technology.
                            </p>
                        </div>
                    </div>
                </div>
           </header>
           <section className="h-projects">
                <div className="hp-wrapper">
                    <h2>Latest Projects</h2>
                    <p>Here are the latest exciting projects.</p>
  
                    <div className="hp-projects">

                        <article className="project">
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
                        </article>

                        <article className="project">
                            <div className="frame">
                                
                            </div>
                            <div className="core">
                                <a href="https://github.com/itd3vbox/project-manager-react" target="_blank" rel="noopener noreferrer">
                                    <EyeIcon />
                                </a>
                                <h3>Project Manager</h3>
                                <p className="description-short">
                                    A project to assist in the development of a technological project.
                                </p>
                            </div>
                        </article>

                    </div>

                    <Link href="/projects" className="hp-more" >See more</Link>
                </div>
           </section>
        </div>
    );
}