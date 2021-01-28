import Header from "components/atoms/Header";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Scoreboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Punteggi" />
    </SafeAreaView>
  );
};

export default Scoreboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
