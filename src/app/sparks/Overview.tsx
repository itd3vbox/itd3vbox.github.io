'use client';

import React from "react"
import {
    XMarkIcon,
    CreditCardIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';


interface OverviewProps
{
    
}


interface OverviewState
{
    
}

export default class Overview extends React.Component<any, OverviewState>
{

    constructor(props: any)
    {
        super(props)
        this.state = {

        }
    }

    render()
    {
        return (
            <div className="c-overview">
            
                <div className="text">
                    <h2>Overview</h2>
                    <p>Only 5 Sparks projects. Modular, AI-assisted, designed to create, learn, and innovate anywhere, even from a smartphone.</p>
                </div>

                <div className="projects">

                    <div className="project">
                        <div className="icon">
                            <SparklesIcon />
                        </div>
                        <div className="name">Spark Code</div>
                        <div className="description-short">Portable AI-powered code editor to build and experiment anywhere.</div>
                        <a href="/projects/spark-code" className="btn-more">Explore</a>
                    </div>

                    <div className="project">
                        <div className="icon">
                            <SparklesIcon />
                        </div>
                        <div className="name">Spark Management</div>
                        <div className="description-short">Lightweight project management for small teams, enhanced with AI.</div>
                        <a href="/projects/spark-management" className="btn-more">Explore</a>
                    </div>

                    <div className="project">
                        <div className="icon">
                            <SparklesIcon />
                        </div>
                        <div className="name">Virtual School</div>
                        <div className="description-short">Learn, train, and collaborate with AI-driven education tools.</div>
                        <a href="/projects/virtual-school" className="btn-more">Explore</a>
                    </div>

                    <div className="project">
                        <div className="icon">
                            <SparklesIcon />
                        </div>
                        <div className="name">Virtual Library</div>
                        <div className="description-short">Track, organize, and explore books and knowledge in one place.</div>
                        <a href="/projects/virtual-library" className="btn-more">Explore</a>
                    </div>

                    <div className="project">
                        <div className="icon">
                            <SparklesIcon />
                        </div>
                        <div className="name">Calculator</div>
                        <div className="description-short">Interactive 2D/3D simulation tool for science, models, and experiments.</div>
                        <a href="/projects/calculator" className="btn-more">Explore</a>
                    </div>

                </div>

                <div className="text">
                    <p>5 projects. Infinite paths. Build yours in minutes. Then enjoy the real world and the present moment.</p>
                </div>

            </div>
        )
    }
}