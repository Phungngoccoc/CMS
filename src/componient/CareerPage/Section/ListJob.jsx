import React, { useState } from "react";
import '../../Style/ListJob.scss';
import arrow from "../../../assets/image/arrow-right.svg"
import united2 from "../../../assets/image/Untitled-2.webp"
const ListJob = React.memo((props) => {
    const [search, setSearch] = useState("")
    return (
        <div className="section-listjob">
            <div className="container" >
                <h4>JOB VACANCY</h4>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end align-items-center py-3">
                        <div className="d-flex justify-content-center align-items-center search-box ">
                            <div><i className="fa fa-search child"></i></div>
                            <div><input type="text" placeholder="Search CMC Global" value={search} onChange={(event) => setSearch(event.target.value)} /></div>
                            <div><i className="fa fa-times-circle child" onClick={() => setSearch("")}></i></div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12 child-item">
                        <div className="content">
                            <img src={united2} />
                            <div className="mt-3" style={{ color: "#189FE0" }}><span>Avaiable in: </span><span>Hà Nội</span></div>
                            <div >
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                            </div>
                            <div className="content2">
                                <div className="px-0" style={{ color: "#189FE0" }}><span>Hà Nội</span></div>
                                <h5>Transform Automotive Operations with Power BI Reporting System</h5>
                                <p>
                                    This case study, suitable for large-scale businesses
                                    with extensive data operations, highlights how CMC
                                    Global developed a reporting platform that empowered
                                    faster business decisions, optimized multi-channel ...
                                </p>
                                <a className="button">Learn more <img src={arrow} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ListJob;
