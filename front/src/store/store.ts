import { configureStore, combineReducers } from '@reduxjs/toolkit';
import formLoginState from './slice';

const rootReducer = combineReducers({
  login: formLoginState,
});

export const store = configureStore({
  reducer: rootReducer,
});
