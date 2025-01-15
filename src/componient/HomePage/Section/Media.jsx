import React, { useState, useEffect } from 'react';
import '../../Style/Media.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { path } from '../../../utils/constant';
import axios from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { fetchDataMedia } from '../../../services/userServices';
const Media = React.memo((props) => {
    const languageApp = useSelector((state) => state.language.language);
    const navigate = useNavigate();
    const [allNew, setAllNew] = useState([]);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    useEffect(() => {
        AOS.init({
            duration: 1200,
            offset: 220,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);
    useState(() => {
        const fetch = async () => {
            try {
                const res = await fetchDataMedia();

                if (res.status < 400 && res.data) {
                    setAllNew(res.data.data);
                }
            } catch (err) {
                if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                    console.error(err.message);
                }
            }
        };
        fetch();
    });

    const SwitchPage = (path) => {
        navigate(path);
    };
    const handleClick = (title) => {
        navigate(`${path.NEWS}/${encodeURIComponent(title)}`);
    };

    if (!props?.data?.ele?.title || !languageApp) return null;

    return (
        <div className="section-media" data-aos="fade-up">
            <div className="container">
                <h4>{props.data.ele?.title}</h4>
                <h1 style={{ color: `${companyInfor?.data[0]?.color_text_heading}` }}>{props.data.ele?.header}</h1>
                <div className="row">
                    {allNew?.[0] && (
                        <div className="col-md-6 col-12 left">
                            <img
                                src={`${import.meta.env.VITE_BACKEND_URL}/assets/${allNew[0].image}`}
                                alt="Content Image"
                                onClick={() => handleClick(allNew[0]?.id)}
                            />
                            <label onClick={() => handleClick(allNew[0]?.id)}>
                                {allNew[0].translations?.map((tran) => {
                                    if (tran.languages_code === languageApp) {
                                        return tran.content_main;
                                    }
                                })}
                            </label>
                            <div className="date">
                                <span>{new Date(allNew[0].time_post).toLocaleDateString('vi-VN')}</span>
                            </div>
                            <p>
                                {allNew[0].translations?.map((tran) => {
                                    if (tran.languages_code === languageApp) {
                                        return tran.content;
                                    }
                                })}
                            </p>
                        </div>
                    )}
                    <div className="col-md-6 col-12 right">
                        {allNew.slice(1).map((content, index) => (
                            <div className="row mb-4 child-post" key={index}>
                                <div className="col-6">
                                    <img
                                        src={`${import.meta.env.VITE_BACKEND_URL}/assets/${content.image}`}
                                        alt={`Content Image ${index + 1}`}
                                        onClick={() => handleClick(content.id)}
                                    />
                                </div>
                                <div className="col-6 d-flex flex-column justify-content-between mb-4">
                                    <label onClick={() => handleClick(content.id)}>
                                        {' '}
                                        {content.translations?.map((tran) => {
                                            if (tran.languages_code === languageApp) {
                                                return tran.content_main;
                                            }
                                        })}
                                    </label>
                                    <p>
                                        {content.translations?.map((tran) => {
                                            if (tran.languages_code === languageApp) {
                                                return tran?.content;
                                            }
                                        })}
                                    </p>
                                    <div className="date">
                                        <span>{new Date(content.time_post).toLocaleDateString('vi-VN')}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <span className="button" onClick={() => SwitchPage(path.NEWS)}>
                            {languageApp === 'en' ? 'View all posts' : 'Xem thêm'} <img src={arrow} alt="arrow" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Media;
