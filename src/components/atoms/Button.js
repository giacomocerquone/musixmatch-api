import { blue, magenta } from "constants/colors";
import React from "react";
import { StyleSheet } from "react-native";

import GenericText from "./GenericText";
import Touchable from "./Touchable";

const Button = ({ label, onPress, style, children, disabled }) => {
  return (
    <Touchable
      disabled={disabled}
      onPress={onPress}
      style={[styles.button, style]}
    >
      {children || (
        <GenericText
          text={label}
          uppercase
          size={16}
          weight="bold"
          color={magenta}
        />
      )}
    </Touchable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 4,
    marginVertical: 5,
    alignItems: "center",
    borderWidth: 4,
    borderColor: magenta,
  },
});
