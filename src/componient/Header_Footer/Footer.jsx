import React, { useEffect, useState } from "react";
import "../Style/Footer.scss"

const Footer = () => {
    return (
        <div className="section-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="text-center">
                            <h1>KemStore</h1>
                        </div>
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <span>
                                Địa chỉ:
                                <br />
                                - 115 Bà Triệu, HN - 024 7307 1886
                                <br />
                                - 103B1 Phạm Ngọc Thạch, HN - 024 3225 0228
                            </span><br />
                            <i class="fa fa-phone"></i>
                            <span>
                                Số điện thoại: 0899508684
                            </span><br />
                            <i class="fa fa-envelope"></i>
                            <span>
                                Email: cskh@oyster.com.vn
                            </span><br />
                            <div style={{ marginTop: "10px" }}
                            ><span>Bản quyền thuộc về <label style={{ color: "rgba(57,133,228,1)" }}>Công ty TNHH Chi An</label></span></div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-12">
                        <div className="row">
                            <div className="col-4 lh-lg">
                                <span style={{ color: "rgba(57,133,228,1)" }}> CHÍNH SÁCH</span><br />
                                <span>Trang chủ</span><br />
                                <span>Sản phẩm</span><br />
                                <span>ƯU ĐÃI</span><br />
                                <span>Giới thiệu</span><br />
                                <span>Hệ thống cửa hàng</span><br />
                            </div>
                            <div className="col-lg-4 col-12 lh-lg">
                                <span style={{ color: "rgba(57,133,228,1)" }}>HỖ TRỢ KHÁCH HÀNG</span>
                                <br />
                                <a href="#">Trang chủ</a>
                                <br />
                                <a href="#">Sản phẩm</a>
                                <br />
                                <a href="#">ƯU ĐÃI</a>
                                <br />
                                <a href="#">Giới thiệu</a>
                                <br />
                                <a href="#">Hệ thống cửa hàng</a>
                                <br />
                            </div>
                            <div className="col-lg-4 col-12">
                                <span>ĐĂNG KÝ NHẬN TIN</span>
                                <div className="news">
                                    <input type="text" placeholder="Nhập địa chỉ email" />
                                    <button>Đăng kí</button>
                                </div>
                                <div className="social_network">
                                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/facebook.png?v=443"></img>
                                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/zalo.png?v=443"></img>
                                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/instagram.png?v=443"></img>
                                    <img src="https://theme.hstatic.net/200000758093/1001198251/14/youtube.png?v=443"></img>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-12 mt-4">
                                <img src="https://theme.hstatic.net/200000758093/1001198251/14/logo_bct.png?v=443" style={{ width: "100%" }} />
                            </div>
                            <div className="col-lg-4 col-12 mt-4 d-flex align-items-center mt-4">
                                <img src="https://theme.hstatic.net/200000758093/1001198251/14/footer_trustbadge.jpg?v=443" style={{ width: "100%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
