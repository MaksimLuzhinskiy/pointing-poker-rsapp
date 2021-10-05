import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IRoomInfo, IUser } from '../interfaces';
const errorObj = {
  status: 400,
  data: {
    id: '',
    code: '',
    users: [],
    issues: [],
  },
};
const initialState: IRoomInfo = {
  status: 0,
  id: '',
  code: '',
  users: [],
  issues: [],
};

export const fetchAllInfo = createAsyncThunk('room', async (url: string) => {
  const response = await axios
    .get<IRoomInfo>(`https://pointing-poker-rsapp.herokuapp.com/api/room/${url}`)
    .then((res) => res)
    .catch((res) => errorObj);
  console.log(response);

  return {
    status: response.status,
    id: response.data.id,
    code: response.data.code,
    users: response.data.users,
    issues: response.data.issues,
  };
});

const RoomInfo = createSlice({
  name: 'roomInfo',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      state.users.push(action.payload);
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllInfo.fulfilled, (state, action) => {
      state = action.payload;
      return state;
    });
    builder.addCase(fetchAllInfo.rejected, (state) => {
      return state;
    });
  },
});

export default RoomInfo.reducer;
export const { addUser } = RoomInfo.actions;
