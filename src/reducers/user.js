import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
    logout() {
      return initialState;
    },
  },
});

export default userSlice;

export const getUsername = (state) => state.username;
