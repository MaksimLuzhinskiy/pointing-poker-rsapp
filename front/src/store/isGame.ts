import { createSlice } from '@reduxjs/toolkit';
const initialState = false;

const isGame = createSlice({
  name: 'isGame',
  initialState,
  reducers: {
    startGame: () => {
      return true;
    },
    stopGame: () => {
      return false;
    },
  },
});

export default isGame.reducer;
export const { startGame, stopGame } = isGame.actions;
