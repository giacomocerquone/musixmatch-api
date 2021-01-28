import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  currUser: "",
  usersStats: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login(state, { payload }) {
      return {
        ...state,
        currUser: payload.username,
        usersStats: {
          ...state.usersStats,
          [payload.username]: {
            nGames: 0,
            points: 0,
          },
        },
      };
    },
    logout(state) {
      return {
        ...state,
        currUser: "",
      };
    },
    updateUserStats(state, { payload }) {
      return {
        ...state,
        usersStats: {
          ...state.usersStats,
          [payload.username]: {
            ...state.usersStats[payload.username],
            ...payload,
          },
        },
      };
    },
    delUserStats(state, { payload }) {
      const newStats = { ...state.usersStats };
      delete newStats[payload.username];
      return { ...state, usersStats: newStats };
    },
  },
});

export default userSlice;

export const getCurrUser = (state) => state.currUser;
// export const getStats = (state) => state.usersStats;
export const getStats = createSelector(
  [(state) => state.usersStats],
  (usersStats) =>
    Object.keys(usersStats).map((username) => ({
      username,
      ...usersStats[username],
    }))
);
export const getUserStats = (state, username) => state.usersStats[username];
