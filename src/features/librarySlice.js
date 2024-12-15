import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataLibrary } from '../services/userServices';

export const getDataLibrary = createAsyncThunk('dataLibrary/fetchData', async () => {
    const response = await fetchDataLibrary();
    return response.data;
});

export const librarySlice = createSlice({
    name: 'dataLibrary',
    initialState: {
        dataLibrary: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataLibrary.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDataLibrary.fulfilled, (state, action) => {
                state.loading = false;
                state.dataLibrary = action.payload;
            })
            .addCase(getDataLibrary.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default librarySlice.reducer;
