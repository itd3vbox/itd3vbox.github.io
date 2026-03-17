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
            </div>
        )
    }
}