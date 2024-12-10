import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataAboutUs } from "../services/userServices";

export const getDataAboutUs = createAsyncThunk("dataAboutUs/fetchData", async () => {
    const response = await fetchDataAboutUs();
    return response.data;
});

export const aboutUsSlice = createSlice({
    name: "dataAboutUs",
    initialState: {
        dataAboutUs: null,
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataAboutUs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDataAboutUs.fulfilled, (state, action) => {
                state.loading = false;
                state.dataAboutUs = action.payload;
            })
            .addCase(getDataAboutUs.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default aboutUsSlice.reducer;
