import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRoomInfo } from '../interfaces';

const initialState: IRoomInfo = { code: '', users: [], issues: [] };

export const fetchAllInfo = createAsyncThunk('room', async (url: string) => {
  const response = await axios.get<IRoomInfo>(
    `https://pointing-poker-rsapp.herokuapp.com/api/room/${url}`
  );

  return {
    code: response.data.code,
    users: response.data.users,
    issues: response.data.issues,
  };
});

const RoomInfo = createSlice({
  name: 'roomInfo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllInfo.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
  },
});

export default RoomInfo.reducer;
export const {} = RoomInfo.actions;
