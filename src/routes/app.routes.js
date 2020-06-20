import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/Home";

const AppTabs = createBottomTabNavigator();

export default function AppRoutes() {
  <AppTabs.Navigator>
    <AppTabs.Screen name="Home" component={Home} />
  </AppTabs.Navigator>;
}
