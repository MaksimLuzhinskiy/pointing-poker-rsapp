import { configureStore, combineReducers } from '@reduxjs/toolkit';
import formLoginState from './slice';
import Auth from './authslice';

const rootReducer = combineReducers({
  login: formLoginState,
  auth: Auth,
});

export const store = configureStore({
  reducer: rootReducer,
});
