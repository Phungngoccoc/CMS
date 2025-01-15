import React, { useEffect, useState } from 'react';
import '../../Style/BannerCoporation.scss';
import { useSelector } from 'react-redux';
import { STATUS } from '../../../utils/constant';
import img from '../../../assets/image/calendar.svg';
const BannerFeaturedProject = React.memo((props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const languageApp = useSelector((state) => state.language.language);
    return (
        <>
            {props?.data?.item?.status === STATUS.PUBLISH && (
                <div
                    className="coporation-banner-container"
                    style={{ backgroundImage: `url(${backendUrl}/assets/${props.data.item.image})` }}
                >
                    <div className="cover px-2">
                        <div className="content d-flex justify-content-between flex-md-row flex-column align-items-md-left align-items-center">
                            {props.data.item?.translations?.map((ele, index) => {
                                if (ele?.languages_code === languageApp) {
                                    return (
                                        <React.Fragment key={index}>
                                            <div className="detail d-flex flex-column justify-content-center">
                                                <h1>{ele?.title}</h1>
                                                <p>{ele?.content}</p>
                                            </div>
                                            {props?.data?.item?.image_overlay && (
                                                <div className="logo d-flex justify-content-end">
                                                    <img
                                                        src={`${backendUrl}/assets/${props.data.item.image_overlay}`}
                                                        alt="company-logo"
                                                    />
                                                </div>
                                            )}
                                        </React.Fragment>
                                    );
                                }
                            })}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default BannerFeaturedProject;
