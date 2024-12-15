import React, { useEffect, useState } from 'react';
import '../../Style/AboutUs.scss';
import img1 from '../../../assets/image/about-img-1.svg';
import img2 from '../../../assets/image/about-img-2.svg';
import Slider from 'react-slick';
import { STATUS } from '../../../utils/constant';
import { useSelector } from 'react-redux';
const AboutUs = React.memo((props) => {
    const [activeSection, setActiveSection] = useState(null);
    const languageApp = useSelector((state) => state.language.language);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const isValidUrl = (url) => {
        try {
            new URL(url); // Thử tạo một đối tượng URL
            return true; // Nếu không có lỗi, thì URL hợp lệ
        } catch (e) {
            return false; // Nếu có lỗi, URL không hợp lệ
        }
    };

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
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    const [slidesToShow, setSlidesToShow] = useState(5);
    const updateSlidesToShow = () => {
        const width = window.innerWidth;

        if (width <= 480) {
            setSlidesToShow(2);
        } else if (width <= 768) {
            setSlidesToShow(3);
        } else if (width <= 1024) {
            setSlidesToShow(4);
        } else {
            setSlidesToShow(5);
        }
    };

    const handleScrollToSection = (event) => {
        const targetId = event.currentTarget.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 97;

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth',
            });

            setActiveSection(targetId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.section');
            let currentSection = null;

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    currentSection = section.id;
                }
            });

            if (currentSection && currentSection !== activeSection) {
                setActiveSection(currentSection);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeSection]);

    useEffect(() => {
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const settings2 = {
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

    const renderBlockLeft = (block) => {
        switch (block.type) {
            case 'header':
                return <span key={block.id}>{block.data.text}</span>;
            case 'paragraph':
                return <p key={block.id}>{block.data.text}</p>;
            case 'image':
                const imageUrlLeft = `${backendUrl}${block.data.file.url}`;
                return isValidUrl(imageUrlLeft) ? (
                    <img key={block.id} src={imageUrlLeft} alt={block.data.file?.title || 'Image'} />
                ) : null;
            default:
                return null;
        }
    };
    return (
        <>
            {props?.data && (
                <div className="about-us-container">
                    <div className="container">
                        <h4>{languageApp === 'en' ? 'ABOUT US' : 'Về chúng tôi'}</h4>
                        <div className="row">
                            <div className="col-12 col-lg-3 left">
                                <ul>
                                    {props.data?.map(
                                        (ele, index) =>
                                            ele?.item?.status === STATUS.PUBLISH && (
                                                <li
                                                    key={index}
                                                    data-target={`section-${index}`} // Cập nhật data-target để tham chiếu ID phần mục tiêu
                                                    onClick={handleScrollToSection}
                                                    className={activeSection === `section-${index}` ? 'active' : ''}
                                                >
                                                    <span className="number">{String(index + 1).padStart(2, '0')}</span>
                                                    <span className="text">{ele.item?.title || 'No Title'}</span>
                                                </li>
                                            ),
                                    )}
                                </ul>
                            </div>
                            <div className="col-12 col-lg-9 right">
                                {props.data?.map((ele, index) => {
                                    if (
                                        ele?.collection === 'block_about_us_detail' &&
                                        ele?.item?.status === STATUS.PUBLISH
                                    ) {
                                        return (
                                            <div
                                                className="mission child section"
                                                id={`section-${index}`}
                                                key={`block_${index}`}
                                            >
                                                {ele?.item?.content?.blocks?.map(renderBlockLeft)}
                                            </div>
                                        );
                                    } else if (ele?.item?.status === STATUS.PUBLISH) {
                                        return (
                                            <div
                                                className="child section"
                                                id={`section-${index}`}
                                                key={`award_${index}`}
                                            >
                                                <h4>{ele.item.title}</h4>
                                                <br />
                                                <span>{ele.item.header}</span>
                                                <Slider
                                                    {...settings2}
                                                    slidesToShow={Math.min(ele.item.images?.length, slidesToShow)}
                                                    infinite={ele.item.images?.length > 1}
                                                    arrows={ele.item.images?.length > slidesToShow}
                                                    autoplay={ele.item.images?.length > slidesToShow}
                                                    draggable={ele.item.images?.length > slidesToShow}
                                                >
                                                    {ele.item.images?.map((imgElem, imgIndex) => {
                                                        if (imgElem?.item?.status === STATUS.PUBLISH) {
                                                            return (
                                                                <div className="p-2" key={`image_${imgIndex}`}>
                                                                    <div
                                                                        className="item"
                                                                        style={{
                                                                            backgroundImage: `url(${backendUrl}/assets/${imgElem?.item?.image})`,
                                                                        }}
                                                                    />
                                                                </div>
                                                            );
                                                        }
                                                        return null;
                                                    })}
                                                </Slider>
                                            </div>
                                        );
                                    } else {
                                        return null;
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

export default AboutUs;
