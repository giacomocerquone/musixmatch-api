import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from "react-native";

export default function Touchable(props) {
  const { children, onPress, onLongPress, style, useForeground } = props;
  return Platform.OS === "ios" ? (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={style}
      {...props}
    >
      {children}
    </TouchableOpacity>
  ) : (
    <TouchableNativeFeedback
      onPress={onPress}
      onLongPress={onLongPress}
      useForeground={
        TouchableNativeFeedback.canUseNativeForeground() && useForeground
          ? true
          : null
      }
      {...props}
    >
      <View style={style}>{children}</View>
    </TouchableNativeFeedback>
  );
}
