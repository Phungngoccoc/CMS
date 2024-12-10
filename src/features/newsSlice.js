import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataNews } from "../services/userServices";

export const getDataNews = createAsyncThunk("dataNews/fetchData", async () => {
    const response = await fetchDataNews();
    return response.data;
});

export const newsSlice = createSlice({
    name: "dataNews",
    initialState: {
        dataNews: null,
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDataNews.fulfilled, (state, action) => {
                state.loading = false;
                state.dataNews = action.payload;
            })
            .addCase(getDataNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default newsSlice.reducer;
