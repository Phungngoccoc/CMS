import React, { useEffect, useState } from "react";
import arrow from "../../../assets/image/arrow-right.svg";
import "../../Style/Form.scss";
import { useSelector } from "react-redux";
import axios from "axios";

const Form = React.memo((props) => {
  const [dataCompany, setDataCompany] = useState(null);
  const languageApp = useSelector((state) => state.language.language);

  useEffect(() => {
    const fetch = async () => {
      const url = "api/items/company_infor?fields=*,translations.*";
      const res = await axios.get(url);

      if (res && res?.status < 400 && res.data) {
        const data = res.data;
        setDataCompany(data.data[0]);
      }
    };
    fetch();
  }, [props]);

  return (
    <>
      {props?.data && languageApp && dataCompany && (
        <div className="form-container">
          <div className="container">
            <h4>{props.data.item.title}</h4>
            <div className="row">
              <div className="col-sm-6 col-lg-4 col-12 left mb-2">
                {dataCompany.translations &&
                  dataCompany.translations.length > 0 ? (
                  dataCompany.translations.map((item, index) => {
                    // console.log(item.languages_code);
                    if (item.languages_code === languageApp) {
                      const address =
                        languageApp === "en" ? "Address" : "Địa chỉ";
                      const phone =
                        languageApp === "en" ? "Phone" : "Điện thoại";
                      return (
                        <div key={index}>
                          <p>
                            {address}: {item.company_name}
                          </p>
                          <p>
                            {phone}: {dataCompany.phone}
                            <br />
                            Fax: {dataCompany.fax}
                          </p>
                          <p>
                            Website: {dataCompany.website_url}
                            <br />
                            Email: {dataCompany.email}
                          </p>
                        </div>
                      );
                    }
                    return null;
                  })
                ) : (
                  <p>
                    {languageApp === "en"
                      ? "No translation available"
                      : "Không có bản dịch"}
                  </p>
                )}

                <div className="network">
                  <span>
                    {languageApp === "en" ? "Social Network" : "Mạng xã hội"}
                  </span>
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <div className="item mx-4">
                      <i className="fa fa-facebook"></i>
                    </div>
                    <div className="item mx-4">
                      <i className="fa fa-twitter"></i>
                    </div>
                    <div className="item mx-4">
                      <i className="fa fa-linkedin"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4 col-12 right">
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder={languageApp === "en" ? "Họ tên" : "Full name"}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder={languageApp === "en" ? "Phone" : "Điện thoại"}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    placeholder={languageApp === "en" ? "Content" : "Nội dung"}
                    rows="3"
                  ></textarea>
                </div>
                <div className="">
                  <a className="button">
                    {languageApp === "en" ? "Send message" : "Gửi tin nhắn"}{" "}
                    <img src={arrow} />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-12">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29788.142266095325!2d105.71534007850447!3d21.051972248798812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134545a46fd602d%3A0xf6c8f336c5b79643!2sNational%20Sports%20Training%20Center!5e0!3m2!1sfr!2s!4v1733401623116!5m2!1sfr!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default Form;
