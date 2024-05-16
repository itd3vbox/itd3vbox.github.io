'use client';

import React from "react"
import { connect } from 'react-redux';
import { toggleEnabled } from '@/libs/features/animation/animationSlice';
import {
    PlayIcon,
    StopIcon,
    XMarkIcon,
    CreditCardIcon,
} from '@heroicons/react/24/outline';
import Pong from '@/libs/pong/Pong'

interface PageAnimationProps
{
    
}


interface PageAnimationState
{
    
}

class PageAnimation extends React.Component<any, PageAnimationState>
{
    ref: any = null
    pong: any = null

    constructor(props: any)
    {
        super(props)
        this.state = {

        }

        this.ref = React.createRef()
    }

    componentDidMount(): void {

        if (this.pong === null)
        {
            this.pong = new Pong({
                element: this.ref.current,
            })
            //this.pong.localeStart()
        }
    }

    handlePlayOnClick()
    {
        this.pong.resetResizeAfter()
        this.pong.localeStart()
        console.log('test ...')
    }

    handleStopOnClick()
    {
        console.log('test ...')
        this.props.dispatch(toggleEnabled())
        this.pong.localeEnd()
    }

    render()
    {
        return (
            <div id="page-animation">
                <div className="game" ref={ this.ref }></div>
                <button className="btn-start" 
                    onClick={ () => this.handlePlayOnClick() }>
                    <PlayIcon />
                </button>
                <button className="btn-stop"  
                    onClick={ () => this.handleStopOnClick() }>
                    <StopIcon />
                </button>
            </div>
        )
    }
}

export default connect()(PageAnimation)