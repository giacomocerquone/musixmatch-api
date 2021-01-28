import { blue } from "constants/colors";
import React from "react";
import { View, StyleSheet } from "react-native";

import GenericText from "./GenericText";

const QuizCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <GenericText color={blue} text={item} uppercase size={30} />
    </View>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fefefe",
    borderRadius: 15,
    padding: 50,
    justifyContent: "center",
    textAlign: "center",
  },
});
