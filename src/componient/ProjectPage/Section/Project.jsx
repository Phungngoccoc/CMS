import React, { useEffect, useState } from 'react';
import united2 from '../../../assets/image/Untitled-2.webp';
import arrow from '../../../assets/image/arrow-right.svg';
import global from '../../../assets/image/cmc-global.webp';
import '../../Style/Project.scss';
import { useNavigate } from 'react-router-dom';
const Project = React.memo((props) => {
    useEffect(() => {}, [props]);
    const navigate = useNavigate();
    // Giới hạn tối đa 12 phần tử
    const itemsToRender = props?.data?.item?.list?.slice(0, 12);
    const handleClick = (title) => {
        navigate(`/projects/${encodeURIComponent(title)}`);
    };
    return (
        <>
            {props?.data && (
                <div className="project-container">
                    <div className="container">
                        <h4>{props.data.item?.header}</h4>
                        <div className="row">
                            {itemsToRender?.map((ele, index) => (
                                <div className="col-lg-4 col-sm-6 col-12 child-item" key={index}>
                                    <div className="content">
                                        <img
                                            src={`${import.meta.env.VITE_BACKEND_URL}/assets/${ele?.item?.image}`}
                                            alt={ele.item.title}
                                        />
                                        <div>
                                            <h5>{ele?.item?.title}</h5>
                                            <p>{ele?.item?.content}</p>
                                        </div>
                                        <div className="company-logo">
                                            <img src={global} className="logo" alt="CMC Global" />
                                            <span>CMC Global</span>
                                        </div>
                                        <div className="content2">
                                            <div
                                                className="p-0 d-flex flex-column justify-content-between"
                                                style={{ height: '100%' }}
                                            >
                                                <div className="p-0">
                                                    <h5>{ele?.item?.title}</h5>
                                                    <p>{ele?.item?.content}</p>
                                                </div>
                                                <div className="mb-3 p-0">
                                                    <a
                                                        className="button mb-3"
                                                        onClick={() => handleClick(ele?.item?.id)}
                                                    >
                                                        Learn more <img src={arrow} alt="Arrow" />
                                                    </a>
                                                    <img src={global} className="logo" alt="CMC Global" />
                                                    <span>CMC Global</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default Project;
