import Header from "components/atoms/Header";
import React from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";

const Home = () => {
  const start = async () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Gioca" />
      <View style={styles.mainContent}>
        <Button title="Inizia" onPress={start} />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
