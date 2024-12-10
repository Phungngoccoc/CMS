import { getDataHome } from "../features/homeSlice";
import { getDataAboutUs } from "../features/aboutUsSlice";
import { getDataCareer } from "../features/careerSlice";
import { getDataLibrary } from "../features/librarySlice";
import { getDataNews } from "../features/newsSlice";
import { getDataProject } from "../features/projectSlice";
export const path = {
    HOME: '/home',
    CONTACT_US: '/about-us',
    CAREER: "/careers",
    NEWS: '/news',
    "/": "/",
    LIBRARY: "/library",
    NEWS: "/news",
    PROJECTS: "/projects"
};

export const getAction = {
    [path.HOME]: getDataHome(),
    [path["/"]]: getDataHome(),
    [path.CONTACT_US]: getDataAboutUs(),
    [path.CAREER]: getDataCareer(),
    [path.NEWS]: getDataNews(),
    [path.LIBRARY]: getDataLibrary(),
    [path.PROJECTS]: getDataProject()
}


export const STATUS = {
    PUBLISH: 'published',
    DRAFT: 'draft',
    ARCHIVED: 'archived'
}

export const LANGUAGES = {
    VI: 'vi',
    EN: 'en'
};
