import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { STATUS } from '../../../utils/constant';
import '../../Style/CareerDetail.scss';
import img1 from '../../../assets/image/Untitled-2.webp';
import img2 from '../../../assets/image/cmc-global.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import calendar from '../../../assets/image/calendar.svg';
import education from '../../../assets/image/education.svg';
import phone from '../../../assets/image/phone.svg';
import level from '../../../assets/image/level.svg';
import work from '../../../assets/image/work.svg';
const CareerDetailPage = React.memo(() => {
    const { id } = useParams();
    return (
        <div className="career-detail-container">
            <div className="container">
                <div className="up">
                    <div className="row">
                        <div className="col-md-5 col-xl-4 col-12 left">
                            <h1 className="title mb-4">AI Solution Architect</h1>
                            <p className="mt-3">
                                <span className="fw-bolder"> CMC Global</span>
                                <br />
                                <span>
                                    <FontAwesomeIcon icon={faLocationDot} color="#00aeef" className="me-3" />
                                    Hà Nội,
                                </span>
                                <br />
                                <span>
                                    <FontAwesomeIcon icon={faClock} color="#00aeef" className="me-2" /> November 23,
                                    2024
                                </span>
                            </p>
                            <button className="btn-gadient mt-4">Apply now</button>
                        </div>
                        <div className="col-xl-8 col-md-7 d-md-block d-none right">
                            <img src={img1} />
                        </div>
                    </div>
                </div>
                <div className="down mt-5">
                    <div className="row">
                        <div className="col-lg-6 col-12 pb-5">
                            <h1 className="title mb-4">JOB DESCRIPTION</h1>
                            <p>
                                We are looking for an AI Solution Architect for AI/ML products such as Chatbots,
                                Recommendation Systems, Computer Vision Systems, Video Processing Systems, and
                                Forecasting Systems.
                            </p>
                            <ul>
                                <li>Responsible for leading the technical team in building AI/ML products.</li>
                                <li>
                                    Design the architecture for AI/ML components for the unit’s products and projects
                                    with clients.
                                </li>
                                <li>
                                    Research and break new ground in AI/ML technology, guiding the team in adopting
                                    technologies for project needs.
                                </li>
                                <li>Ensure the stability, scalability, and efficiency of AI systems as required.</li>
                            </ul>

                            <h1 className="title mb-4">REQUIREMENTS</h1>
                            <ul>
                                <li>At least 5 years of experience in the AI/ML field.</li>
                                <li>At least 2 years of experience in a similar role.</li>
                                <li>
                                    Proficient in AI tools and frameworks such as TensorFlow, PyTorch, scikit-learn,
                                    etc.
                                </li>
                                <li>Experience with AI services from major providers like AWS, GCP, and Azure.</li>
                                <li>
                                    Proficient in deploying systems in cloud environments (preferably AWS, GCP, or
                                    Azure) and on-premise.
                                </li>
                                <li>Strong leadership skills with strategic thinking and problem-solving abilities.</li>
                                <li>Proactive, dynamic, and responsible in work.</li>
                            </ul>
                            <p>Advanced:</p>
                            <ul>
                                <li>Good language skills (preferably Japanese).</li>
                            </ul>

                            <h1 className="title mb-4">JOB BENEFITS</h1>
                            <ul>
                                <li>Salary: Negotiable</li>
                                <li>Performance review: 2 times/year</li>
                                <li>14th-month salary bonus</li>
                                <li>KPI bonus based on project and performance</li>
                                <li>
                                    Opportunity to work in a professional, modern, and dynamic environment, take part in
                                    international projects
                                </li>
                                <li>Opportunity to get on-job training and promotion</li>
                                <li>
                                    An excellent corporate culture with in/out of office activities that help to develop
                                    staff's ability and creativity
                                </li>
                                <li>CMC health care and social insurance</li>
                            </ul>
                            <p className="mb-0">* Please send your application via email:</p>
                            <a>recruitment@cmcglobal.vn</a>
                        </div>
                        <div className="col-lg-6 col-12 jd-summary ps-lg-5 ps-2 ">
                            <div className="child pt-4">
                                <div className="d-flex align-items-center child-item ps-xl-5 ps-4 pt-5">
                                    <div className="img-jd d-flex align-items-center">
                                        <img src={calendar} />
                                    </div>
                                    <div className="d-flex justify-content-center flex-column mt-3">
                                        <span>Years of Experience Required</span>
                                        <p>3+ years of experience</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center child-item ps-xl-5 ps-4 pt-5">
                                    <div className="img-jd d-flex align-items-center">
                                        <img src={education} />
                                    </div>
                                    <div className="d-flex justify-content-center flex-column mt-3">
                                        <span>Required Education Level</span>
                                        <p>Bachelor’s Degree</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center child-item ps-xl-5 ps-4 pt-5">
                                    <div className="img-jd d-flex align-items-center">
                                        <img src={level} />
                                    </div>
                                    <div className="d-flex justify-content-center flex-column mt-3">
                                        <span>Job Level</span>
                                        <p>Middle/Senior</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center child-item ps-xl-5 ps-4 pt-5">
                                    <div className="img-jd d-flex align-items-center">
                                        <img src={work} />
                                    </div>
                                    <div className="d-flex justify-content-center flex-column mt-3">
                                        <span>Work Form</span>
                                        <p>Full-time</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center child-item ps-xl-5 ps-4 pt-5">
                                    <div className="img-jd d-flex align-items-center">
                                        <img src={phone} />
                                    </div>
                                    <div className="d-flex justify-content-center flex-column mt-3">
                                        <p>
                                            Email: <a>recruitment@cmcglobal.vn</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CareerDetailPage;
