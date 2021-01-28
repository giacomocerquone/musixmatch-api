import { blue } from "constants/colors";
import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "components/atoms/Button";

import GenericText from "./GenericText";

const QuizCard = ({ item, onPressedAnswer }) => {
  return (
    <>
      <View style={styles.card}>
        <GenericText
          style={styles.lyrics}
          color={blue}
          text={item.snippet}
          uppercase
          size={30}
        />
      </View>
      <View style={styles.artistsContainer}>
        {item.artists.map((a, id) => (
          <Button
            key={a.name}
            label={a.name}
            onPress={() => onPressedAnswer(item.artists, id)}
          />
        ))}
      </View>
    </>
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
  lyrics: { fontStyle: "italic" },
  artistsContainer: { marginTop: 20 },
});
