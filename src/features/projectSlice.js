import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchDataProject } from '../services/userServices';

export const getDataProject = createAsyncThunk('dataProject/fetchData', async () => {
    const response = await fetchDataProject();
    return response.data;
});

export const projectSlice = createSlice({
    name: 'dataProject',
    initialState: {
        dataProject: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getDataProject.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getDataProject.fulfilled, (state, action) => {
                state.loading = false;
                state.dataProject = action.payload;
            })
            .addCase(getDataProject.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default projectSlice.reducer;
