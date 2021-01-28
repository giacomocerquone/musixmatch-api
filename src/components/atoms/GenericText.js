import React from "react";
import { Text } from "react-native";

export default function GenericText({
  text = "",
  style,
  color,
  size,
  onPress,
  underline,
  lineHeight,
  uppercase,
  align,
  numberOfLines,
  children,
  weight,
}) {
  return (
    <Text
      onPress={onPress}
      numberOfLines={numberOfLines}
      allowFontScaling={false}
      style={[
        {
          fontWeight: weight || "normal",
          textAlign: align || "left",
          color: color || "#fff",
          fontSize: size || 20,
          ...(lineHeight && { lineHeight }),
          ...(underline
            ? {
                textDecorationLine: "underline",
              }
            : {}),
        },
        style,
      ]}
    >
      {text && (uppercase ? text.toUpperCase() : text)}
      {children}
    </Text>
  );
}
