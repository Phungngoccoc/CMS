import React, { useState } from "react";
import '../../Style/CaseStudies.scss';
import arrow from "../../../assets/image/arrow-right.svg"
import united2 from "../../../assets/image/Untitled-2.webp"
const CaseStudies = (props) => {
    return (
        <div className="section-casestudies">
            <div className="container">
                <h4>CASE STUDIES</h4>
                <div className="row">
                    <div className="col-sm-9 col-12 mb-4">
                        <h1>Successful Stories Through Every Project</h1>
                    </div>
                    <div className="col-3 d-none d-sm-block mb-4">
                        <div className="d-flex justify-content-end align-items-center">
                            <button >View all <img src={arrow} /></button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 child-item">
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
                        </div>
                        <div className="content2">
                            <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                            <p>
                                This case study, suitable for large-scale businesses
                                with extensive data operations, highlights how CMC
                                Global developed a reporting platform that empowered
                                faster business decisions, optimized multi-channel ...
                            </p>
                            <button>Learn more <img src={arrow} /></button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 child-item">
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
                        </div>
                        <div className="content2">
                            <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                            <p>
                                This case study, suitable for large-scale businesses
                                with extensive data operations, highlights how CMC
                                Global developed a reporting platform that empowered
                                faster business decisions, optimized multi-channel ...
                            </p>
                            <button>Learn more <img src={arrow} /></button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 child-item">
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
                        </div>
                        <div className="content2">
                            <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                            <p>
                                This case study, suitable for large-scale businesses
                                with extensive data operations, highlights how CMC
                                Global developed a reporting platform that empowered
                                faster business decisions, optimized multi-channel ...
                            </p>
                            <button>Learn more <img src={arrow} /></button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 child-item">
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
                        </div>
                        <div className="content2">
                            <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                            <p>
                                This case study, suitable for large-scale businesses
                                with extensive data operations, highlights how CMC
                                Global developed a reporting platform that empowered
                                faster business decisions, optimized multi-channel ...
                            </p>
                            <button>Learn more <img src={arrow} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseStudies;
