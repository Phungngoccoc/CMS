import React from "react";
import "../../Style/Media.scss";
import arrow from "../../../assets/image/arrow-right.svg";
import { useSelector } from "react-redux";

const Media = React.memo((props) => {
  const languageApp = useSelector((state) => state.language.language);

  return (
    <>
      {props?.data?.item?.contents && languageApp && (
        <div className="section-media">
          <div className="container">
            <h4>{props.data.item?.title}</h4>
            <h1>{props.data.item?.header}</h1>
            <div className="row">
              <div className="col-md-6 col-12 left">
                <img
                  src={`${import.meta.env.VITE_BACKEND_URL}/assets/${
                    props.data.item.contents[0].item.image
                  }`}
                />
                <a href="/">{props.data.item.contents[0].item.content_main}</a>
                <div className="date">
                  <span>
                    {new Date(
                      props.data.item.contents[0].item.date_created
                    ).toLocaleDateString(
                      languageApp === "en" ? "en-US" : "vi-VN"
                    )}
                  </span>
                </div>
                <p>{props.data.item.contents[0].item.post_basic}</p>
              </div>
              <div className="col-md-6 col-12 right">
                <div className="row mb-4 child-post">
                  <div className="col-5">
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}/assets/${
                        props.data.item.contents[1].item.image
                      }`}
                    />
                  </div>
                  <div className="col-7 d-flex flex-column justify-content-between mb-4">
                    <a href="/">
                      {props.data.item.contents[1].item.content_main}
                    </a>
                    <div className="date">
                      <span>
                        {" "}
                        {new Date(
                          props.data.item.contents[1].item.date_created
                        ).toLocaleDateString(
                          languageApp === "en" ? "en-US" : "vi-VN"
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mb-4 child-post">
                  <div className="col-5">
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}/assets/${
                        props.data.item.contents[2].item.image
                      }`}
                    />
                  </div>
                  <div className="col-7 d-flex flex-column justify-content-between mb-4">
                    <a href="/">
                      {props.data.item.contents[2].item.content_main}
                    </a>
                    <div className="date">
                      <span>
                        {" "}
                        {new Date(
                          props.data.item.contents[2].item.date_created
                        ).toLocaleDateString(
                          languageApp === "en" ? "en-US" : "vi-VN"
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row mb-4 child-post">
                  <div className="col-5">
                    <img
                      src={`${import.meta.env.VITE_BACKEND_URL}/assets/${
                        props.data.item.contents[3].item.image
                      }`}
                    />
                  </div>
                  <div className="col-7 d-flex flex-column justify-content-between mb-4">
                    <a href="/">
                      {props.data.item.contents[3].item.content_main}
                    </a>
                    <div className="date">
                      <span>
                        {" "}
                        {new Date(
                          props.data.item.contents[3].item.date_created
                        ).toLocaleDateString(
                          languageApp === "en" ? "en-US" : "vi-VN"
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <a className="button">
                  {languageApp === "en" ? "View all posts" : "Xem thêm"}{" "}
                  <img src={arrow} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Media;
