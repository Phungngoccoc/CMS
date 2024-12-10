import React, { useState } from "react";
import "../../Style/CaseStudies.scss";
import arrow from "../../../assets/image/arrow-right.svg";
import united2 from "../../../assets/image/Untitled-2.webp";

const CaseStudies = React.memo((props) => {
  const language = localStorage.getItem("language");
  return (
    <>
      {props?.data && (
        <div className="section-casestudies">
          <div className="container">
            <h4>{props.data.item?.header}</h4>
            <div className="row">
              <div className="col-sm-9 col-12 mb-4">
                <h1>{props.data.item?.title}</h1>
              </div>
              <div className="col-3 d-none d-sm-block mb-4">
                <div className="d-flex justify-content-end align-items-center">
                  <a className="button">
                    {language === "en" ? "View all" : "Xem thêm"}{" "}
                    <img src={arrow} />
                  </a>
                </div>
              </div>

              {props.data.item?.list?.map((ele, index) => (
                <div
                  key={index}
                  className="col-lg-3 col-sm-6 col-12 child-item"
                >
                  <div className="content">
                    <img src={`${import.meta.env.VITE_BACKEND_URL}/assets/${ele.item.image}`} />
                    <div>
                      <h5>{ele.item.title}</h5>
                      <p>{ele.item.content}</p>
                    </div>
                    <div className="content2">
                      <h5>{ele.item.title}</h5>
                      <p>{ele.item.content}</p>
                      <a className="button">
                        {language === "en" ? "Learn more" : "Tìm hiểu thêm"}{" "}
                        <img src={arrow} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default CaseStudies;
