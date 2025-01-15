import { BrowserRouter as Router } from 'react-router-dom';
import Header from './componient/Header_Footer/Header';
import Footer from './componient/Header_Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoute from './route/AppRoute';
import { lazy, useEffect, useState } from 'react';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getdataCompanyInfor } from './features/companyInfor';
import { initGA, trackPageView } from './setup/analytics';
import { Helmet } from 'react-helmet-async';

function App() {
    const dispatch = useDispatch();
    const companyInfor = useSelector((state) => state.companyInfor.companyInfor);
    const isShow = useSelector((state) => state.isShowVideo.isShow);
    const [showButton, setShowButton] = useState(false);
    const [isEnable, setIsEnable] = useState(false);

    useEffect(() => {
        initGA();
    }, []);

    useEffect(() => {
        trackPageView(location.pathname);
    }, [location]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (!companyInfor) {
            dispatch(getdataCompanyInfor());
        }
    }, [companyInfor]);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };
    useEffect(() => {
        const color = companyInfor?.data[0]?.color_text_title;
        document.documentElement.style.setProperty('--color-title', color);
        document.documentElement.style.setProperty('--color-hover', companyInfor?.data[0]?.color_hover_header);
        document.documentElement.style.setProperty('--color-header', companyInfor?.data[0]?.color_header);
        document.documentElement.style.setProperty('--color-text', companyInfor?.data[0]?.color_text);
        document.documentElement.style.setProperty(
            '--color-child-menu',
            companyInfor?.data[0]?.color_background_menu_child,
        );
    }, [companyInfor?.data[0]?.color_text_title]);
    const scrollToTop2 = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const setEnable = () => {
        setIsEnable(true);
    };

    const setDisable = () => {
        setIsEnable(false);
    };
    const iconLogo = companyInfor?.data?.[0]?.icon_logo;
    return (
        <Router>
            <Helmet>
                <link rel="icon" href={iconLogo ? `/api/assets/${iconLogo}` : ''} />
            </Helmet>
            <Header setEnable={setEnable} setDisable={setDisable} />
            {isEnable === true && (
                <>
                    <AppRoute />
                    {isShow && <Footer />}
                </>
            )}
            {showButton && (
                <div className="btn-scroll-to-top">
                    <button type="button" className="btn btn-info btn-md" onClick={scrollToTop2}>
                        <i className="fa fa-arrow-up"></i>
                    </button>
                </div>
            )}
            <ToastContainer />
        </Router>
    );
}

export default App;
