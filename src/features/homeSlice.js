import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchDataHome } from "../services/userServices";

export const getDataHome = createAsyncThunk("dataHome/fetchData", async () => {
  //
  const response = await fetchDataHome();
  //
  return response.data;
});

export const homeSlice = createSlice({
  name: "dataHome",
  initialState: {
    dataHome: null,
    loading: false,
    error: null,
    urlVD: "",
    isEnable: false,
  },
  reducers: {
    setURL: (state, action) => {
      state.urlVD = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDataHome.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.isEnable = false
      })
      .addCase(getDataHome.fulfilled, (state, action) => {
        state.loading = false;
        state.dataHome = action.payload;
        state.isEnable = true;
      })
      .addCase(getDataHome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.isEnable = false
      });
  },
});

export const { setURL } = homeSlice.actions;

export default homeSlice.reducer;
