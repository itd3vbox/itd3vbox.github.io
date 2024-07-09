'use client';

import React from "react"
import {
    PlayIcon,
    CreditCardIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';
import Data from "./data/Data";

import './sass/main.sass'

interface ProjectsProps
{
    
}


interface ProjectsState
{
    
}

export default class Projects extends React.Component<any, ProjectsState>
{
    data: any

    constructor(props: any)
    {
        super(props)
        this.state = {

        }
        this.data = new Data()
    }

    renderProjects()
    {
        const elements: any = []
        const projects = this.data.getData()
        for (let index = 0; index < projects.length; index++) 
        {
            const project = projects[index]
            elements.push(
                <article className="project" key={ index + 1 }>
                    <div className="block-top">
                        <div className="icon">
                            <SparklesIcon />
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
        return elements
    }

    render()
    {
        return (
            <div id="projects">
                 <div className="p-top">
                    <div className="block-left"></div>
                    <div className="block-right"></div>
                </div>
                <div className="p-list">
                    { this.renderProjects() }
                </div>
            </div>
        )
    }
}