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
      const newStats = {
        ...state.usersStats,
        [payload.username]: {
          nGames: 0,
          points: 0,
        },
      };
      return {
        ...state,
        currUser: payload.username,
        usersStats: state.usersStats[payload.username]
          ? state.usersStats
          : newStats,
      };
    },
    logout(state) {
      return {
        ...state,
        currUser: "",
      };
    },
    updateUserStats(state, { payload }) {
      const userStats = state.usersStats[state.currUser];
      return {
        ...state,
        usersStats: {
          ...state.usersStats,
          [state.currUser]: {
            nGames: userStats.nGames + 1,
            points: userStats.points + payload.points,
          },
        },
      };
    },
    delUserStats(state, { payload }) {
      const newStats = { ...state.usersStats };
      delete newStats[payload.username];
      return { ...state, currUser: "", usersStats: newStats };
    },
  },
});

export default userSlice;

export const getCurrUser = (state) => state.currUser;
export const getStats = createSelector(
  [(state) => state.usersStats],
  (usersStats) =>
    Object.keys(usersStats).map((username) => ({
      username,
      ...usersStats[username],
    }))
);
export const getUserStats = (state, username) => state.usersStats[username];
