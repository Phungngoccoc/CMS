import React, { useEffect, useState } from "react";
import arrow from '../../../assets/image/arrow-right.svg'
import '../../Style/AboutBanner.scss'
const AboutBanner = React.memo(() => {
    return (
        <div className="about-banner-container">
            <div className="container">
                <div>
                    <h4>ABOUT CMC GLOBAL</h4>
                    <div className="d-flex alight-items-center __moving-text">
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                        <p className="text-nowrap mx-3 flex-shrink-0">Aspire to inspire the Digital World</p>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default AboutBanner;
