import { blue } from "constants/colors";
import React from "react";
import { StyleSheet, View } from "react-native";

import GenericText from "./GenericText";

const Header = ({ title, style }) => {
  return (
    <View style={[styles.header, style]}>
      <GenericText text={title} size={40} weight="bold" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    backgroundColor: blue,
  },
});
