import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Feather } from "@expo/vector-icons";
import CartTabIcon from "components/atoms/CartTabIcon";

import Home from "./Home";
import Scoreboard from "./Scoreboard";
import Profile from "./Profile";

const Tab = createMaterialTopTabNavigator();

const HomeTab = () => {
  return (
    <Tab.Navigator
      tabBarPosition="bottom"
      sceneContainerStyle={{
        backgroundColor: "#FEF4F3",
      }}
      tabBarOptions={{
        style: {
          backgroundColor: "#fff",
          paddingBottom: 30,
          paddingTop: 10,
        },
        activeTintColor: "#ab2431",
        inactiveTintColor: "#999999",
        showLabel: false,
        showIcon: true,
        renderIndicator: () => null,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="book-open" size={24} color={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: (props) => <CartTabIcon {...props} />,
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={Favourite}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="heart" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="user" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTab;
