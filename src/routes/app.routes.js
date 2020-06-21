import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import New from "../pages/New";

const Tabs = createBottomTabNavigator();

export default function AppRoutes() {
  const icons = {
    Home: {
      name: "home",
    },
    Perfil: {
      name: "user",
    },
    Registrar: {
      name: "plus-circle",
    },
  };

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const { name } = icons[route.name];

          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        style: {
          backgroundColor: "#131313",
        },
        activeTintColor: "#FFF",
        inactiveTintColor: "#B5BEBF",
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Registrar" component={New} />
      <Tabs.Screen name="Perfil" component={Profile} />
    </Tabs.Navigator>
  );
}
