'use client';

import React from "react"
import {
    XMarkIcon,
    CreditCardIcon,
    DocumentIcon,
} from '@heroicons/react/24/outline';

import './sass/main.sass'
import Data from "./data/Data";

interface DocsProps
{
    
}


interface DocsState
{
    
}

export default class Docs extends React.Component<any, DocsState>
{
    data: any

    constructor(props: any)
    {
        super(props)
        this.state = {

        }
        this.data = new Data()
    }

    renderDocs()
    {
        const description = (data: any) => {
            let description: string = ''
            const langs: string[] = ['fr', 'en']
            if (data instanceof Object)
            {
                for (const lang of langs)
                {
                    if (data[lang])
                    {
                        description = data[lang]
                        console.log(description)
                        break
                    }
                }
            }
            else if (typeof data === 'string')
                description = data
            return description
        }

        const elements: any = []
        const docs = this.data.getData()
        console.log(docs, docs.length)
        for (let index = 0; index < docs.length; index++) 
        {
            const doc = docs[index]
            elements.push(
                <div className="doc" key={ index + 1 }>
                    <div className="block-top">
                        <div className="icon">
                            <DocumentIcon />
                        </div>
                        <a href={ doc.readme } target="_blank" className="readme">Read</a>
                    </div>
                    <div className="block-core">
                        <h6>{ doc.title }</h6>
                        <p>{ description(doc.description) }</p>
                    </div>
                </div>
            )
        }
        return elements
    }

    render()
    {
        return (
            <div id="docs">
                <div className="d-top">
                    <div className="block-left"></div>
                    <div className="block-right"></div>
                </div>
                <div className="d-list">
                    { this.renderDocs() }
                </div>
            </div>
        )
    }
}