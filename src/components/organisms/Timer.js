import GenericText from "components/atoms/GenericText";
import { secondsToAnswer } from "constants/params";
import useInterval from "hooks/useInterval";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

const Timer = ({ onExpiration, currIndex }) => {
  const [secs, setSecs] = useState(secondsToAnswer);

  useInterval(() => {
    setSecs((s) => s - 1);
  }, 1000);

  useEffect(() => {
    if (secs === 0) {
      onExpiration();
      setSecs(secondsToAnswer);
    }
  }, [secs, onExpiration]);

  useEffect(() => {
    setSecs(secondsToAnswer);
  }, [currIndex]);

  return (
    <View style={styles.timerContainer}>
      <GenericText text="timer" uppercase />
      <GenericText text={secs} size={30} weight="bold" />
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: "center",
    marginTop: 40,
  },
});
