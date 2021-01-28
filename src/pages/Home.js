import GenericText from "components/atoms/GenericText";
import Header from "components/atoms/Header";
import QuizCard from "components/atoms/QuizCard";
import Button from "components/atoms/Button";
import React from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";

const Home = () => {
  const start = async () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Gioca" style={styles.header} />
      {/* 
        <Button title="Inizia" onPress={start} />
      */}
      <View style={styles.timerContainer}>
        <GenericText text="timer" uppercase />
        <GenericText text="0" size={30} weight="bold" />
      </View>
      <View style={styles.mainContent}>
        <Carousel
          containerCustomStyle={styles.carouselContainer}
          data={[
            "This is my life and that is yours",
            "This is my life and that is yours",
            "This is my life and that is yours",
          ]}
          sliderWidth={Dimensions.get("window").width}
          itemWidth={Dimensions.get("window").width - 50}
          scrollEnabled={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <QuizCard item={item} />}
        />
        <View>
          <Button label="Renato bennato" onPress={start} />
          <Button label="A zio zia" onPress={start} />
          <Button label="A mio mia" onPress={start} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  header: { marginHorizontal: 20 },
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  carouselContainer: {
    flexGrow: 0,
  },
});
