import { Routes, Route } from 'react-router-dom';
import HomePage from "../componient/HomePage/HomePage"
import { path } from "../utils/constant"
import ContactUsPage from '../componient/ContactUsPage/ContactUsPage';
import ScrollToTop from '../ScrollToTop';
import CareerPage from '../componient/CareerPage/CareerPage';
import NotFoundPage from '../componient/NotFoundPage/NotFoundPage';
import NewsPage from '../componient/NewsPage/NewPage';
import ProjectPage from '../componient/ProjectPage/ProjectPage';
import LibraryPage from '../componient/LibraryPage/LibraryPage';
const AppRoute = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={path.HOME} element={<HomePage />} />
                <Route path={path.CAREER} element={<CareerPage />} />
                <Route path={path.CONTACT_US} element={<ContactUsPage />} />
                <Route path={path.NEWS} element={<NewsPage />} />
                <Route path={path.PROJECTS} element={<ProjectPage />} />
                <Route path={path.LIBRARY} element={<LibraryPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default AppRoute;
