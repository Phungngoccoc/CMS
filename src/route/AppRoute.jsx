import { Routes, Route } from 'react-router-dom';
import HomePage from '../componient/HomePage/HomePage';
import { path } from '../utils/constant';
import ContactUsPage from '../componient/ContactUsPage/ContactUsPage';
import ScrollToTop from '../ScrollToTop';
import CareerPage from '../componient/CareerPage/CareerPage';
import NotFoundPage from '../componient/NotFoundPage/NotFoundPage';
import NewsPage from '../componient/NewsPage/NewPage';
import ProjectPage from '../componient/ProjectPage/ProjectPage';
import NewsDetailPage from '../componient/NewsPage/NewDetail/NewDetail';
import CareerDetailPage from '../componient/CareerPage/CareerDetail/CareerDetail';
import PhotoGalleryPage from '../componient/PhotoGalleryPage/PhotoGalleryPage';
import VideoGalleryPage from '../componient/VideoGalleryPage/VideoGalleryPage';
import ProjectDetailPage from '../componient/ProjectPage/ProjectDetail/ProjectDetail';
import BlogPage from '../componient/BlogPage/BlogPage';
import BlogDetail from '../componient/BlogPage/Detail/BlogDetail';
import CoporationPage from '../componient/CoporationPage/CoporationPage';
import Form from '../componient/ContactUsPage/Section/Form';
import DetailOperation from '../componient/CoporationPage/Detail/DetailOperation';
import DetailPhoto from '../componient/PhotoGalleryPage/Section/Detail/DetailPhoto';
const AppRoute = () => {
    return (
        <>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path={path.HOME} element={<HomePage />} />
                <Route path={path.CAREER} element={<CareerPage />} />
                <Route path={path.CAREER_DETAIL} element={<CareerDetailPage />} />
                <Route path={path.ABOUT_US} element={<ContactUsPage />} />
                <Route path={path.NEWS} element={<NewsPage />} />
                <Route path={path.NEWS_DETAIL} element={<NewsDetailPage />} />
                <Route path={path.PROJECTS} element={<ProjectPage />} />
                <Route path={path.DETAI_PROJECTS} element={<ProjectDetailPage />} />
                <Route path={path.DETAIL_PHOTO} element={<DetailPhoto />} />
                <Route path={path.PHOTO_GALLERY} element={<PhotoGalleryPage />} />
                <Route path={path.VIDEO_GALLERY} element={<VideoGalleryPage />} />
                <Route path={path.BLOG} element={<BlogPage />} />
                <Route path={path.BLOG_DETAIL} element={<BlogDetail />} />
                <Route path={path.CORPORATION} element={<CoporationPage />} />
                <Route path={path.CONTACT_US} element={<Form />} />
                <Route path={path.OPERATION} element={<DetailOperation />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
};

export default AppRoute;
