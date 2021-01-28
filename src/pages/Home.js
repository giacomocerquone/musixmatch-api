import Header from "components/atoms/Header";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Gioca" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
