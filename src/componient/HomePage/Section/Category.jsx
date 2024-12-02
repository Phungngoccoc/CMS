import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../Style/Category.scss"

const Category = () => {
    const [isMobile, setIsMobile] = useState({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false
    });

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 900 && window.innerWidth > 600) {
                setIsMobile({
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true
                });
            } else if (window.innerWidth <= 600) {
                setIsMobile({
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: true
                });
            } else {
                setIsMobile({
                    slidesToShow: 8,
                    slidesToScroll: 1,
                    arrows: false
                });
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings2 = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile.slidesToShow,
        slidesToScroll: isMobile.slidesToScroll,
        arrows: isMobile.arrows,
    };

    return (
        <div className="category-section pt-5">
            <h2 className="text-center">CATEGORY</h2>
            <Slider {...settings2}>
                <div className="cate-item">
                    <img w-sm-100 className="" src="https://theme.hstatic.net/200000758093/1001198251/14/season_coll_1_img_large.png?v=443" alt="Category 1" />
                    <span>Đầm</span>
                    <label>265 sản phẩm</label>
                </div>
                <div className="cate-item">
                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/season_coll_1_img_large.png?v=443" alt="Category 2" />
                    <span>Đầm</span>
                    <label>265 sản phẩm</label>
                </div>
                <div className="cate-item">
                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/season_coll_1_img_large.png?v=443" alt="Category 3" />
                    <span>Đầm</span>
                    <label>265 sản phẩm</label>
                </div>
                <div className="cate-item">
                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/season_coll_1_img_large.png?v=443" alt="Category 4" />
                    <span>Đầm</span>
                    <label>265 sản phẩm</label>
                </div>
                <div className="cate-item">
                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/season_coll_1_img_large.png?v=443" alt="Category 5" />
                    <span>Đầm</span>
                    <label>265 sản phẩm</label>
                </div>
                <div className="cate-item">
                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/season_coll_1_img_large.png?v=443" alt="Category 6" />
                    <span>Đầm</span>
                    <label>265 sản phẩm</label>
                </div>
                <div className="cate-item">
                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/season_coll_1_img_large.png?v=443" alt="Category 7" />
                    <span>Đầm</span>
                    <label>265 sản phẩm</label>
                </div>
                <div className="cate-item">
                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/season_coll_1_img_large.png?v=443" alt="Category 8" />
                    <span>Đầm</span>
                    <label>265 sản phẩm</label>
                </div>
            </Slider>
        </div>
    );
};

export default Category;
