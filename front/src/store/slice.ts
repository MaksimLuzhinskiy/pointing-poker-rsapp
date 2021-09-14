import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = false;

const formLoginState = createSlice({
  name: 'api',
  initialState,
  reducers: {
    openForm: (state) => {
      return (state = true);
    },
    closeForm: (state) => {
      return false;
    },
  },
});

export default formLoginState.reducer;
export const { openForm, closeForm } = formLoginState.actions;
