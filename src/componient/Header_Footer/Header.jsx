import React, { useEffect } from 'react';
import '../Style/Header.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setEnglish, setVietnamese } from '../../features/languageSlice';
import { useState } from 'react';
import { getAction, getState, path } from '../../utils/constant';
import { getDataHeader } from '../../features/headerSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { STATUS } from '../../utils/constant';
import { isShowVideo } from '../../features/isShowVideoSlice';
import CustomDropdown from './DropDown';

const Header = React.memo((props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const languageApp = useSelector((state) => state.language.language);
    const dataHeaderRedux = useSelector((state) => state.dataHeader.dataHeader);
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const currentPage = useSelector((state) => state[getState[location.pathname]]?.[getState[location.pathname]]);
    const isShow = useSelector((state) => state.isShowVideo.isShow);
    const [listMenu, setListMenu] = useState([]);
    const [isShowSelect, setOffcanvasOpen] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const toggleMenu = () => {
        setIsOpenMenu((prev) => !prev);
    };

    const toggleSubMenu = (menuName) => {
        setOpenSubMenu((prev) => (prev === menuName ? null : menuName));
    };

    useEffect(() => {
        if (dataHeaderRedux !== null) {
            props.setEnable();
            setListMenu(dataHeaderRedux);
            return;
        } else {
            dispatch(getDataHeader());
            props.setDisable();
        }
        // props.setEnable();
    }, [dataHeaderRedux]);

    useEffect(() => {
        try {
            const valuePath = Object.values(path);
            if (valuePath.includes(location.pathname)) {
                if (!currentPage?.data) {
                    dispatch(getAction[location.pathname]);
                }
                if (location.pathname === path['/'] || location.pathname === path.HOME) {
                    if (isShow) {
                    } else {
                        dispatch(isShowVideo(false));
                    }
                }
            }
        } catch (err) {
            if (import.meta.env.VITE_ENVIRONMENT === 'DEVELOPMENT') {
                console.error(err.message);
            }
        }
    }, [location.pathname]);

    const SwitchPage = (pathName) => {
        const pathValues = Object.values(path);
        if (pathValues.includes(`/${pathName}`)) {
            setIsOpenMenu(false);
            navigate(pathName);
        }
    };

    const handleLanguageChange = (e) => {
        const selectedLanguage = e.target.value;
        if (selectedLanguage === 'en') {
            dispatch(setEnglish());
        } else if (selectedLanguage === 'vi') {
            dispatch(setVietnamese());
        }
    };
    return (
        <>
            {listMenu && (
                <>
                    <div className={`home-menu ${isOpenMenu ? 'active' : 'unactive'} d-lg-none`}>
                        <div className="left-menu">
                            <ul
                                className="menu-main-menu"
                                style={{ backgroundColor: `${companyInfor?.data[0]?.color_header}` }}
                            >
                                {listMenu?.map((item, index) => {
                                    if (item.status !== STATUS.PUBLISH) {
                                        return null;
                                    }
                                    const translation = item.translations.find(
                                        (trans) => trans.languages_code === languageApp,
                                    );
                                    const isActive = location.pathname === `/${item.slug}`;
                                    return (
                                        <li
                                            key={index}
                                            onClick={() => {
                                                if (item.menu_child?.length === 0 && item.slug) {
                                                    SwitchPage(item.slug);
                                                }
                                            }}
                                            className={`sub-menu ${item.slug === 'about-us' || item.slug === 'careers' ? 'setwidth' : ''} ${isActive ? 'active' : ''}`}
                                            style={{ color: `${companyInfor?.data[0]?.color_text}`, cursor: 'pointer' }}
                                        >
                                            {item.menu_child?.length > 0 ? (
                                                <span
                                                    className="a-icon"
                                                    onClick={() => toggleSubMenu(translation?.title)}
                                                    style={{ color: `${companyInfor?.data[0]?.color_text}` }}
                                                >
                                                    {translation?.title || 'Untitled'}
                                                </span>
                                            ) : (
                                                <span
                                                    style={{
                                                        color: `${companyInfor?.data[0]?.color_text}`,
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    {translation?.title || 'Untitled'}
                                                </span>
                                            )}
                                            {item.menu_child?.length > 0 && (
                                                <ul
                                                    className={`sub-menu-ul ${openSubMenu === translation?.title ? 'active' : ''}`}
                                                >
                                                    {item.menu_child.map((child, z) => {
                                                        if (child.item?.status === STATUS.PUBLISH) {
                                                            return child.item.title_language.map((lang) => {
                                                                if (lang.languages_code === languageApp) {
                                                                    return (
                                                                        <li
                                                                            onClick={() => SwitchPage(child.item.slug)}
                                                                            key={z}
                                                                            className="sub-menu-li"
                                                                        >
                                                                            <span>{lang.title}</span>
                                                                        </li>
                                                                    );
                                                                }
                                                            });
                                                        }
                                                    })}
                                                </ul>
                                            )}
                                        </li>
                                    );
                                })}
                                <li className="d-flex justify-content-center mb-5">
                                    <CustomDropdown
                                        options={['English', 'Tiếng Việt']}
                                        defaultOption="English"
                                        setIsOpenMenu={setIsOpenMenu}
                                    />
                                </li>
                                <li className="hidden">
                                    <select
                                        className="form-select selection"
                                        aria-label="Default select example"
                                        value={languageApp}
                                        onChange={handleLanguageChange}
                                    >
                                        <option value="en">English</option>
                                        <option value="vi">Tiếng Việt</option>
                                    </select>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div
                        className="header-container"
                        style={{ backgroundColor: `${companyInfor?.data[0]?.color_header}` }}
                    >
                        <div className="container d-flex align-items-center justify-content-around">
                            {companyInfor?.data && companyInfor.data[0]?.logo && (
                                <div className="logo" onClick={() => SwitchPage('')}>
                                    <img src={`${backendUrl}/assets/${companyInfor.data[0].logo}`} alt="Logo" />
                                </div>
                            )}
                            <div className="left-content d-lg-none d-block">
                                {isOpenMenu === false ? (
                                    <FontAwesomeIcon icon={faBars} className="" onClick={toggleMenu} />
                                ) : (
                                    <FontAwesomeIcon icon={faX} className="" onClick={toggleMenu} />
                                )}
                            </div>
                            <div className="main-menu d-lg-block d-none">
                                <nav className="main-nav">
                                    <ul className="menu-main-menu">
                                        {listMenu?.map((item, index) => {
                                            if (item.status !== STATUS.PUBLISH) {
                                                return null;
                                            }
                                            const translation = item.translations.find(
                                                (trans) => trans.languages_code === languageApp,
                                            );
                                            const isActive = location.pathname === `/${item.slug}`;
                                            return (
                                                <li
                                                    key={index}
                                                    onClick={() => {
                                                        if (item.menu_child?.length === 0 && item.slug) {
                                                            SwitchPage(item.slug);
                                                        }
                                                    }}
                                                    className={`sub-menu ${item.slug === 'about-us' || item.slug === 'careers' ? 'setwidth' : ''} ${isActive ? 'active' : ''}`}
                                                    style={{ color: `${companyInfor?.data[0]?.color_text}` }}
                                                >
                                                    {item.menu_child?.length > 0 ? (
                                                        <span
                                                            className="a-icon"
                                                            onClick={() => toggleSubMenu(translation?.title)}
                                                        >
                                                            {translation?.title || 'Untitled'}
                                                        </span>
                                                    ) : (
                                                        <span>{translation?.title || 'Untitled'}</span>
                                                    )}
                                                    {item.menu_child?.length > 0 && (
                                                        <ul
                                                            className={`sub-menu-ul ${openSubMenu === translation?.title ? 'active' : ''}`}
                                                            style={{
                                                                backgroundColor: `${companyInfor?.data[0]?.color_header}`,
                                                            }}
                                                        >
                                                            {item.menu_child.map((child, z) => {
                                                                if (child.item?.status === STATUS.PUBLISH) {
                                                                    return child.item.title_language.map((lang) => {
                                                                        if (lang.languages_code === languageApp) {
                                                                            return (
                                                                                <li
                                                                                    onClick={() => {
                                                                                        SwitchPage(child.item.slug);
                                                                                    }}
                                                                                    key={z}
                                                                                    className="sub-menu-li"
                                                                                >
                                                                                    <span>{lang.title}</span>
                                                                                </li>
                                                                            );
                                                                        }
                                                                    });
                                                                }
                                                            })}
                                                        </ul>
                                                    )}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </nav>
                            </div>

                            <div className="language d-lg-block d-none">
                                {listMenu && listMenu.length > 0 ? (
                                    <CustomDropdown
                                        options={['English', 'Tiếng Việt']}
                                        defaultOption={languageApp === 'en' ? 'English' : 'Tiếng Việt'}
                                        setIsOpenMenu={setIsOpenMenu}
                                    />
                                ) : null}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
});

export default Header;
