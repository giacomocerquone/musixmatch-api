import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const userSlice = createSlice({
  name: 'scoreboard',
  initialState,
  reducers: {
    updateUserScore(state, { payload }) {
      return {
        ...state,
        [payload.username]: {
          ...state[payload.username],
          points: payload.score,
        },
      };
    },
    delUserScore(state, { payload }) {
      const newScoreboard = { ...state };
      delete newScoreboard[payload.username];
      return newScoreboard;
    },
  },
});

export default userSlice;

export const getUserScores = (state, username) => state[username];
