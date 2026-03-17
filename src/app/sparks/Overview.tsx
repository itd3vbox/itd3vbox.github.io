'use client';

import React from "react"
import {
    XMarkIcon,
    CreditCardIcon,
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

                <div className="projects"></div>

            </div>
        )
    }
}