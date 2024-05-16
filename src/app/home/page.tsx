import Link from 'next/link';
import {
    PlayIcon,
} from '@heroicons/react/24/outline';

import './sass/main.sass';

export default function Page() 
{
    return (
        <div id="home">
           <header className="h-zero">
                <div className="hz-wrapper">
                    <div className="hz-content">
                        <h1>Welcome to ITD3VBOX, a technological development hub</h1>
                        <p>
                            Get ready to embark on an intergalactic journey of creativity and technology! 
                            ITD3VBOX is your space station where I develop exciting projects. 
                            From conception to realization, explore a universe of possibilities and discoveries in the field of development and technology.
                        </p>
                    </div>
                </div>
           </header>
           <section className="h-projects">
                <div className="hp-wrapper">
                    <h2>Latest Projects</h2>
                    <p>Here are the latest exciting projects.</p>
  
                    <div className="hp-projects">

                        <article className="project">
                            <img src="" alt="" />
                            <div className="wrapper">
                                <a href="https://github.com/itd3vbox/algo-2D-3D" target="_blank" rel="noopener noreferrer">Voir</a>
                                <h3>Algo 2D</h3>
                                <p className="decription-short">
                                    Some 2D algorithms.
                                </p>
                            </div>
                        </article>

                        <article className="project">
                            <img src="" alt="" />
                            <div className="wrapper">
                                <a href="https://github.com/itd3vbox/project-manager-react" target="_blank" rel="noopener noreferrer">Voir</a>
                                <h3>Project Manager</h3>
                                <p className="description-short">
                                    A project to assist in the development of a technological project.
                                </p>
                            </div>
                        </article>

                        <article className="project">
                            <div className="img-frame">
                                <img src="" alt="" />
                            </div>
                            <div className="wrapper">
                                <a href="#" target="_blank" rel="noopener noreferrer">Voir</a>
                                <h3>Pong</h3>
                                <p className="description-short">
                                    The online Pong game!
                                </p>
                                <button type="button" className="btn-play">
                                    <PlayIcon/>
                                </button>
                            </div>
                        </article>


                    </div>

                    <Link href="/projects" className="hp-more" >See more</Link>
                </div>
           </section>
        </div>
    );
}