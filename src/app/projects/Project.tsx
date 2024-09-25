'use client';

import React from "react"
import {
    XMarkIcon,
    CreditCardIcon,
    SparklesIcon,
    PlayIcon,
    CubeIcon,
} from '@heroicons/react/24/outline';


interface ProjectProps
{
    data: any
}


interface ProjectState
{
    
}

export default class Project extends React.Component<ProjectProps, ProjectState>
{

    constructor(props: ProjectProps)
    {
        super(props)
        this.state = {

        }
    }

    getIcon(groups: string[])
    {
        if (groups.includes('Spark'))
            return (<SparklesIcon />)
        if (groups.includes('Game'))
            return (<PlayIcon />)
        return (<CubeIcon />)
    }

    render()
    {
        const project = this.props.data
        
        return (
            <article className="project">
                <div className="block-top">
                    <div className="icon">
                        { this.getIcon(project.groups) }
                    </div>
                    <a href={ project.link } target="_blank" className="link">GITHUB</a>
                </div>
                <div className="block-core">
                    <h6>{ project.name }</h6>
                    <p>{ project.description }</p>
                </div>
            </article>
        )
    }
}