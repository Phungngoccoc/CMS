import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import '../../Style/Award.scss';
import { useSelector } from 'react-redux';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Award = React.memo((props_all) => {
    const [slidesToShow, setSlidesToShow] = useState(5);
    const languageApp = useSelector((state) => state.language.language);

    const updateSlidesToShow = () => {
        const width = window.innerWidth;
        if (width < 240) {
            setSlidesToShow(1);
        } else if (width <= 480) {
            setSlidesToShow(2);
        } else if (width <= 913) {
            setSlidesToShow(3);
        } else if (width <= 1024) {
            setSlidesToShow(4);
        } else {
            setSlidesToShow(5);
        }
    };

    useEffect(() => {
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);
    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 200,
            easing: 'ease-in-out',
            once: false,
        });
    }, []);
    const CustomPrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <button className={`${className} custom-prev`} onClick={onClick} aria-label="Previous">
                <i className="fa fa-arrow-left"></i>
            </button>
        );
    };

    const CustomNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <button className={`${className} custom-next`} onClick={onClick} aria-label="Next">
                <i className="fa fa-arrow-right"></i>
            </button>
        );
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <>
            {props_all?.data && languageApp && (
                <div className="section-award" data-aos="fade-up">
                    <div className="container">
                        <h4>{props_all.data.ele?.title}</h4>
                        <div className="awards-slider">
                            <Slider {...settings}>
                                {props_all.data.block.item.images.map((item, index) => {
                                    const imageUrl = `${import.meta.env.VITE_BACKEND_URL}/assets/${item.directus_files_id}`;
                                    return imageUrl ? (
                                        <div key={index} className="item">
                                            <img src={imageUrl} alt={`Award Image ${index}`} />
                                        </div>
                                    ) : (
                                        <div key={index} className="item">
                                            <p>Image not available</p>
                                        </div>
                                    );
                                })}
                            </Slider>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default Award;
