import React, { useEffect, useState } from 'react';
import '../Style/Footer.scss';
import { useSelector } from 'react-redux';
import { STATUS, path } from '../../utils/constant';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchDataFooter } from '../../services/userServices';
const Footer = React.memo(() => {
    const dataHeaderRedux = useSelector((state) => state.dataHeader.dataHeader);
    const languageApp = useSelector((state) => state.language.language);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const navigate = useNavigate();
    const location = useLocation();
    const [dataFooter, setDataFooter] = useState(null);
    const SwitchPage = (pathName) => {
        const pathValues = Object.values(path);
        if (pathValues.includes(`/${pathName}`)) {
            navigate(pathName);
        }
    };
    const getDataFooter = async () => {
        try {
            const res = await fetchDataFooter();
            if (res.status < 400) {
                setDataFooter(res?.data?.data);
            }
        } catch (e) {
            if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                console.error(e.message);
            }
        }
    };
    useEffect(() => {
        getDataFooter();
    }, []);
    return (
        <>
            {languageApp && companyInfor?.data && (
                <div className="section-footer" style={{ backgroundColor: `${companyInfor?.data[0]?.color_footer}` }}>
                    <div className="container">
                        <div className="row up ps-3 ps-sm-0">
                            {dataFooter?.map((item, index) => {
                                if (item.status !== STATUS.PUBLISH) {
                                    return null;
                                }
                                const translation = item.translations.find(
                                    (trans) => trans.languages_code === languageApp,
                                );
                                const isActive = location.pathname === `/${item.slug}`;
                                return (
                                    <div key={index} className="col-12 col-sm-6 col-lg-3 ps-5 mb-sm-0 mb-4">
                                        <span
                                            onClick={() => {
                                                if (item.menu_child?.length === 0 && item.slug) {
                                                    SwitchPage(item.slug);
                                                }
                                            }}
                                            className={`sub-menu ${item.slug === 'about-us' || item.slug === 'careers' ? 'setwidth' : ''} ${isActive ? 'active' : ''}`}
                                            style={{ color: `${companyInfor?.data[0]?.color_text}` }}
                                        >
                                            {translation?.title || 'Untitled'}
                                        </span>

                                        {item.menu_child?.length > 0 && (
                                            <p className="menu-child">
                                                {item.menu_child.map((child, z) => {
                                                    if (child.item?.status === STATUS.PUBLISH) {
                                                        return child.item.title_language.map((lang) => {
                                                            if (lang.languages_code === languageApp) {
                                                                return (
                                                                    <React.Fragment key={z}>
                                                                        <span
                                                                            key={z}
                                                                            onClick={() => SwitchPage(child.item.slug)}
                                                                            style={{
                                                                                color: `${companyInfor?.data[0]?.color_text}`,
                                                                                cursor: 'pointer',
                                                                            }}
                                                                        >
                                                                            {lang.title}
                                                                        </span>{' '}
                                                                        <br />
                                                                    </React.Fragment>
                                                                );
                                                            }
                                                            return null;
                                                        });
                                                    }
                                                    return null;
                                                })}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="down d-lg-flex justify-content-between align-items-center">
                            <div className="social-network d-flex justify-content-center align-items-center">
                                {companyInfor?.data && (
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="item">
                                            <a href={companyInfor?.data[0]?.link_facebook} target="_blank">
                                                <i
                                                    className="fa fa-facebook"
                                                    style={{
                                                        color: `${companyInfor?.data[0]?.color_text}`,
                                                        cursor: 'pointer',
                                                    }}
                                                ></i>
                                            </a>
                                        </div>
                                        <div className="item mx-5">
                                            <a href={companyInfor?.data[0]?.link_youtube} target="_blank">
                                                <i
                                                    className="fa fa-youtube"
                                                    style={{
                                                        color: `${companyInfor?.data[0]?.color_text}`,
                                                        cursor: 'pointer',
                                                    }}
                                                ></i>
                                            </a>
                                        </div>
                                        <div className="item">
                                            <a href={companyInfor?.data[0]?.link_linkedin} target="_blank">
                                                <i
                                                    className="fa fa-linkedin"
                                                    style={{
                                                        color: `${companyInfor?.data[0]?.color_text}`,
                                                        cursor: 'pointer',
                                                    }}
                                                ></i>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            {companyInfor?.data && (
                                <div className="copy-right text-center mb-4">
                                    <span style={{ color: `${companyInfor?.data[0]?.color_text}`, cursor: 'pointer' }}>
                                        {companyInfor?.data[0]?.copyright}
                                    </span>
                                </div>
                            )}
                            <div className="mx-5"></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
});

export default Footer;
