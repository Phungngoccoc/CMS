import { getDataHome } from '../features/homeSlice';
import { getDataAboutUs } from '../features/aboutUsSlice';
import { getDataCareer } from '../features/careerSlice';
import { getDataLibrary } from '../features/librarySlice';
import { getDataNews } from '../features/newsSlice';
import { getDataProject } from '../features/projectSlice';
import { useSelector } from 'react-redux';

export const path = {
    HOME: '/home',
    CONTACT_US: '/about-us',
    CAREER: '/careers',
    NEWS: '/news',
    '/': '/',
    LIBRARY: '/library',
    PROJECTS: '/projects',
    DETAI_PROJECTS: '/projects/:id',
    NEWS_DETAIL: '/news/:id',
    CAREER_DETAIL: '/careers/:id',
    COMPANY_ACTIVITY: '/company-activity',
    PHOTO_GALLERY: '/photo-gallery',
    VIDEO_GALLERY: '/video-gallery',
    DETAIL_ACTIVITY: '/company-activity/:id',
};

export const getAction = {
    [path.HOME]: getDataHome(),
    [path['/']]: getDataHome(),
    [path.CONTACT_US]: getDataAboutUs(),
    [path.CAREER]: getDataCareer(),
    [path.NEWS_DETAIL]: getDataNews(),
    [path.NEWS]: getDataNews(),
    [path.LIBRARY]: getDataLibrary(),
    [path.COMPANY_ACTIVITY]: getDataLibrary(),
    [path.PHOTO_GALLERY]: getDataLibrary(),
    [path.VIDEO_GALLERY]: getDataLibrary(),
    [path.PROJECTS]: getDataProject(),
};

export const STATUS = {
    PUBLISH: 'published',
    DRAFT: 'draft',
    ARCHIVED: 'archived',
};

export const LANGUAGES = {
    VI: 'vi',
    EN: 'en',
};
