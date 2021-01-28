import GenericText from "components/atoms/GenericText";
import Header from "components/atoms/Header";
import React from "react";
import { Button, SafeAreaView, StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getCurrUser, getUserScores } from "store/app.reducer";

const Profile = () => {
  const currUser = useSelector(getCurrUser);
  const userScore = useSelector((state) => getUserScores(state, currUser));

  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <Header title={`Ciao ${currUser}`} />
      <View style={styles.mainContent}>
        <GenericText text="Hai accumulato" />
        <GenericText text={userScore?.points || "0"} size={40} weight="bold" />
        <GenericText text="punti!" />
      </View>
      <Button onPress={() => dispatch(userScore)} title="Logout" />
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
