'use client';

import React from "react"
import {
  CommandLineIcon,
  CodeBracketIcon,
  FolderIcon,
  MagnifyingGlassIcon,
  ServerStackIcon,
  DocumentTextIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  TrashIcon,
  ArrowDownLeftIcon,
  ArrowDownRightIcon
} from "@heroicons/react/24/outline";





interface SpatkCodeProps
{
    
}


interface SpatkCodeState
{
    selectedFeature: any | null
    featureIndex: number
}

export default class SpatkCode extends React.Component<any, SpatkCodeState>
{

    interval: any = null
    features = [
        { icon: <CommandLineIcon />, title: "SSH", desc: "Remote connection" },
        { icon: <CodeBracketIcon />, title: "Editor", desc: "Edit code fast" },
        { icon: <FolderIcon />, title: "Explorer", desc: "Project files" },
        { icon: <MagnifyingGlassIcon />, title: "Search", desc: "Search in code" },
        { icon: <ServerStackIcon />, title: "Workspace", desc: "Structure view" },
        { icon: <CloudArrowUpIcon />, title: "Deploy", desc: "Push server" },
        { icon: <DocumentTextIcon />, title: "Docs", desc: "Documentation" },
        { icon: <CpuChipIcon />, title: "AI", desc: "Smart assist" },
        { icon: <TrashIcon />, title: "Clean", desc: "Auto clean code" }
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
            <div id="spark-code">

                <section className="zero">
                    <div className="block-frame"></div>
                    <div className="block-text">
                        <div className="text">
                            <h1>Spark Code</h1>
                            <a href="https://github.com/itd3vbox/spark-code">
                                <ArrowDownRightIcon /> GITHUB
                            </a>
                            <p>A lightweight mobile code editor designed for fast development over SSH.</p>
                        </div>
                    </div>
                </section>

                <section className="overview">
                    <div className="text">
                        <h2>Concept</h2>
                        <p>
                            Spark Code is a mobile-optimized code editor designed for fast remote development via SSH.
                            It allows you to edit, test, and manage code directly from your smartphone.
                        </p>
                    </div>
                    <div className="scenario">
                        <div className="step">
                            <h3>1. Connect</h3>
                            <p>Log into your remote server via SSH in seconds.</p>
                        </div>

                        <div className="step">
                            <h3>2. Edit</h3>
                            <p>Open and modify your project files directly from your phone.</p>
                        </div>

                        <div className="step">
                            <h3>3. Run</h3>
                            <p>Execute commands and build your project on the remote machine.</p>
                        </div>

                        <div className="step">
                            <h3>4. AI Assist</h3>
                            <p>Get code suggestions, explanations, and quick fixes when you need help.</p>
                        </div>

                    </div>
                </section>


                <section className="features">

                    <div className="block-left">
                        <div className="text">
                            <h2>Features</h2>
                            <p>
                               Spark Code provides a lightweight mobile development environment with SSH access and essential coding tools.
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
                                    <div className="hexa" onClick={() => this.handleOnFeature(f)}>
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
                                Spark Code runs on Android and iOS, and is fully open-source.
                                You can build, compile, and customize it directly from GitHub.
                            </p>
                            <a href="https://github.com/itd3vbox/spark-code">
                                <ArrowDownRightIcon /> GITHUB
                            </a>
                        </div>
                    </div>

                    <div className="block-right">

                        <p>Available on Android & iOS</p>

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