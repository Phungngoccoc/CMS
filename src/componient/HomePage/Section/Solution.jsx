import React, { useState } from "react";
import "../../Style/Solution.scss";
import arrow from "../../../assets/image/arrow-right.svg";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const Solution = React.memo((props) => {
  const navigate = useNavigate();
  const languageApp = useSelector((state) => state.language.language);
  const [dataSolution, setDataSolution] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [title, setTitle] = useState("");

  useEffect(() => {
    setDataSolution(props.data.item);
    setTitle(props.data.item.title[0].title);
  }, [languageApp, props]);

  const SwitchPage = (path) => {
    navigate(path);
  };
  const viewState = () => {};
  const renderBlockRight = (block) => {
    switch (block.type) {
      case "header":
        return <h5 key={block.id}>{block.data.text}</h5>;
      case "paragraph":
        return <p key={block.id}>{block.data.text}</p>;
      case "image":
        return (
          <img
            key={block.id}
            src={`${backendUrl}${block.data.file.url}`}
            alt={block.data.file?.title || "Image"}
          />
        );
      default:
        return null;
    }
  };
  const renderBlockLeft = (block) => {
    switch (block.type) {
      case "header":
        return <h2 key={block.id}>{block.data.text}</h2>;
      case "paragraph":
        return <p key={block.id}>{block.data.text}</p>;
      case "image":
        return (
          <img
            key={block.id}
            src={`${backendUrl}${block.data.file.url}`}
            alt={block.data.file?.title || "Image"}
          />
        );
      default:
        return null;
    }
  };

  return (
    dataSolution?.leftSolution?.block !== null && (
      <div className="section-solution">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 left">
              <h4 onClick={viewState}>{title}</h4>
              {dataSolution?.leftSolution?.blocks?.map(renderBlockLeft)}
              <a className="button" onClick={() => SwitchPage("about-us")}>
                {languageApp === "vi" ? "Liên hệ với chúng tôi" : "Contact Us"}
                <img src={arrow} className="ms-2" alt="arrow" />
              </a>
            </div>
            <div className="col-md-6 col-12 right">
              {dataSolution?.rightSolution?.blocks?.map(renderBlockRight)}
            </div>
          </div>
        </div>
      </div>
    )
  );
});

export default Solution;
