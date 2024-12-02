import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Style/HomePage.scss"
import Category from "./Section/Category";

const HomePage = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        pauseOnHover: true,
        customPaging: (i) => (
            <div
                style={{
                    width: "30px",
                    height: "5px",
                    background: "gray",
                    margin: "-10px 0",
                    borderRadius: "20px",
                    transition: "background 0.3s",
                }}
            ></div>
        ),
        appendDots: (dots) => (
            <div
                style={{
                    display: "flex", // Hiển thị dots theo dạng ngang
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    gap: "10px",
                }}
            >
                {dots}
            </div>
        ),
    };
    return (
        <div className="homepage-container">
            <div className="slider">
                <Slider {...settings}>
                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/slider_1.jpg?v=443" alt="Slide 1" />
                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/slider_2.jpg?v=443" alt="Slide 2" />
                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/slider_3.jpg?v=443" alt="Slide 3" />
                </Slider>
            </div>
            <Category />
        </div>
    );
};

export default HomePage;
