import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { getToken, getFirstOpen } from "store/app.reducer";
import { blue } from "constants/colors";

import HomeTab from "pages/HomeTab";
import Login from "pages/Login";

const Stack = createStackNavigator();

export default function AppNavigator() {
  const token = useSelector(getToken);
  const firstOpen = useSelector(getFirstOpen);

  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode="none"
        screenOptions={{ cardStyle: { backgroundColor: blue } }}
      >
        {token ? (
          <>
            <Stack.Screen name="Home" component={HomeTab} />
          </>
        ) : (
          <Stack.Screen name="Login" component={Login} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
