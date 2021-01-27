import React from "react";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

export default function TextInput(props) {
  const {
    onChangeText,
    name,
    style,
    selectionColor,
    placeholderTextColor,
  } = props;

  const _onChangeText = (text) => {
    return (
      onChangeText && (name ? onChangeText(text, name) : onChangeText(text))
    );
  };

  return (
    <RNTextInput
      placeholderTextColor={placeholderTextColor || "#C2C2C2"}
      {...props}
      style={[styles.input, style]}
      underlineColorAndroid="transparent"
      onChangeText={_onChangeText}
      selectionColor={selectionColor || "#fff"}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 46,
    fontSize: 16,
    lineHeight: 20,
    color: "#fff",
    borderRadius: 4,
    fontFamily: "Poppins_500Medium",
  },
});
