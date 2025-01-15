import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCorporation } from '../services/userServices';

export const getDataCorporation = createAsyncThunk('dataCorporation/fetchData', async () => {
    const response = await fetchCorporation();
    return response.data;
});

export const corporationSlice = createSlice({
    name: 'corporation',
    initialState: {
        dataCorporation: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataCorporation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDataCorporation.fulfilled, (state, action) => {
                state.loading = false;
                state.dataCorporation = action.payload;
            })
            .addCase(getDataCorporation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default corporationSlice.reducer;
