import React, { useEffect, useState } from "react";
import '../../Style/AboutUs.scss'
import img1 from "../../../assets/image/about-img-1.svg"
import img2 from "../../../assets/image/about-img-2.svg"
import Slider from "react-slick";
const AboutUs = React.memo(() => {
    const [activeSection, setActiveSection] = useState(null);
    const CustomPrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <button
                className={`${className} custom-prev`}
                onClick={onClick}
                aria-label="Previous"
            >
                <i className="fa fa-arrow-left"></i>
            </button>
        );
    };

    const CustomNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <button
                className={`${className} custom-next`}
                onClick={onClick}
                aria-label="Next"
            >
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
        const targetId = event.currentTarget.getAttribute("data-target");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 97;

            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: "smooth"
            });

            setActiveSection(targetId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".section");
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

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [activeSection]);



    useEffect(() => {
        updateSlidesToShow();

        updateSlidesToShow();
        window.addEventListener("resize", updateSlidesToShow);
        return () => {
            window.removeEventListener("resize", updateSlidesToShow);
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

    return (
        <div className="about-us-container">
            <div className="container">
                <h4>ABOUT US</h4>
                <div className="row">
                    <div className="col-12 col-lg-3 left">
                        <ul>
                            <li
                                data-target="mission"
                                onClick={handleScrollToSection}
                                className={activeSection === "mission" ? "active" : ""}
                            >
                                <span className="number">01</span>
                                <span className="text">MISSION & VISION</span>
                            </li>
                            <li
                                data-target="milestone"
                                onClick={handleScrollToSection}
                                className={activeSection === "milestone" ? "active" : ""}
                            >
                                <span className="number">02</span>
                                <span className="text">MILESTONES</span>
                            </li>
                            <li
                                data-target="corevalue"
                                onClick={handleScrollToSection}
                                className={activeSection === "corevalue" ? "active" : ""}
                            >
                                <span className="number">03</span>
                                <span className="text">CORE VALUES</span>
                            </li>
                            <li
                                data-target="achievement"
                                onClick={handleScrollToSection}
                                className={activeSection === "achievement" ? "active" : ""}
                            >
                                <span className="number">04</span>
                                <span className="text">ACHIEVEMENTS</span>
                            </li>

                            <li
                                data-target="leadership"
                                onClick={handleScrollToSection}
                                className={activeSection === "leadership" ? "active" : ""}
                            >
                                <span className="number">05</span>
                                <span className="text">LEADERSHIP TEAM</span>
                            </li>
                            <li
                                data-target="award"
                                onClick={handleScrollToSection}
                                className={activeSection === "award" ? "active" : ""}
                            >
                                <span className="number">06</span>
                                <span className="text">AWARDS & CERTIFICATES</span>
                            </li>
                            <li
                                data-target="headquater"
                                onClick={handleScrollToSection}
                                className={activeSection === "headquater" ? "active" : ""}
                            >
                                <span className="number">07</span>
                                <span className="text">HEADQUARTER & BRANCHES</span>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-lg-9 right">
                        <div className="mission child" id="mission">
                            <h4>MISSION & VISION</h4> <br />
                            <span>Our Vision</span>
                            <p>With desire and passion, CMC Global aims to become one of the
                                largest IT service companies in Vietnam and among the top 10
                                in the region, we strive to be the leading provider of new
                                technology solutions, including Digital Transformation, AI, and Cloud
                            </p>
                            <span>Our Mission</span>
                            <p>
                                Establishing innovative world-class services for businesses on a global
                                footprint. We focus on continuously innovating our key values in human
                                resources quality, proficient working-operational process, cross-communication,
                                high global standard security quality, and updated, cutting-edge IT infrastructure.
                            </p>
                            <img src={img1} />
                        </div>
                        <div className="milestone child" id="milestone">
                            <h4>MILESTONES</h4> <br />
                            <span>We are Proudly A Member of CMC Corporation</span>
                            <label><b>2016</b></label>
                            <p>Starting with only 50 employees, CMC's Global's foundation was a division of CMC Corp specializing in providing IT outsourcing services.
                            </p>
                            <label><b>March 2017</b></label>
                            <p>
                                CMC Global Ltd. was established as the flagship business of CMC Corporation to bring high-tech products & IT services to the global market.
                            </p>
                            <label><b>August 2017</b></label>
                            <p>
                                CMC Global opened its 1st branch named CMC Japan in Yokohama, JP.
                            </p>
                            <label><b>April 2019</b></label>
                            <p>
                                The first Sao Khue Award was given to CMC Global, under the category of "IT Outsourcing Service".
                            </p>
                            <label><b>July 2019</b></label>
                            <p>
                                CMC Global opened a new office in Ho Chi Minh City, expanding its presence to the Southern part of Vietnam.
                            </p>
                            <img src={img1} />
                        </div>
                        <div className="corevalue child" id="corevalue">
                            <h4>CORE VALUES</h4> <br />
                            <p>Every action of CMC people comes from the heart of <b>Customer Centric</b>
                                with a restless desire and passion for <b>Creativity</b>. CMC people are determined
                                in mindset and actions to achieve the fastest pace, ,<b>Speed of Light</b> to inspire and
                                fulfill their <b>Commitments</b>. We follow the 4C Core values
                            </p>
                            <div className="row">
                                <div className="col-6 d-sm-block d-none">
                                    <p className="pe-5">CMC Global always prioritizes our customers and their interests with services tailored to specific needs and demands, offering the experience exceeding expectations. We believe that, by continuously increasing service values, we will receive long-term trust from our partners.</p>
                                    <span>Customer- Centricity</span>
                                </div>
                                <div className="col-6 text-end d-sm-block d-none">
                                    <p className="ps-5">Our fast service delivery in “the C- Speed of Light” and prompt response create CMC Global's competitive edge. We constantly work to provide our customers with excellent products and services in the shortest amount of time possible. Here at CMC Global, we believe Speed is the key to success.</p>
                                    <span>C-Speed</span>
                                </div>
                                <img src={img2} className="d-sm-block d-none" />
                                <div className="col-6 d-sm-block d-none">
                                    <span>Customer- Centricity</span>
                                    <p className="pe-5">CMC Global always prioritizes our customers and their interests with services tailored to specific needs and demands, offering the experience exceeding expectations. We believe that, by continuously increasing service values, we will receive long-term trust from our partners.</p>
                                </div>
                                <div className="col-6 text-end d-sm-block d-none">
                                    <span>C-Speed</span>
                                    <p className="ps-5">Our fast service delivery in “the C- Speed of Light” and prompt response create CMC Global's competitive edge. We constantly work to provide our customers with excellent products and services in the shortest amount of time possible. Here at CMC Global, we believe Speed is the key to success.</p>
                                </div>


                                <img src={img2} className="d-sm-none d-block" />
                                <div className="col-6 d-sm-none d-block pe-3">
                                    <span style={{ fontSize: "16px" }}>Customer - Centricity</span>
                                    <p className="">CMC Global always prioritizes our customers and their interests with services tailored to specific needs and demands, offering the experience exceeding expectations. We believe that, by continuously increasing service values, we will receive long-term trust from our partners.</p>

                                </div>
                                <div className="col-6 text-end d-sm-none d-block">
                                    <span style={{ fontSize: "16px" }}>C-Speed</span>
                                    <p className="">Our fast service delivery in “the C- Speed of Light” and prompt response create CMC Global's competitive edge. We constantly work to provide our customers with excellent products and services in the shortest amount of time possible. Here at CMC Global, we believe Speed is the key to success.</p>
                                </div>
                                <div className="col-6 d-sm-none d-block">
                                    <span style={{ fontSize: "16px" }}>Customer- Centricity</span>
                                    <p className="">CMC Global always prioritizes our customers and their interests with services tailored to specific needs and demands, offering the experience exceeding expectations. We believe that, by continuously increasing service values, we will receive long-term trust from our partners.</p>
                                </div>
                                <div className="col-6 text-end d-sm-none d-block">
                                    <span style={{ fontSize: "16px" }}>C-Speed</span>
                                    <p className="">Our fast service delivery in “the C- Speed of Light” and prompt response create CMC Global's competitive edge. We constantly work to provide our customers with excellent products and services in the shortest amount of time possible. Here at CMC Global, we believe Speed is the key to success.</p>
                                </div>
                            </div>

                        </div>
                        <div className="achievement child" id="achievement">
                            <h4>ACHIEVEMENTS</h4><br />
                            <span>CMC Global is Entrusted by Our Strategic Partners</span>
                            <div className="row mt-3">
                                <div className="col-lg-3 col-6 mb-2">
                                    <div className="partner">
                                        <img src={img1} />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="partner">
                                        <img src={img1} />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="partner">
                                        <img src={img1} />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <div className="partner">
                                        <img src={img1} />
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between mt-3 gap-1 flex-md-nowrap flex-wrap">
                                <div className="exp text-center p-2 mt-4 ">
                                    <div><span>31+</span></div>
                                    <div><label className="">Years Of Experience</label></div>
                                </div>
                                <div className="exp text-center p-2 mt-4">
                                    <div><span>31+</span></div>
                                    <div><label className="">Years Of Experience</label></div>
                                </div>
                                <div className="exp text-center p-2 mt-4">
                                    <div><span>31+</span></div>
                                    <div><label className="">Years Of Experience</label></div>
                                </div>
                                <div className="exp text-center p-2 mt-4">
                                    <div><span>31+</span></div>
                                    <div><label className="">Years Of Experience</label></div>
                                </div>
                                <div className="exp text-center p-2 mt-4">
                                    <div><span>31+</span></div>
                                    <div><label className="">Years Of Experience</label></div>
                                </div>
                            </div>
                        </div>
                        <div className="leadership child" id="leadership">
                            <h4>LEADERSHIP TEAM</h4>
                            <br />
                            <span>We are Proudly A Member of CMC Corporation</span>
                            <Slider {...settings}>
                                <div className="item2"></div>
                                <div className="item2"></div>
                                <div className="item2"></div>
                            </Slider>
                        </div>
                        <div className="award child" id="award">
                            <h4>AWARDS</h4>
                            <br />
                            <span>We provide Award-Winning Services</span>
                            <p>In 2019, 2020, and 2022, CMC Global won back-to-back Sao Khue Awards
                                for excellence in the "IT Outsourcing Service" category. Lies in the
                                Top 100 Vietnam best place to work, we are proud to be named "The
                                Best Company to Work for in Asia 2020" by HR Asia Magazine in 2020.
                                These honors are a well-deserved testament to our constant efforts
                                to improve performance and the caliber of our services for our partners.
                            </p>
                            <Slider {...settings2}>
                                <div className="p-2">
                                    <div className="item"></div>
                                </div>
                                <div className="p-2">
                                    <div className="item"></div>
                                </div>
                                <div className="p-2">
                                    <div className="item"></div>
                                </div>
                                <div className="p-2">
                                    <div className="item"></div>
                                </div>
                                <div className="p-2">
                                    <div className="item"></div>
                                </div>
                                <div className="p-2">
                                    <div className="item"></div>
                                </div>
                                <div className="p-2">
                                    <div className="item"></div>
                                </div>
                                <div className="p-2">
                                    <div className="item"></div>
                                </div>
                                <div className="p-2">
                                    <div className="item"></div>
                                </div>
                            </Slider>
                        </div>
                        <div className="headquater child" id="headquater">
                            <h4>HEADQUARTER & BRANCHES</h4><br />
                            <span>Our Global Presence</span>
                            <div className="row mt-4">
                                <div className="col-lg-3 col-6">
                                    <span style={{ fontSize: "16px" }}>Hanoi (Headquarter)</span>
                                    <p>7 - 10F, CMC Tower, 11 Duy Tan Street, Dich Vong Hau Ward, Cau Giay District</p>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <span style={{ fontSize: "16px" }}>Da Nang</span>
                                    <p>G8 Golden Building, 65 Hai Phong Street, Thach Thang Ward, Hai Chau District</p>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <span style={{ fontSize: "16px" }}>Ho Chi Minh City</span>
                                    <p>CMC Creative Space, Street 19, Tan Thuan Export Processing Zone, Tan Thuan Dong Ward, District 7</p>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <span style={{ fontSize: "16px" }}>Tokyo, Japan</span>
                                    <p>Sumitomo Fudosan Osaki Twin Bldg. East 7F, 5-1-18, Kitashinagawa, Shinagawa-ku, Tokyo, 141-0001</p>
                                </div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-lg-3 col-6">
                                    <span style={{ fontSize: "16px" }}>Tokyo, Japan</span>
                                    <p>CIRCLES with Shimazuyama, 5F, 2-5-9, Higashi-gotanda, Shinagawa-ku, Tokyo, 141-0022</p>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <span style={{ fontSize: "16px" }}>Osaka, Japan</span>
                                    <p>Midosuji Frontier Bldg. 4F, 1-13-22 Sonezakishinchi, Kita-ku, Osaka, 530-0002</p>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <span style={{ fontSize: "16px" }}>Singapore</span>
                                    <p>Hong Leong Building #09-01, 16 Raffles Quay, Singapore 048581</p>
                                </div>
                                <div className="col-lg-3 col-6">
                                    <span style={{ fontSize: "16px" }}>Seoul, Korea</span>
                                    <p>Signature Tower, West Wing, 100 Cheonggyecheon-ro, Jung-gu, Seoul, Korea</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default AboutUs;
