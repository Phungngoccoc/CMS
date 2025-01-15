import React from 'react';
import '../../Style/AboutBanner.scss';
import { STATUS } from '../../../utils/constant';
import { useSelector } from 'react-redux';
const AboutBanner = React.memo((props) => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const languageApp = useSelector((state) => state.language.language);
    return (
        <>
            {props?.data?.item?.status === STATUS.PUBLISH && (
                <div
                    className="about-banner-container"
                    style={{ backgroundImage: `url(${backendUrl}/assets/${props.data.item.image})` }}
                >
                    <div className="container">
                        <div>
                            {props.data.item?.translations?.map((ele, z) => {
                                if (ele?.languages_code === languageApp) {
                                    return <h4 key={z}>{ele?.title}</h4>;
                                }
                            })}
                            <div className="d-flex alight-items-center __moving-text">
                                {props.data.item?.translations?.map((ele, z) => {
                                    if (ele?.languages_code === languageApp) {
                                        return (
                                            <p key={z} className="text-nowrap mx-3 flex-shrink-0">
                                                {ele?.content}
                                            </p>
                                        );
                                    }
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default AboutBanner;
