import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "components/atoms/Header";
import Button from "components/atoms/Button";
import Quiz from "components/organisms/Quiz";
import useQuizData from "hooks/useQuizData";

const Home = () => {
  const [playing, setPlaying] = useState(false);
  const [status, data] = useQuizData(playing);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Gioca" style={styles.header} />

      {playing && status === "fulfilled" ? (
        <Quiz finishGame={() => setPlaying(false)} data={data} />
      ) : (
        <View style={styles.mainContent}>
          <Button label="Inizia" onPress={() => setPlaying(true)} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: { marginHorizontal: 20 },
  container: {
    flex: 1,
    alignItems: "center",
  },
  mainContent: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});
