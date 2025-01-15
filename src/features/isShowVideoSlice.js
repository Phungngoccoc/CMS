import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const isShowVideo = createAsyncThunk('dataShowVideo/fetchData', async (state) => {
    return state;
});

export const isShowVideoSlide = createSlice({
    name: 'dataShowVideo',
    initialState: {
        isShow: true,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(isShowVideo.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(isShowVideo.fulfilled, (state, action) => {
                state.loading = false;
                state.isShow = action.payload;
            })
            .addCase(isShowVideo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default isShowVideoSlide.reducer;
