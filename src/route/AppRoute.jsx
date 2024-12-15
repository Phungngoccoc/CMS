import { Routes, Route } from 'react-router-dom';
import HomePage from '../componient/HomePage/HomePage';
import { path } from '../utils/constant';
import ContactUsPage from '../componient/ContactUsPage/ContactUsPage';
import ScrollToTop from '../ScrollToTop';
import CareerPage from '../componient/CareerPage/CareerPage';
import NotFoundPage from '../componient/NotFoundPage/NotFoundPage';
import NewsPage from '../componient/NewsPage/NewPage';
import ProjectPage from '../componient/ProjectPage/ProjectPage';
import LibraryPage from '../componient/LibraryPage/LibraryPage';
import NewsDetailPage from '../componient/NewsPage/NewDetail/NewDetail';
import CareerDetailPage from '../componient/CareerPage/CareerDetail/CareerDetail';
import CompanyAcivityPage from '../componient/CompanyAcvivityPage/CompanyActivityPage';
import PhotoGalleryPage from '../componient/PhotoGalleryPage/PhotoGalleryPage';
import VideoGalleryPage from '../componient/VideoGalleryPage/VideoGalleryPage';
import ProjectDetailPage from '../componient/ProjectPage/ProjectDetail/ProjectDetail';
import DetailActivity from '../componient/CompanyAcvivityPage/DetailActivity/DetailActivity';
const AppRoute = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={path.HOME} element={<HomePage />} />
                <Route path={path.CAREER} element={<CareerPage />} />
                <Route path={path.CAREER_DETAIL} element={<CareerDetailPage />} />
                <Route path={path.CONTACT_US} element={<ContactUsPage />} />
                <Route path={path.NEWS} element={<NewsPage />} />
                <Route path={path.NEWS_DETAIL} element={<NewsDetailPage />} />
                <Route path={path.PROJECTS} element={<ProjectPage />} />
                <Route path={path.DETAI_PROJECTS} element={<ProjectDetailPage />} />
                <Route path={path.LIBRARY} element={<LibraryPage />} />
                <Route path={path.COMPANY_ACTIVITY} element={<CompanyAcivityPage />} />
                <Route path={path.DETAIL_ACTIVITY} element={<DetailActivity />} />
                <Route path={path.PHOTO_GALLERY} element={<PhotoGalleryPage />} />
                <Route path={path.VIDEO_GALLERY} element={<VideoGalleryPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default AppRoute;
