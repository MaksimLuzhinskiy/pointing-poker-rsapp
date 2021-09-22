import { configureStore, combineReducers } from '@reduxjs/toolkit';
import formLoginState from './slice';
import Auth from './authslice';
import TypeForm from './typeOpenLoginFormslice';
import RoomInfo from './roomInfo';

const rootReducer = combineReducers({
  login: formLoginState,
  auth: Auth,
  typeForm: TypeForm,
  roomInfo: RoomInfo,
});

export const store = configureStore({
  reducer: rootReducer,
});
