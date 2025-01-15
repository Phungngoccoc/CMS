import React, { useEffect, useState } from 'react';
import '../../Style/CaseStudies.scss';
import arrow from '../../../assets/image/arrow-right.svg';
import { useNavigate } from 'react-router-dom';
import { LANGUAGES, path } from '../../../utils/constant';
import axios from 'axios';
import { fetchListProject } from '../../../services/userServices';
import { useSelector } from 'react-redux';

const CaseStudies = React.memo((props) => {
    const language = localStorage.getItem('language');
    const navigate = useNavigate();
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const [listProject, setListProject] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const res = await fetchListProject();

                const temp = {
                    [LANGUAGES.EN]: [],
                    [LANGUAGES.VI]: [],
                };
                if (res.status < 400 && res.data) {
                    const data = res.data?.data;

                    if (data.length > 0) {
                        data.map((item) => {
                            if (item.translations?.length > 0) {
                                item.translations.map((ele) => {
                                    if (Object.values(LANGUAGES).includes(ele.languages_code)) {
                                        const language = ele.languages_code;
                                        temp[language]?.push({
                                            item,
                                            ele,
                                        });
                                    }
                                });
                            }
                        });
                        setListProject(temp);
                    }
                }
            } catch (err) {}
        };
        if (props.data) {
            fetch();
        }
    }, [props]);

    const SwitchPage = (path) => {
        navigate(path);
    };
    const handleClick = (title) => {
        navigate(`${path.PROJECTS}/${encodeURIComponent(title)}`);
    };

    return (
        <>
            {props?.data && (
                <div className="section-casestudies">
                    <div className="container">
                        <h4>{props.data?.ele?.title}</h4>
                        <div className="row">
                            <div className="col-sm-9 col-12 mb-4">
                                <h1 style={{ color: `${companyInfor?.data[0]?.color_text_heading}` }}>
                                    {props.data?.ele?.header}
                                </h1>
                            </div>
                            <div className="col-3 d-none d-sm-block mb-4">
                                <div className="d-flex justify-content-end align-items-center">
                                    <span className="button" onClick={() => SwitchPage(path.PROJECTS)}>
                                        {language === 'en' ? 'View all' : 'Xem thêm'} <img src={arrow} alt="arrow" />
                                    </span>
                                </div>
                            </div>
                            {listProject?.[language]?.length > 0 &&
                                listProject[language].slice(0, 4).map((ele, index) => {
                                    if (index < 4) {
                                        const imageUrl = `${import.meta.env.VITE_BACKEND_URL}/assets/${ele.item.image}`;
                                        return (
                                            <div key={index} className="col-lg-3 col-md-6 col-12 child-item">
                                                <div className="content">
                                                    <img
                                                        src={imageUrl}
                                                        alt={ele?.item?.title ? ele.item.title : 'image'}
                                                    />
                                                    <div>
                                                        <h5>{ele.ele.content_main}</h5>
                                                        <p>{ele.ele.content}</p>
                                                    </div>
                                                    <div className="content2">
                                                        <h5>{ele.ele.content_main}</h5>
                                                        <p>{ele.ele.content}</p>
                                                        <span
                                                            className="button"
                                                            onClick={() => handleClick(ele?.item?.id)}
                                                        >
                                                            {language === 'en' ? 'Learn more' : 'Tìm hiểu thêm'}{' '}
                                                            <img src={arrow} alt="arrow" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }
                                })}
                            <div className="col-12 d-block d-sm-none mb-4">
                                <div className="d-flex justify-content-end align-items-center">
                                    <span className="button px-4" onClick={() => SwitchPage(path.PROJECTS)}>
                                        {language === 'en' ? 'View all' : 'Xem thêm'} <img src={arrow} alt="arrow" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default CaseStudies;
