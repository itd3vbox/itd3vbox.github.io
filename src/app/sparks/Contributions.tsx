'use client';

import React from "react"
import {
    XMarkIcon,
    CreditCardIcon,
} from '@heroicons/react/24/outline';


interface ContributionsProps
{
    
}


interface ContributionsState
{
    
}

export default class Contributions extends React.Component<any, ContributionsState>
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
            <div className="c-contributions">
                <div className="text">
                    <h2>Contributions</h2>
                    <p>Contribute to Sparks projects or create your own version. Keep apps lightweight for mobile, respect API rules, and innovate safely within the ecosystem.</p>
                </div>
            </div>
        )
    }
}