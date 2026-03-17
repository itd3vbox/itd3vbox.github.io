'use client';

import React from "react"
import {
    XMarkIcon,
    CreditCardIcon,
} from '@heroicons/react/24/outline';
import Overview from "./Overview";
import VirtualEntreprises from "./VirtualEntreprises";
import Contributions from "./Contributions";


interface SparksProps
{
    
}


interface SparksState
{
    tabsIndexSelected: number
}

export default class Sparks extends React.Component<any, SparksState>
{

    constructor(props: any)
    {
        super(props)
        this.state = {
            tabsIndexSelected: 1,
        }
    }

    handleOnTabsMenuItemSelected(index: number)
    {
        this.setState({
            tabsIndexSelected: index,
        })
    }

    render()
    {
        return (
            <div id="sparks">
                <div className="s-zero">
                    <div className="frame"></div>
                    <div className="text">
                        <h1>Sparks</h1>
                        <p>Build the impossible. Experiment anywhere. Innovate together.</p>
                        <p>Your ideas. Your tools. Connected globally.</p>
                    </div>
                </div>
                <div className="s-tabs-menu">
                    <button type="button" className={"stm-item" + ( this.state.tabsIndexSelected === 1 ? ' selected' : '' )}
                        onClick={ () => this.handleOnTabsMenuItemSelected(1) }>Overview</button>
                    <button type="button" className={"stm-item" + ( this.state.tabsIndexSelected === 2 ? ' selected' : '' )}
                        onClick={ () => this.handleOnTabsMenuItemSelected(2) }>Vitual Entreprise</button>
                    <button type="button" className={"stm-item" + ( this.state.tabsIndexSelected === 3 ? ' selected' : '' )}
                        onClick={ () => this.handleOnTabsMenuItemSelected(3) }>Contribution</button>
                </div>
                <div className="s-tabs-contents">
                    <div className={"stc-content" + ( this.state.tabsIndexSelected === 1 ? ' selected' : '' )}>
                        <Overview />
                    </div>
                    <div className={"stc-content" + ( this.state.tabsIndexSelected === 2 ? ' selected' : '' )}>
                        <VirtualEntreprises />
                    </div>
                    <div className={"stc-content" + ( this.state.tabsIndexSelected === 3 ? ' selected' : '' )}>
                        <Contributions />
                    </div>
                </div>
            </div>
        )
    }
}