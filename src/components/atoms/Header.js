import React from "react";
import { StyleSheet, View } from "react-native";

import GenericText from "./GenericText";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <GenericText text={title} size={40} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
  },
});
