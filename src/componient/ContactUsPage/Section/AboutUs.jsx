import React, { useEffect, useState } from 'react';
import '../../Style/AboutUs.scss';
import Slider from 'react-slick';
import { STATUS } from '../../../utils/constant';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser';
const AboutUs = React.memo((props) => {
    const [activeSection, setActiveSection] = useState(null);
    const languageApp = useSelector((state) => state.language.language);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
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
        // infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };
    const settings1 = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
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
        if (block?.data === null || block?.data === undefined) return null;
        switch (block.type) {
            case 'header':
                return (
                    <span className="my-2" key={block.id}>
                        {parse(block.data.text)}
                    </span>
                );
            case 'paragraph':
                return (
                    <p className="my-1" key={block.id}>
                        {parse(block.data.text)}
                    </p>
                );
            case 'image':
                const imageUrlLeft = `${backendUrl}${block.data.file.url}`;
                return imageUrlLeft ? (
                    <React.Fragment key={block?.id}>
                        <img
                            className="mt-2 mb-3"
                            key={block.id}
                            src={imageUrlLeft}
                            alt={block.data.file?.title || 'Image'}
                        />
                        <p className="text-center">{parse(block?.data?.caption)}</p>
                    </React.Fragment>
                ) : null;
            case 'raw':
                return <div dangerouslySetInnerHTML={{ __html: block?.data?.html }} className="video_nhung"></div>;
            case 'nestedlist':
                if (block?.data?.style === 'unordered') {
                    return (
                        <ul className="mt-3">
                            {block.data?.items?.map((ele, z) => {
                                return <li key={z}>{ele?.content}</li>;
                            })}
                        </ul>
                    );
                } else if (block?.data?.style === 'ordered') {
                    return (
                        <ol className="mt-3">
                            {block.data?.items?.map((ele, z) => {
                                return <li key={z}>{ele?.content}</li>;
                            })}
                        </ol>
                    );
                }
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
                                    {props.data
                                        ?.filter((ele) => ele?.item?.status === STATUS.PUBLISH)
                                        ?.map((ele, index) => {
                                            const translation = ele?.item?.translations?.find(
                                                (item) => item?.languages_code === languageApp,
                                            );
                                            if (translation) {
                                                return (
                                                    <li
                                                        key={`${index}`}
                                                        data-target={`section-${index}`}
                                                        onClick={handleScrollToSection}
                                                        className={activeSection === `section-${index}` ? 'active' : ''}
                                                    >
                                                        <span className="number">
                                                            {String(index + 1).padStart(2, '0')}
                                                        </span>
                                                        <span className="text">{translation?.title || ''}</span>
                                                    </li>
                                                );
                                            }
                                            return null;
                                        })}
                                </ul>
                            </div>
                            <div className="col-12 col-lg-9 right">
                                {props.data?.map((ele, index) => {
                                    const { collection, item } = ele;

                                    if (item?.status !== STATUS.PUBLISH) return null;

                                    if (collection === 'block_feature_project_detail') {
                                        return item?.translations?.map((e, z) => {
                                            if (e.languages_code === languageApp) {
                                                return (
                                                    <div
                                                        className="mission child section"
                                                        id={`section-${index}`}
                                                        key={`block_${z}`}
                                                    >
                                                        {e?.content?.blocks?.map(renderBlockLeft)}
                                                    </div>
                                                );
                                            }
                                            return null;
                                        });
                                    } else if (collection === 'block_feature_project_leader') {
                                        return (
                                            <div
                                                key={index}
                                                className="child section leadership p-0 pb-5"
                                                id={`section-${index}`}
                                            >
                                                {item?.translations?.map((e, z) => {
                                                    if (e.languages_code === languageApp) {
                                                        return (
                                                            <React.Fragment key={z}>
                                                                <div className="px-5 pt-5">
                                                                    <h4>{e?.title}</h4>
                                                                    <br />
                                                                    <span>{e?.header}</span>
                                                                </div>
                                                            </React.Fragment>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                                {item?.contents?.length > 0 && (
                                                    <Slider
                                                        {...settings}
                                                        infinite={
                                                            item?.contents?.filter(
                                                                (leader) => leader?.item?.status === STATUS.PUBLISH,
                                                            ).length > 1
                                                        }
                                                        className="mt-3 px-lg-5 px-md-5 px-2"
                                                    >
                                                        {item?.contents?.map((leader, z) => {
                                                            if (leader?.item?.status === STATUS.PUBLISH) {
                                                                return (
                                                                    <div className="p-2 m-0 item" key={z}>
                                                                        <div className="row align-items-center d-flex flex-lg-row flex-column-reverse p-0">
                                                                            <div className="content col-lg-6 col-12">
                                                                                <div className="bg d-flex text-lg-start text-center flex-column align-items-lg-start align-items-center justify-content-center ps-lg-5 ps-0">
                                                                                    {leader?.item?.translations?.map(
                                                                                        (el, ind) => {
                                                                                            if (
                                                                                                el.languages_code ===
                                                                                                languageApp
                                                                                            ) {
                                                                                                return (
                                                                                                    <React.Fragment
                                                                                                        key={ind}
                                                                                                    >
                                                                                                        <span>
                                                                                                            {
                                                                                                                el?.full_name
                                                                                                            }
                                                                                                        </span>
                                                                                                        <p className="mt-3">
                                                                                                            {
                                                                                                                el?.position
                                                                                                            }
                                                                                                        </p>
                                                                                                    </React.Fragment>
                                                                                                );
                                                                                            }
                                                                                            return null;
                                                                                        },
                                                                                    )}
                                                                                </div>
                                                                            </div>
                                                                            <div
                                                                                className="image col-lg-6 col-12 m-0"
                                                                                style={{
                                                                                    backgroundImage: `url(${backendUrl}/assets/${leader?.item?.images})`,
                                                                                }}
                                                                            />
                                                                        </div>
                                                                        <ul className="circle m-0">
                                                                            {Array.from({ length: 11 }).map((_, i) => (
                                                                                <li key={i}></li>
                                                                            ))}
                                                                        </ul>
                                                                    </div>
                                                                );
                                                            }
                                                            return null;
                                                        })}
                                                    </Slider>
                                                )}
                                            </div>
                                        );
                                    } else {
                                        return (
                                            <div
                                                className="child section"
                                                id={`section-${index}`}
                                                key={`award_${index}`}
                                            >
                                                {item?.translations?.map((e, z) => {
                                                    if (e.languages_code === languageApp) {
                                                        return (
                                                            <React.Fragment key={z}>
                                                                <h4>{e?.title}</h4>
                                                                <br />
                                                                <span>{e?.header}</span>
                                                            </React.Fragment>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                                {item?.images?.filter(
                                                    (imgElem) => imgElem?.item?.status === STATUS.PUBLISH,
                                                ).length > 0 && (
                                                    <Slider
                                                        {...settings2}
                                                        slidesToShow={Math.min(
                                                            item.images.filter(
                                                                (imgElem) => imgElem?.item?.status === STATUS.PUBLISH,
                                                            ).length,
                                                            slidesToShow,
                                                        )}
                                                        infinite={item.images.length > slidesToShow}
                                                        arrows={item.images.length > slidesToShow}
                                                        autoplay={item.images.length > slidesToShow}
                                                        draggable={item.images.length > slidesToShow}
                                                    >
                                                        {item.images.map((imgElem, imgIndex) => (
                                                            <div className="p-1" key={`images_${imgIndex}`}>
                                                                <div
                                                                    className="item"
                                                                    style={{
                                                                        backgroundImage: `url(${backendUrl}/assets/${imgElem?.item?.image})`,
                                                                    }}
                                                                />
                                                            </div>
                                                        ))}
                                                    </Slider>
                                                )}
                                            </div>
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

export default AboutUs;
