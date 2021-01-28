import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { AntDesign } from "@expo/vector-icons";
import { blue, magenta } from "constants/colors";

import Home from "./Home";
import Scoreboard from "./Scoreboard";
import Profile from "./Profile";

const Tab = createMaterialTopTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      sceneContainerStyle={{
        backgroundColor: blue,
      }}
      tabBarOptions={{
        style: {
          backgroundColor: magenta,
          paddingBottom: 30,
          paddingTop: 10,
        },
        activeTintColor: "#fff",
        inactiveTintColor: blue,
        showLabel: false,
        showIcon: true,
        renderIndicator: () => null,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" size={24} color={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Scoreboard"
        component={Scoreboard}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="dashboard" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
