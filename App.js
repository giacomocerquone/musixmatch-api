import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "react-native";
import { store, persistor } from "store";
import FlashMessage from "react-native-flash-message";

import AppNavigator from "./App.nav";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" translucent />
      <PersistGate loading={<></>} persistor={persistor}>
        <AppNavigator />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}
