import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCompanyInfor } from '../services/userServices';

export const getdataCompanyInfor = createAsyncThunk('companyInfor/fetchData', async () => {
    const response = await fetchCompanyInfor();
    return response.data;
});

export const companyInforSlice = createSlice({
    name: 'companyInfor',
    initialState: {
        companyInfor: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getdataCompanyInfor.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getdataCompanyInfor.fulfilled, (state, action) => {
                state.loading = false;
                state.companyInfor = action.payload;
            })
            .addCase(getdataCompanyInfor.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default companyInforSlice.reducer;
