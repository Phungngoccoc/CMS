import React, { useEffect } from "react";
import '../../Style/CareerBanner.scss';
import arrow from "../../../assets/image/arrow-right.svg"
const CareerBanner = React.memo(() => {
    return (
        <div className="careerbanner-container">
            <div className="career-banner-content">
                <div className="container">
                    <div className="row container">
                        <div className="col-12 col-md-10 pt-4 ">
                            <h1 className="col-md-8 col-12 ">Your dream job is here</h1>
                            <p className="col-md-8 col-12">CMC Global believes in the potential and greatness of every person.
                                We value learning, collaborating, and mutual support. Get yourself discovered.
                                Show us what you’ve got, and we‘ll contact you if there‘s a role that seems like a good match.
                            </p>
                            <a className="button" >Apply now <img src={arrow} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CareerBanner;
