import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = '';

const Role = createSlice({
  name: 'Role',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      return (state = action.payload);
    },
  },
});

export default Role.reducer;
export const { setRole } = Role.actions;
