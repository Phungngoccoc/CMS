import React, { useEffect, useState } from "react";
import '../../Style/LastestNews.scss'
import newImg from "../../../assets/image/korea.webp"
const LastestNews = React.memo(() => {
    return (
        <div className="lastest-news-container">
            <div className="container">
                <h4>LASTEST NEWS</h4>
                <h1>We accelerate growth for all types of businesses</h1>
                {/* <div className="menu-news">
                    <div className="menu-button d-flex">
                        <button>All</button>
                        <button>Event</button>
                        <button>News</button>
                    </div>
                </div> */}
                <div className="list-new row mt-4">
                    <div className="col-md-6 co-12 child-new-left mt-3">
                        <div className="child">
                            <div className="child-img" style={{ backgroundImage: `url(${newImg})` }}>
                            </div>
                            <div className="blur"></div>
                            <div className="child-text px-4">
                                <span className="mb-5">CMC Global Achieves ISO/IEC 27701:2019 Certification, Enhancing Its Commitment to Privacy Management</span>
                                <a>December 2,2024</a>
                                <label>Learn more <i className="fa fa-arrow-right"></i></label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 child-new-right d-flex flex-column mt-3">
                        <div className="child">
                            <div className="child-img" style={{ backgroundImage: `url(${newImg})` }}>
                                <div className="blur-green"></div>
                            </div>
                            <div className="child-text px-4">
                                <span className="mb-5">CMC Global Achieves ISO/IEC 27701:2019 Certification, Enhancing Its Commitment to Privacy Management</span>
                                <a>December 2,2024</a>
                                <label>Learn more <i className="fa fa-arrow-right"></i></label>
                            </div>
                        </div>
                        <div className="child">
                            <div className="child-img" style={{ backgroundImage: `url(${newImg})` }}>
                                <div className="blur-blue"></div>
                            </div>
                            <div className="child-text px-4">
                                <span className="mb-5">CMC Global Achieves ISO/IEC 27701:2019 Certification, Enhancing Its Commitment to Privacy Management</span>
                                <a>December 2,2024</a>
                                <label>Learn more <i className="fa fa-arrow-right"></i></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="list-new row mt-1">
                    <div className="col-md-6 col-12 child-new-right d-flex flex-column mt-3">
                        <div className="child">
                            <div className="child-img" style={{ backgroundImage: `url(${newImg})` }}>
                                <div className="blur-pink"></div>
                            </div>
                            <div className="child-text px-4">
                                <span className="mb-5">CMC Global Achieves ISO/IEC 27701:2019 Certification, Enhancing Its Commitment to Privacy Management</span>
                                <a>December 2,2024</a>
                                <label>Learn more <i className="fa fa-arrow-right"></i></label>
                            </div>
                        </div>
                        <div className="child">
                            <div className="child-img" style={{ backgroundImage: `url(${newImg})` }}>
                                <div className="blur-blue"></div>
                            </div>
                            <div className="child-text px-4">
                                <span className="mb-5">CMC Global Achieves ISO/IEC 27701:2019 Certification, Enhancing Its Commitment to Privacy Management</span>
                                <a>December 2,2024</a>
                                <label>Learn more <i className="fa fa-arrow-right"></i></label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 co-12 child-new-left mt-3">
                        <div className="child">
                            <div className="child-img" style={{ backgroundImage: `url(${newImg})` }}>
                            </div>
                            <div className="blur"></div>
                            <div className="child-text px-4">
                                <span className="mb-5">CMC Global Achieves ISO/IEC 27701:2019 Certification, Enhancing Its Commitment to Privacy Management</span>
                                <a>December 2,2024</a>
                                <label>Learn more <i className="fa fa-arrow-right"></i></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
});

export default LastestNews;
