'use client';

import React from "react"
import {
    XMarkIcon,
    CreditCardIcon,
} from '@heroicons/react/24/outline';
import LogicalPath from "./LogicalPath";
import InnerPath from "./InnerPath";


interface BeyondProps
{
    
}


interface BeyondState
{
    tabsIndexSelected: number
}

export default class Beyond extends React.Component<any, BeyondState>
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
            <div id="beyond">
                <div className="b-zero">
                    <div className="frame"></div>
                    <div className="text">
                        <h1>Beyond</h1>
                        <p>
                            From the moment of the Big Bang, a certain logic shaped the world.  
                            Chaos gradually became order, and through this unfolding, creation emerged.  
                            At the heart of it lies a mystery — something beyond comprehension, beyond the human point of view, the origin of all that exists.
                        </p>
                    </div>
                </div>

                <div className="b-tabs-menu">
                    <button type="button" className={"btm-item" + ( this.state.tabsIndexSelected === 1 ? ' selected' : '' )}
                        onClick={ () => this.handleOnTabsMenuItemSelected(1) }>Logical Path</button>
                    <button type="button" className={"btm-item" + ( this.state.tabsIndexSelected === 2 ? ' selected' : '' )}
                        onClick={ () => this.handleOnTabsMenuItemSelected(2) }>Inner Path</button>
                </div>
                <div className="b-tabs-contents">
                    <div className={"btc-content" + ( this.state.tabsIndexSelected === 1 ? ' selected' : '' )}>
                        <LogicalPath />
                    </div>
                    <div className={"btc-content" + ( this.state.tabsIndexSelected === 2 ? ' selected' : '' )}>
                        <InnerPath />
                    </div>
                </div>

                <div className="b-end">
                    <div className="text">
                        <p>
                            Each journey has its path. Some let life guide them, carried by the unknown with spontaneity.  
                            Others take partial control, choosing and orchestrating their trajectory, exploring and experimenting.  
                            The idea is freedom and responsibility — everyone moves forward using their own tools and following their own desires.
                        </p>
                    </div>
                    <div className="frame"></div>
                </div>

            </div>
        )
    }
}