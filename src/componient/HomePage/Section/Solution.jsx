import React, { useState } from "react";
import '../../Style/Solution.scss';
import arrow from "../../../assets/image/arrow-right.svg"
const Solution = (props) => {
    const [playing, setPlaying] = useState(true);
    const [mute, setMute] = useState(true);

    return (
        <div className="section-solution">
            <div className="container">
                <div className="row">
                    <div className="col-6 left">
                        <h4>SOLUTIONS</h4>
                        <h2>One-stop IT Solution</h2>
                        <p>
                            As a leading software development company,
                            CMC Global assists clients of all sizes and
                            industries in implementing technology solutions
                            with our one-stop solution, including IT Outsourcing,
                            Digital Transformation, CMC Solutions with diverse
                            service models.
                        </p>
                        <button >Contact Us <img src={arrow} /></button>
                    </div>
                    <div className="col-6 right">
                        <h2>SOLUTIONS</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;
