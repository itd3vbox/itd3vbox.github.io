'use client';

import React from "react"
import {
    PlayIcon,
    CreditCardIcon,
    SparklesIcon,
} from '@heroicons/react/24/outline';
import Data from "./data/Data";

import './sass/main.sass'
import Project from "./Project";

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
                <Project
                    key={ index + 1 } 
                    data={ project } />
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
                    <div className="block-right">
                        <div className="text"> 
                            <h1>Projects</h1>
                            <p>Welcome to our virtual lab where open source ideas take shape. Each project is a chance to explore, innovate, and build meaningful solutions together. Here, code becomes creation and collaboration drives every initiative.</p>
                        </div>
                    </div>
                </div>
                <div className="p-list">
                    { this.renderProjects() }
                </div>
            </div>
        )
    }
}