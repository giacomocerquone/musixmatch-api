import Button from "components/atoms/Button";
import TextInput from "components/atoms/TextInput";
import React, { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { useDispatch } from "react-redux";
import userSlice from "reducers/user";

const Login = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const onSubmit = () => dispatch(userSlice.actions.login({ username }));

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Inserisci un username"
        autoCapitalize="none"
      />
      <Button
        disabled={!username}
        onPress={onSubmit}
        label="Inizia a giocare"
      />
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  input: {
    height: 80,
    fontSize: 30,
    lineHeight: 30,
  },
});
