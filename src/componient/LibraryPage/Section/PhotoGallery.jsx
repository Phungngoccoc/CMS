import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import '../../Style/PhotoGallery.scss'
import united2 from '../../../assets/image/Untitled-2.webp'
import arrow from '../../../assets/image/arrow-right.svg'
import { useSelector } from "react-redux";
const PhotoGallery = React.memo(() => {
    const language = useSelector((state) => state.language.language)
    return (
        <div className="photo-gallery-container">
            <div className="container">
                <div className="d-flex flex-sm-row flex-column justify-content-between align-items-center mb-3" >
                    <h4 className="mb-sm-0 mb-4">Photo Gallery</h4>
                    <a className="button">
                        {language === "en" ? "Watch more" : "Xem thêm"}{" "}
                        <img src={arrow} />
                    </a>
                </div>
                <div className="row">
                    <div className="col-4 text-center mb-4">
                        <div className="photo-child">
                            <img src={united2} className="mb-2" />
                            <span>Khu XLNT THÀNH THÀNH CÔNG GD1</span>
                        </div>
                    </div>
                    <div className="col-4 text-center mb-4">
                        <div className="photo-child">
                            <img src={united2} className="mb-2" />
                            <span>Khu XLNT THÀNH THÀNH CÔNG GD1</span>
                        </div>
                    </div>
                    <div className="col-4 text-center mb-4">
                        <div className="photo-child">
                            <img src={united2} className="mb-2" />
                            <span>Khu XLNT THÀNH THÀNH CÔNG GD1</span>
                        </div>
                    </div>
                    <div className="col-4 text-center mb-4">
                        <div className="photo-child">
                            <img src={united2} className="mb-2" />
                            <span>Khu XLNT THÀNH THÀNH CÔNG GD1</span>
                        </div>
                    </div>
                    <div className="col-4 text-center mb-4">
                        <div className="photo-child">
                            <img src={united2} className="mb-2" />
                            <span>Khu XLNT THÀNH THÀNH CÔNG GD1</span>
                        </div>
                    </div>
                    <div className="col-4 text-center mb-4">
                        <div className="photo-child">
                            <img src={united2} className="mb-2" />
                            <span>Khu XLNT THÀNH THÀNH CÔNG GD1</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
});

export default PhotoGallery;
