'use client';

import React from "react"
import {
    XMarkIcon,
    CreditCardIcon,
} from '@heroicons/react/24/outline';


interface VirtualEntreprisesProps
{
    
}


interface VirtualEntreprisesState
{
    
}

export default class VirtualEntreprises extends React.Component<any, VirtualEntreprisesState>
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
            <div className="c-virtual-entreprises">
                <div className="text">
                    <h2>Virtual Enterprises</h2>
                    <p>Connect Sparks into mini virtual enterprises. Form teams, experiment, and innovate together, anywhere, with just a smartphone and AI.</p>
                </div>
                <div className="procedure">
                    <h3>How to start your Virtual Enterprise</h3>
                    <ol>
                        <li><strong>Choose a domain:</strong> Pick a field you are passionate about and want to explore while enjoying the process.</li>
                        <li><strong>Create a web presence:</strong> Use a website, GitHub Page, or other platform to post articles and share your journey with a custom audience.</li>
                        <li>
                            <strong>Build your team:</strong> Connect with others via social networks to collaborate on core tech projects.  
                            A strong team usually includes a designer and developer, plus other contributors depending on the field (engineer, chemist, researcher, etc.).  
                            <br/>
                            Or work solo using AI assistants and agents to learn, experiment, and enjoy the process. Share your results to inspire others and perhaps create opportunities for future collaboration.
                        </li>
                        <li><strong>Plan your time:</strong> Commit 4+ hours per week, or 1–2 hours per day for 4–5 days. Use AI as an assistant, or work solo for pure exploration and fun.</li>
                        <li><strong>Assemble your Sparks:</strong> Use the 5 core Sparks projects as building blocks. Experiment, solve problems, share ideas, and collaborate with other.</li>
                        <li><strong>Connect with other Virtual Enterprises:</strong> Find projects with common goals or interests. Explore partnerships, collaborations, or even fusion when paths align.</li>
                        <li><strong>Find your audience:</strong> Engage people who share your vision. Over time, real enterprises may become interested in your work.</li>
                    </ol>
                    <p>One possible path to build a Virtual Enterprise: small, connected, experimental, with real impact and growth potential.</p>
                </div>
            </div>
        )
    }
}