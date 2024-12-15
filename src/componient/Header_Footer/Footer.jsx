import React, { useEffect, useState } from 'react';
import '../Style/Footer.scss';
import { useSelector } from 'react-redux';
const Footer = React.memo(() => {
    const languageApp = useSelector((state) => state.language.language);
    return (
        <div className="section-footer">
            <div className="container">
                <div className="row up ps-3 ps-sm-0">
                    <div className="col-12 col-sm-6 col-lg-3 ">
                        <span>{languageApp === 'vi' ? 'Về chúng tôi' : 'About us'}</span>
                        <p>
                            <a>CMC Global</a>
                            <br />
                            <a>CMC Corporation</a>
                            <br />
                            <a>Company Profile</a>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 ">
                        <span>{languageApp === 'vi' ? 'Dự án' : 'Case Studies'}</span>
                        <p>
                            <a>{languageApp === 'vi' ? 'Câu chuyện thành công' : 'Customer Stories'}</a>
                            <br />
                            <a>{languageApp === 'vi' ? 'Ngành/Lĩnh vực' : 'Case Studies'}</a>
                            <br />
                            <a>{languageApp === 'vi' ? 'Quy mô doanh nghiệp' : 'Case Studies'}</a>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 ">
                        <span>{languageApp === 'vi' ? 'Tài nguyên' : 'Resource'}</span>
                        <p>
                            <a>Blog</a>
                            <br />
                            <a>{languageApp === 'vi' ? 'Sách điện tử và sách trắng' : 'Ebooks & Whitepapers'}</a>
                            <br />
                            <a>{languageApp === 'vi' ? 'Tin tức và sự kiện' : 'News & Events'}</a>
                        </p>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-3 ">
                        <span>{languageApp === 'vi' ? 'Tuyển dụng' : 'Careers'}</span>
                        <p className="ps-1">
                            <a>{languageApp === 'vi' ? 'Tuyển dụng' : 'Careers'}</a>
                        </p>
                    </div>
                </div>
                <div className="down d-lg-flex justify-content-between align-items-center">
                    <div className="social-network d-flex justify-content-center align-items-center">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="item">
                                <i className="fa fa-facebook"></i>
                            </div>
                            <div className="item mx-5">
                                <i className="fa fa-twitter"></i>
                            </div>
                            <div className="item">
                                <i className="fa fa-linkedin"></i>
                            </div>
                        </div>
                    </div>
                    <div className="copy-right text-center mb-4">
                        <span>Copyright ©2023 CMC Global. All rights reserved.</span>
                    </div>
                    <div className="mx-5"></div>
                </div>
            </div>
        </div>
    );
});

export default Footer;
