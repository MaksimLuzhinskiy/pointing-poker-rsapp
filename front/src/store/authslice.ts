import { createSlice } from '@reduxjs/toolkit';
const initialState = true;

const Auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LoginAuth: () => {
      return true;
    },
    LogoutAuth: () => {
      return false;
    },
  },
});

export default Auth.reducer;
export const { LoginAuth, LogoutAuth } = Auth.actions;
