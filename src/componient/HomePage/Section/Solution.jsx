import React, { useState } from "react";
import '../../Style/Solution.scss';
import arrow from "../../../assets/image/arrow-right.svg"
import wolrdIT from "../../../assets/image/world-it.webp"
import digital from "../../../assets/image/digital.webp"
import cmcSolution from "../../../assets/image/cmc-solutions.webp"
import model from "../../../assets/image/model.webp"
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
                        <h5>Wolrd-class IT Outsourcing</h5>
                        <p>
                            CMC Global’s IT Outsourcing solution is the key
                            for innovative and forward-thinking businesses
                            to keep pace with ever-changing IT infrastructure
                            and requirements without any third-party involvement.
                            We offer customized features in the process of
                            developing your ultimate software!
                        </p>
                        <img src={wolrdIT} />
                        <h5>Digital Transformation</h5>
                        <p>
                            We support employing top-advanced technologies to optimize
                            the efficiency and cost of your business operation process.
                            CMC Global is here to provide comprehensive business process
                            outsourcing to ease your management load in operation and in
                            crease work efficiency.
                        </p>
                        <img src={digital} />
                        <h5>CMC Solutions</h5>
                        <p>
                            Professional Advanced services of CMC Global range
                            from leveraging the effectiveness in management tasks
                            such as identifying ID information, and facial recognition
                            to Social Listening solutions for better insight analysis.
                        </p>
                        <img src={cmcSolution} />
                        <h5>Model</h5>
                        <p>
                            CMC Global offers various working methods for worldwide
                            entrepreneurs to choose the most efficient, compatible,
                            and cost-optimized for the desirable outcome.
                        </p>
                        <img src={model} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;
