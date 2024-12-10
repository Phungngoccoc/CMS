import React, { useState } from "react";
import "../../Style/Testimonials.scss";
import UK from "../../../assets/image/IT-web.webp";
import US from "../../../assets/image/US.webp";
import Sing from "../../../assets/image/Singapore.webp";

const Testimonials = React.memo((props) => {
  const [src, setSrc] = useState(UK);
  const [fadeClass, setFadeClass] = useState("");
  const [content, setContent] = useState({
    span: "IT/web startup",
    p1: "“We landed CMC Global via their ads while coming to trouble in processing our project with a Ukraine vendor. We were surprised at how quickly their team was able to grasp our problems and showed us the right direction. The CMC Global team even surprised us for the second time when releasing an MVP in just 4 weeks. Very happy with the result, so we decided to proceed with our entire scope of work with CMC Global. There has been great progress!”",
    p2: "CEO of an IT/web startup from the United Kingdom.",
  });

  const handleCountryClick = (country) => {
    setFadeClass("fade-out");
    setTimeout(() => {
      if (country === "UK") {
        setSrc(UK);
        setContent({
          span: "IT/web startup",
          p1: "“We landed CMC Global via their ads while coming to trouble in processing our project with a Ukraine vendor. We were surprised at how quickly their team was able to grasp our problems and showed us the right direction. The CMC Global team even surprised us for the second time when releasing an MVP in just 4 weeks. Very happy with the result, so we decided to proceed with our entire scope of work with CMC Global. There has been great progress!”",
          p2: "CEO of an IT/web startup from the United Kingdom.",
        });
      } else if (country === "US") {
        setSrc(US);
        setContent({
          span: "Fintech",
          p1: "“For every single problem, the CMC Global team came up with a solution, a great one! I’ve gone to other places and they said this is impossible, but the team pushed through and made it work!”",
          p2: "CEO of a Fintech company from United States.",
        });
      } else if (country === "Sing") {
        setSrc(Sing);
        setContent({
          span: "E-commerce platform in Singapore",
          p1: "“It was a relaxing project for us as CMC Global handled it very well. They deployed a team of professional, smart, knowledgeable, and experienced engineers who worked well in sync with my team and there was almost no misunderstanding. The team was absolutely amazing at helping the two sides to understand each other’s languages for effective communication.”",
          p2: "PROJECT MANAGER from a growing E-commerce platform in Singapore",
        });
      }
      setFadeClass("");
    }, 100);
  };

  return (
    <div className="section-testimonials">
      <div className="container">
        <h4>TESTIMONIALS</h4>
        <h1>Voice of our customers</h1>
        <div className="row">
          <div className="col-sm-6 col-12 left">
            <img
              src={src}
              alt="testimonial"
              className={`img-fade ${fadeClass}`}
            />
          </div>
          <div className={`col-sm-6 col-12 right img-fade ${fadeClass}`}>
            <span>{content.span}</span>
            <p>{content.p1}</p>
            <p>{content.p2}</p>
          </div>
          <div className="col-12 row bottom mt-4 text-center">
            <div className="col-lg-4 col-12 px-3">
              <div className="country" onClick={() => handleCountryClick("UK")}>
                <h1>IT/Web</h1>
                <span>U.K</span>
              </div>
            </div>
            <div className="col-lg-4 col-12 px-3">
              <div className="country" onClick={() => handleCountryClick("US")}>
                <h1>Fintech</h1>
                <span>U.S</span>
              </div>
            </div>
            <div className="col-lg-4 col-12 px-3">
              <div
                className="country"
                onClick={() => handleCountryClick("Sing")}
              >
                <h1>E-commerce</h1>
                <span>Singapore</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Testimonials;
