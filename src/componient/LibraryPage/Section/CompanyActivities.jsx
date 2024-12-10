import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import '../../Style/CompanyActivities.scss'
import united2 from '../../../assets/image/Untitled-2.webp'
import arrow from '../../../assets/image/arrow-right.svg'
import { useSelector } from "react-redux";
const CompanyActivities = React.memo(() => {
    const language = useSelector((state) => state.language.language)
    return (
        <div className="library-container">
            <div className="container">
                <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center mb-3" >
                    <h4 className="mb-sm-0 mb-4">Company Activities</h4>
                    <a className="button">
                        {language === "en" ? "Watch more" : "Xem thêm"}{" "}
                        <img src={arrow} />
                    </a>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
});

export default CompanyActivities;
