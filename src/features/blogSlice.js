import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataBlog } from '../services/userServices';

export const getdataBlog = createAsyncThunk('dataBlog/fetchData', async () => {
    const response = await fetchDataBlog();
    return response.data;
});

export const blogSlice = createSlice({
    name: 'dataBlog',
    initialState: {
        dataBlog: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getdataBlog.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getdataBlog.fulfilled, (state, action) => {
                state.loading = false;
                state.dataBlog = action.payload;
            })
            .addCase(getdataBlog.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default blogSlice.reducer;
