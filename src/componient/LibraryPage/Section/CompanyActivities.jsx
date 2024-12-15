import React, { useEffect, useState } from 'react';
import '../../Style/CompanyActivities.scss';
import united2 from '../../../assets/image/Untitled-2.webp';
import arrow from '../../../assets/image/arrow-right.svg';
import { useSelector } from 'react-redux';
import { STATUS } from '../../../utils/constant';
import { useNavigate } from 'react-router-dom';

const isValidUrl = (string) => {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
};

const CompanyActivities = React.memo((props) => {
    const language = useSelector((state) => state.language.language);
    const navigate = useNavigate();
    // Lấy tối đa 6 phần tử từ mảng
    const itemsToRender = props?.data?.item?.list?.slice(0, 3);
    const SwitchPage = (path) => {
        navigate(path);
    };
    const handleClick = (title) => {
        navigate(`/company-activity/${encodeURIComponent(title)}`);
    };
    return (
        <>
            {props?.data?.item?.status === STATUS.PUBLISH && (
                <div className="library-container">
                    <div className="container">
                        <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center mb-3">
                            <h4 className="mb-sm-0 mb-4">{props.data.item?.title}</h4>
                            <a
                                className="button"
                                onClick={() => {
                                    SwitchPage('/company-activity');
                                }}
                            >
                                {language === 'en' ? 'Watch more' : 'Xem thêm'} <img src={arrow} alt="Arrow" />
                            </a>
                        </div>
                        <div className="row">
                            {itemsToRender?.map((ele, index) => {
                                return (
                                    ele?.item?.status === STATUS.PUBLISH && (
                                        <div className="col-lg-4 col-sm-6 col-12 child-item" key={index}>
                                            <div className="content">
                                                <img
                                                    src={
                                                        isValidUrl(ele.item.image)
                                                            ? ele.item.image
                                                            : `${import.meta.env.VITE_BACKEND_URL}/assets/${ele.item.image}`
                                                    }
                                                    alt={ele.item?.title}
                                                />
                                                <div>
                                                    <h5 onClick={() => handleClick(ele?.item?.id)}>
                                                        {ele.item?.title}
                                                    </h5>
                                                    <p>{ele.item?.content}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default CompanyActivities;
