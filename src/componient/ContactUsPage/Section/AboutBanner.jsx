import React, { useEffect, useState } from 'react';
import arrow from '../../../assets/image/arrow-right.svg';
import '../../Style/AboutBanner.scss';
import { STATUS } from '../../../utils/constant';
const AboutBanner = React.memo((props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    return (
        <>
            {props?.data?.item?.status === STATUS.PUBLISH && (
                <div
                    className="about-banner-container"
                    style={{ backgroundImage: `url(${backendUrl}/assets/${props.data.item.image})` }}
                >
                    <div className="container">
                        <div>
                            <h4>{props.data.item?.title}</h4>
                            <div className="d-flex alight-items-center __moving-text">
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                                <p className="text-nowrap mx-3 flex-shrink-0">{props.data.item?.content}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default AboutBanner;
