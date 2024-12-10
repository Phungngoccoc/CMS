import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataCareer } from "../services/userServices";

export const getDataCareer = createAsyncThunk("dataSlice/fetchData", async () => {
    const response = await fetchDataCareer();
    return response.data;
});

export const careerSlice = createSlice({
    name: "dataCareer",
    initialState: {
        dataCareer: null,
        loading: false,
        error: null
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataCareer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDataCareer.fulfilled, (state, action) => {
                state.loading = false;
                state.dataCareer = action.payload;
            })
            .addCase(getDataCareer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default careerSlice.reducer;
