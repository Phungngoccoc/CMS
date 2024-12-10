import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import united2 from '../../../assets/image/Untitled-2.webp'
import arrow from '../../../assets/image/arrow-right.svg'
import global from '../../../assets/image/cmc-global.webp'
import '../../Style/Project.scss'
const Project = React.memo(() => {
    return (
        <div className="project-container">
            <div className="container">
                <h4>Project</h4>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="company-logo">
                                <img src={global} className="logo" />
                                <span>CMC Global</span>
                            </div>
                            <div className="content2">
                                <div className="p-0 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                    <div className="p-0">
                                        <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                        <p>
                                            This case study, suitable for large-scale businesses
                                            with extensive data operations, highlights how CMC
                                            Global developed a reporting platform that empowered
                                            faster business decisions, optimized multi-channel ...
                                        </p>
                                    </div>
                                    <div className="mb-3 p-0">
                                        <a className="button mb-3">Learn more <img src={arrow} /></a>
                                        <img src={global} className="logo" />
                                        <span>CMC Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="company-logo">
                                <img src={global} className="logo" />
                                <span>CMC Global</span>
                            </div>
                            <div className="content2">
                                <div className="p-0 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                    <div className="p-0">
                                        <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                        <p>
                                            This case study, suitable for large-scale businesses
                                            with extensive data operations, highlights how CMC
                                            Global developed a reporting platform that empowered
                                            faster business decisions, optimized multi-channel ...
                                        </p>
                                    </div>
                                    <div className="mb-3 p-0">
                                        <a className="button mb-3">Learn more <img src={arrow} /></a>
                                        <img src={global} className="logo" />
                                        <span>CMC Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="company-logo">
                                <img src={global} className="logo" />
                                <span>CMC Global</span>
                            </div>
                            <div className="content2">
                                <div className="p-0 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                    <div className="p-0">
                                        <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                        <p>
                                            This case study, suitable for large-scale businesses
                                            with extensive data operations, highlights how CMC
                                            Global developed a reporting platform that empowered
                                            faster business decisions, optimized multi-channel ...
                                        </p>
                                    </div>
                                    <div className="mb-3 p-0">
                                        <a className="button mb-3">Learn more <img src={arrow} /></a>
                                        <img src={global} className="logo" />
                                        <span>CMC Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="company-logo">
                                <img src={global} className="logo" />
                                <span>CMC Global</span>
                            </div>
                            <div className="content2">
                                <div className="p-0 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                    <div className="p-0">
                                        <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                        <p>
                                            This case study, suitable for large-scale businesses
                                            with extensive data operations, highlights how CMC
                                            Global developed a reporting platform that empowered
                                            faster business decisions, optimized multi-channel ...
                                        </p>
                                    </div>
                                    <div className="mb-3 p-0">
                                        <a className="button mb-3">Learn more <img src={arrow} /></a>
                                        <img src={global} className="logo" />
                                        <span>CMC Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="company-logo">
                                <img src={global} className="logo" />
                                <span>CMC Global</span>
                            </div>
                            <div className="content2">
                                <div className="p-0 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                    <div className="p-0">
                                        <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                        <p>
                                            This case study, suitable for large-scale businesses
                                            with extensive data operations, highlights how CMC
                                            Global developed a reporting platform that empowered
                                            faster business decisions, optimized multi-channel ...
                                        </p>
                                    </div>
                                    <div className="mb-3 p-0">
                                        <a className="button mb-3">Learn more <img src={arrow} /></a>
                                        <img src={global} className="logo" />
                                        <span>CMC Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="company-logo">
                                <img src={global} className="logo" />
                                <span>CMC Global</span>
                            </div>
                            <div className="content2">
                                <div className="p-0 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                    <div className="p-0">
                                        <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                        <p>
                                            This case study, suitable for large-scale businesses
                                            with extensive data operations, highlights how CMC
                                            Global developed a reporting platform that empowered
                                            faster business decisions, optimized multi-channel ...
                                        </p>
                                    </div>
                                    <div className="mb-3 p-0">
                                        <a className="button mb-3">Learn more <img src={arrow} /></a>
                                        <img src={global} className="logo" />
                                        <span>CMC Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="company-logo">
                                <img src={global} className="logo" />
                                <span>CMC Global</span>
                            </div>
                            <div className="content2">
                                <div className="p-0 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                    <div className="p-0">
                                        <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                        <p>
                                            This case study, suitable for large-scale businesses
                                            with extensive data operations, highlights how CMC
                                            Global developed a reporting platform that empowered
                                            faster business decisions, optimized multi-channel ...
                                        </p>
                                    </div>
                                    <div className="mb-3 p-0">
                                        <a className="button mb-3">Learn more <img src={arrow} /></a>
                                        <img src={global} className="logo" />
                                        <span>CMC Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="company-logo">
                                <img src={global} className="logo" />
                                <span>CMC Global</span>
                            </div>
                            <div className="content2">
                                <div className="p-0 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                    <div className="p-0">
                                        <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                        <p>
                                            This case study, suitable for large-scale businesses
                                            with extensive data operations, highlights how CMC
                                            Global developed a reporting platform that empowered
                                            faster business decisions, optimized multi-channel ...
                                        </p>
                                    </div>
                                    <div className="mb-3 p-0">
                                        <a className="button mb-3">Learn more <img src={arrow} /></a>
                                        <img src={global} className="logo" />
                                        <span>CMC Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="company-logo">
                                <img src={global} className="logo" />
                                <span>CMC Global</span>
                            </div>
                            <div className="content2">
                                <div className="p-0 d-flex flex-column justify-content-between" style={{ height: "100%" }}>
                                    <div className="p-0">
                                        <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                        <p>
                                            This case study, suitable for large-scale businesses
                                            with extensive data operations, highlights how CMC
                                            Global developed a reporting platform that empowered
                                            faster business decisions, optimized multi-channel ...
                                        </p>
                                    </div>
                                    <div className="mb-3 p-0">
                                        <a className="button mb-3">Learn more <img src={arrow} /></a>
                                        <img src={global} className="logo" />
                                        <span>CMC Global</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    );
});

export default Project;
