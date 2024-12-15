import { BrowserRouter as Router } from 'react-router-dom';
import Header from './componient/Header_Footer/Header';
import Footer from './componient/Header_Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRoute from './route/AppRoute';
import { useEffect, useState } from 'react';
import './App.scss';
function App() {
    const [showButton, setShowButton] = useState(false);
    const [isEnable, setIsEnable] = useState(false);
    // Hàm xử lý sự kiện cuộn trang
    const handleScroll = () => {
        if (window.scrollY > 20) {
            setShowButton(true); // Hiển thị nút khi cuộn quá 20px
        } else {
            setShowButton(false); // Ẩn nút khi cuộn lên trên
        }
    };

    // Hàm cuộn lên trên khi click nút
    const scrollToTop2 = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Lắng nghe sự kiện scroll khi component mount và cleanup khi unmount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const setEnable = () => {
        setIsEnable(true);
    };

    const setDisable = () => {
        setIsEnable(false);
    };
    return (
        <Router>
            <Header setEnable={setEnable} setDisable={setDisable} />
            {isEnable === true && (
                <>
                    <AppRoute />
                    <Footer />
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
