import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchListMenu } from "../services/userServices";

export const getDataHeader = createAsyncThunk("dataHeader/fetchData", async () => {
    const response = await fetchListMenu();
    return response.data;
});

export const homeSlice = createSlice({
    name: "dataHeader",
    initialState: {
        dataHeader: null,
        loading: false,
        error: null,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getDataHeader.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDataHeader.fulfilled, (state, action) => {
                state.loading = false;
                state.dataHeader = action.payload;
            })
            .addCase(getDataHeader.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default homeSlice.reducer;
