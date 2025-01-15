import React, { useState, useEffect, useCallback } from 'react';
import '../../Style/VideoIntroduction.scss';
import Slider from 'react-slick';
import { STATUS } from '../../../utils/constant';
import Video from './Video';
import AOS from 'aos';
import 'aos/dist/aos.css';
const VideoIntroduction = React.memo((props) => {
    const CustomPrevArrow = ({ className, onClick }) => (
        <button className={`${className} custom-prev`} onClick={onClick} aria-label="Previous"></button>
    );

    const CustomNextArrow = ({ className, onClick }) => (
        <button className={`${className} custom-next`} onClick={onClick} aria-label="Next"></button>
    );

    const settings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        draggable: true,
    };
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);
    return (
        <div className="cover">
            <div className="position-relative video-introduce" data-aos="fade">
                {props?.data?.item?.status === STATUS.PUBLISH && (
                    <Slider {...settings} className="p-0 m-0">
                        {props?.data?.item?.videos?.map((item, index) => (
                            <Video url_video={item.directus_files_id} key={index} />
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
});

export default VideoIntroduction;
