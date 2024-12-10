import { createSlice } from '@reduxjs/toolkit';

// Kiểm tra ngôn ngữ từ localStorage
const initialLanguage = localStorage.getItem('language') || 'en';

export const languageSlice = createSlice({
    name: 'language',
    initialState: {
        language: initialLanguage,
    },
    reducers: {
        setEnglish: (state) => {
            state.language = 'en';
            localStorage.setItem('language', 'en');
        },
        setVietnamese: (state) => {
            state.language = 'vi';
            localStorage.setItem('language', 'vi');
        },
        setLanguageByPayload: (state, action) => {
            state.language = action.payload;
            localStorage.setItem('language', action.payload);
        },

    },
});

export const { setEnglish, setVietnamese, setLanguageByPayload, setURL } = languageSlice.actions;

export default languageSlice.reducer;
