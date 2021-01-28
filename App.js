import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar, StyleSheet } from "react-native";
import { store, persistor } from "store";

import AppNavigator from "./App.nav";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" translucent />
      <PersistGate loading={<></>} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});
