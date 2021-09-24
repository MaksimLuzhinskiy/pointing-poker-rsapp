import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ItypeNamePaylod } from '../interfaces';

const initialState: ItypeNamePaylod = { type: '', link: '' };

const TypeForm = createSlice({
  name: 'typeForm',
  initialState,
  reducers: {
    typeConnectRoom: (state, action: PayloadAction<ItypeNamePaylod>) => {
      state.type = action.payload.type;
      state.link = action.payload.link;
      return state;
    },
  },
});

export default TypeForm.reducer;
export const { typeConnectRoom } = TypeForm.actions;
