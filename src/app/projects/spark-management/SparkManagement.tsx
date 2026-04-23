'use client';

import React from "react"
import {
    XMarkIcon,
    CreditCardIcon,
    ArrowDownRightIcon,
    CommandLineIcon,
    FolderIcon,
    DocumentTextIcon,
    ServerStackIcon,
    CodeBracketIcon,
    CpuChipIcon,
    CloudArrowUpIcon,
    MagnifyingGlassIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';


interface SparkManagementProps
{
    
}


interface SparkManagementState
{
    selectedFeature: any | null
    featureIndex: number
}

export default class SparkManagement extends React.Component<any, SparkManagementState>
{

    interval: any = null
    features = [
        { icon: <FolderIcon />, title: "Projects", desc: "Organize your development projects" },
        { icon: <DocumentTextIcon />, title: "Tasks", desc: "Track tasks and progress easily" },
        { icon: <ServerStackIcon />, title: "Workspace", desc: "Centralized project environment" },
        { icon: <CommandLineIcon />, title: "Automation", desc: "Run scripts and workflows" },
        { icon: <CodeBracketIcon />, title: "Dev Tools", desc: "Built for developers" },
        { icon: <CpuChipIcon />, title: "AI Assist", desc: "Smart help when you need it" },
        { icon: <CloudArrowUpIcon />, title: "Deploy", desc: "Prepare and manage deployments" },
        { icon: <MagnifyingGlassIcon />, title: "Search", desc: "Find tasks and data fast" },
        { icon: <TrashIcon />, title: "Clean", desc: "Keep your projects organized" }
    ];
    
    constructor(props: any)
    {
        super(props)
        this.state = {
            selectedFeature: null,
            featureIndex: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            this.setState((prev: any) => {
            const nextIndex =
                (prev.featureIndex + 1) % this.features.length;

            return {
                featureIndex: nextIndex,
                selectedFeature: this.features[nextIndex]
            };
            });
        }, 10000);
    }

    handleOnFeature = (feature: any) => {
        this.setState({ selectedFeature: feature });
    };

    render()
    {
        const rows = [];
        for (let i = 0; i < this.features.length; i += 3) {
            rows.push(this.features.slice(i, i + 3));
        }

        return (
            <div id="spark-management">

                <section className="zero">
                    <div className="block-frame"></div>
                    <div className="block-text">
                        <div className="text">
                            <h1>Spark Management</h1>
                            <a href="https://github.com/itd3vbox/spark-management">
                                <ArrowDownRightIcon /> GITHUB
                            </a>
                            <p>A lightweight tool to manage dev projects, tasks, and automation in one place.</p>
                        </div>
                    </div>
                </section>

                <section className="overview">

                    <div className="text">
                        <h2>Concept</h2>
                        <p>
                            Spark Management is a unified workspace designed for tech teams.
                            Manage projects, track tasks, write notes, and automate workflows from a single interface.
                        </p>
                    </div>

                    <div className="scenario">

                        <div className="step">
                            <h3>1. Organize</h3>
                            <p>Create projects and structure your tasks clearly.</p>
                        </div>

                        <div className="step">
                            <h3>2. Track</h3>
                            <p>Follow progress, manage routines, and keep everything in sync.</p>
                        </div>

                        <div className="step">
                            <h3>3. Automate</h3>
                            <p>Run scripts, tests, and workflows directly from your project.</p>
                        </div>

                        <div className="step">
                            <h3>4. Collaborate</h3>
                            <p>Work solo or in a team, assign tasks and share information.</p>
                        </div>
                    </div>

                    <p className="ambient">
                        A new way to build software — from your home, your couch, or anywhere, powered by AI workflows.
                    </p>

                </section>
                
                <section className="features">

                    <div className="block-left">
                        <div className="text">
                            <h2>Features</h2>
                            <p>
                                Spark Management helps you organize projects, manage tasks, and automate your development workflow.
                            </p>
                            {this.state.selectedFeature && (
                                <div className="feature">
                                    <h3>{this.state.selectedFeature.title}</h3>
                                    <p>{this.state.selectedFeature.desc}</p>
                                </div>
                            )}
                        </div>
                    </div>
                    
                    <div className="block-right">
                        {rows.map((row, rIndex) => (
                            <div className="row" key={rIndex}>

                            {row.map((f, i) => (
                                <div className="col" key={i}>
                                    <div className="rect" onClick={() => this.handleOnFeature(f)}>
                                        {f.icon}
                                    </div>
                                </div>
                            ))}

                            </div>
                        ))}

                    </div>

                </section>


                <section className="platforms-github">
                
                    <div className="block-left">
                        <div className="text">
                            <h2>Platforms & GitHub</h2>
                            <p>
                                Spark Management runs on web, desktop, and mobile.
                                Built with Electron for desktop and fully open-source on GitHub.
                            </p>
                            <a href="https://github.com/itd3vbox/spark-management">
                                <ArrowDownRightIcon /> GITHUB
                            </a>
                        </div>
                    </div>

                    <div className="block-right">

                        <p>Available on Web, Desktop (Electron), and Mobile.</p>

                        <div className="store">

                            <a
                                href="#"
                                target="_blank"
                            >
                                <img
                                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                                alt="Get it on Google Play"
                                />
                            </a>

                            <a
                                href="#"
                                target="_blank"
                            >
                                <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="Download on the App Store"
                                />
                            </a>

                        </div>

                    </div>

                </section>

            </div>
        )
    }
}