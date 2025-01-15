import React, { useEffect, useState } from 'react';
import '../../Style/HomeBanner.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
const HomeBanner = React.memo((props) => {
    const item = props?.data?.block?.item;
    const imgUrl = `${import.meta.env.VITE_BACKEND_URL}/assets/${item?.image}`;
    const content = props?.data?.ele?.content ?? null;
    const contents = Array.from({ length: 10 }, () => content);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 160,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);
    return (
        <>
            {props?.data && (
                <div
                    className="about-banner-container"
                    style={{ backgroundImage: `url(${imgUrl})`, padding: '0 0px' }}
                    data-aos="fade-up"
                >
                    <div className="container">
                        <div className="d-flex alight-items-center __moving-text pt-3">
                            {contents.map((item, index) => (
                                <p className="text-nowrap mx-3 flex-shrink-0" key={index}>
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default HomeBanner;
