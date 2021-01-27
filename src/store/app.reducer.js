import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userSlice, * as fromUser from "reducers/user";
import scoreboardSlice, * as fromScoreboard from "reducers/scoreboard";

const appReducer = combineReducers({
  user: userSlice.reducer,
  scoreboard: scoreboardSlice.reducer,
});

const persistConfig = {
  key: "primary",
  storage: AsyncStorage,
  version: 0,
  whitelist: ["user", "scoreboard"],
};
const persistedReducer = persistReducer(persistConfig, appReducer);

export default persistedReducer;

// user

export const getUsername = (state) => fromUser.getUsername(state.user);

// scoreboard

export const getUserScores = (state, username) =>
  fromScoreboard.getUserScores(state, username);
