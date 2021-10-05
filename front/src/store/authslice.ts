import { createSlice } from '@reduxjs/toolkit';
const initialState = false;

const Auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginAuth: () => {
      return true;
    },
    logoutAuth: () => {
      return false;
    },
  },
});

export default Auth.reducer;
export const { loginAuth, logoutAuth } = Auth.actions;
