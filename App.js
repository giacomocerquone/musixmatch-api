import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar, StyleSheet } from "react-native";
import { store, persistor } from "store";
import Loading from "pages/Loading";

import AppNavigator from "./App.nav";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" backgroundColor="#32164C" />
      <PersistGate loading={<Loading />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({});
