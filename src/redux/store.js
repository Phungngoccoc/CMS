import { configureStore } from '@reduxjs/toolkit';
import languageReducer from '../features/languageSlice';
import homeReducer from '../features/homeSlice';
import headerReducer from '../features/headerSlice';
import aboutUsReducer from '../features/aboutUsSlice';
import careerReducer from '../features/careerSlice';
import libraryReducer from '../features/librarySlice';
import newsReducer from '../features/newsSlice';
import projectReducer from '../features/projectSlice';
import isShowVideoReducer from '../features/isShowVideoSlice';
import blogSlideReducer from '../features/blogSlice';
import companyInforReducer from '../features/companyInfor';
import corporationReducer from '../features/corporationSlide';

// Dat ten cua reducer trong store trung voi state cua no
export const store = configureStore({
    reducer: {
        language: languageReducer,
        dataHome: homeReducer,
        dataHeader: headerReducer,
        dataAboutUs: aboutUsReducer,
        dataCareer: careerReducer,
        dataLibrary: libraryReducer,
        dataNews: newsReducer,
        dataProject: projectReducer,
        dataBlog: blogSlideReducer,
        isShowVideo: isShowVideoReducer,
        companyInfor: companyInforReducer,
        dataCorporation: corporationReducer,
    },
});

export default store;
