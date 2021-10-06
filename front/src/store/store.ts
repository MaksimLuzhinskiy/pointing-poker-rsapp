import { configureStore, combineReducers } from '@reduxjs/toolkit';
import formLoginState from './slice';
import Auth from './authslice';
import TypeForm from './typeOpenLoginFormslice';
import RoomInfo from './roomInfo';
import Role from './role';
import isGame from './isGame';

const rootReducer = combineReducers({
  login: formLoginState,
  auth: Auth,
  typeForm: TypeForm,
  roomInfo: RoomInfo,
  role: Role,
  isgame: isGame,
});

export const store = configureStore({
  reducer: rootReducer,
});
