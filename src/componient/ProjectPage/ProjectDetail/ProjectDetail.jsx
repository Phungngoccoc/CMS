import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { STATUS } from '../../../utils/constant';
import '../../Style/NewDetail.scss';
import img1 from '../../../assets/image/Untitled-2.webp';
import img2 from '../../../assets/image/cmc-global.webp';
const ProjectDetailPage = React.memo(() => {
    const { id } = useParams();
    return (
        <div className="new-detail-container">
            <div className="container">
                <div className="row px-2">
                    <div className="col-md-8 col-12 left px-2 mb-5">
                        <div className="child px-4 ">
                            <div className="date d-flex align-item-center justify-content-end py-4">
                                <span>
                                    <i className="fa fa-calendar"></i> December 2, 2024
                                </span>
                            </div>
                            <div className="py-4 content">
                                <h1>
                                    CMC Global Achieves ISO/IEC 27701:2019 Certification, Enhancing Its Commitment to
                                    Privacy Management
                                </h1>
                                <p>
                                    CMC Global is proud to announce that we have earned the prestigious ISO/IEC
                                    27701:2019 certification, an internationally recognized standard for Privacy
                                    Information Management Systems (PIMS). …
                                </p>
                                <img src={img1} className="mb-4" />
                                <p className="fw-bolder fst-italic">
                                    CMC Global is proud to announce that we have earned the prestigious ISO/IEC
                                    27701:2019 certification, an internationally recognized standard for Privacy
                                    Information Management Systems (PIMS). This achievement further strengthens our
                                    commitment to maintaining the highest standards of privacy and data protection.
                                </p>
                                <p>
                                    The ISO/IEC 27701:2019 certification, established and managed by the International
                                    Organization for Standardization (ISO), provides clear requirements for
                                    organizations to establish, implement, maintain, and continually improve a system
                                    for managing privacy information.
                                </p>
                                <p>
                                    This new certification, alongside our existing ISO/IEC 27001:2013 certification for
                                    Information Security Management Systems (ISMS), enhances CMC Global’s competitive
                                    edge in the global market. This certification demonstrates our capacity to
                                    effectively manage and secure both information security and personal data,
                                    particularly in the context of software development and application support.
                                </p>
                                <p>
                                    In addition, this certification guarantees our adherence to regulatory standards in
                                    both local and international markets, including compliance with Vietnam’s Decree
                                    13/2023/ND-CP, the EU’s GDPR, and Singapore’s PDPA.
                                </p>
                                <p>
                                    Mr. Bach Nguyen Viet, Chief Delivery Officer at CMC Global, said: “Transparency in
                                    privacy practices has always been our top priority. We’re committed to not only
                                    talking about privacy but also actively finding ways to show that commitment in
                                    everything we do. The ISO/IEC 27701:2019 certification reflects our ongoing
                                    commitment to safeguarding personal data and privacy, ensuring that we meet the
                                    highest standards of data protection for our clients while aligning with global data
                                    privacy regulations.”
                                </p>
                                <p>
                                    With this certification, CMC Global reaffirms its dedication to providing secure,
                                    compliant, and privacy-conscious services to our clients around the world.
                                </p>
                            </div>
                            <div className="bottom py-3 d-flex align-item-center justify-content-between">
                                <span className="fw-bold">Share This Article</span>
                                <div className="social-icon d-flex">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-12 right p-0 pe-2">
                        <div className="child">
                            <div className="up d-flex align-items-center justify-content-center flex-column">
                                <div className="logo mb-2" style={{ backgroundImage: `url(${img2})` }}></div>
                                <span>CMC Global</span>
                            </div>
                            <div className="down">
                                <div className="share py-4 ps-3 pe-1">
                                    <span className="fw-bold">Share This Article</span>
                                </div>
                                <div className="social-icon d-flex py-4 ps-3">
                                    <i className="fa fa-facebook"></i>
                                    <i className="fa fa-twitter"></i>
                                </div>
                                <div className="info py-4 px-3">
                                    <div className="form-group">
                                        <label>Email: </label>
                                        <input type="text" className="form-control mt-2" />
                                    </div>
                                    <button className="btn btn-warning mt-4 py-2 px-4">Subscribe to updates</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ProjectDetailPage;
