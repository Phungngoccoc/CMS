import { getDataHome } from '../features/homeSlice';
import { getDataAboutUs } from '../features/aboutUsSlice';
import { getDataCareer } from '../features/careerSlice';
import { getDataLibrary } from '../features/librarySlice';
import { getDataNews } from '../features/newsSlice';
import { getDataProject } from '../features/projectSlice';
import { getDataCorporation } from '../features/corporationSlide';
import { getdataBlog } from '../features/blogSlice';

export const path = {
    HOME: '/home',
    CONTACT_US: '/contact-us',
    CAREER: '/careers',
    NEWS: '/news',
    '/': '/',
    LIBRARY: '/library',
    PROJECTS: '/project',
    DETAI_PROJECTS: '/project/:id',
    NEWS_DETAIL: '/news/:id',
    CAREER_DETAIL: '/careers/:id',
    COMPANY_ACTIVITY: '/company-activity',
    PHOTO_GALLERY: '/picture-gallery',
    VIDEO_GALLERY: '/video-gallery',
    DETAIL_ACTIVITY: '/company-activity/:id',
    BLOG: '/blog',
    BLOG_DETAIL: '/blog/:id',
    E_BOOK_WHITEPAPERS: '/e-books-whitepapers',
    CORPORATION: '/field-of-activity',
    GLOBAL: '/global',
    ABOUT_US: '/featured-projects',
    OPERATION: '/field-operation/:id',
    FIELD_OPERATION: '/field-operation',
    DETAIL_PHOTO: '/picture-gallery/:id',
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
    [path.BLOG]: getDataHome(),
    [path.E_BOOK_WHITEPAPERS]: getDataHome(),
    [path.GLOBAL]: getDataHome(),
    [path.CORPORATION]: getDataCorporation(),
    [path.ABOUT_US]: getDataAboutUs(),
    [path.BLOG]: getdataBlog(),
};

// Dat ten cua reducer trong store trung voi state cua no
export const getState = {
    [path.HOME]: 'dataHome',
    [path['/']]: 'dataHome',
    [path.CONTACT_US]: 'dataAboutUs',
    [path.CAREER]: 'dataCareer',
    [path.NEWS]: 'dataNews',
    [path.PROJECTS]: 'dataProject',
    [path.LIBRARY]: 'dataLibrary',
    [path.COMPANY_ACTIVITY]: 'dataLibrary',
    [path.PHOTO_GALLERY]: 'dataLibrary',
    [path.VIDEO_GALLERY]: 'dataLibrary',
    [path.BLOG]: 'dataBlog',
    [path.CORPORATION]: 'dataCorporation',
    companyInfor: 'companyInfor',
    [path.ABOUT_US]: 'dataAboutUs',
    [path.BLOG]: 'dataBlog',
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
