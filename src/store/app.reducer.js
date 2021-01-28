import AsyncStorage from "@react-native-community/async-storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userSlice, * as fromUser from "reducers/user";

const appReducer = combineReducers({
  user: userSlice.reducer,
});

const persistConfig = {
  key: "primary",
  storage: AsyncStorage,
  version: 0,
  whitelist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, appReducer);

export default persistedReducer;

// user

export const getCurrUser = (state) => fromUser.getCurrUser(state.user);
export const getStats = (state) => fromUser.getStats(state.user);
export const getUserStats = (state, username) =>
  fromUser.getUserStats(state.user, username);
