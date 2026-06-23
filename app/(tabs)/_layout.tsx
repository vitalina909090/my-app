import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { colors } from "@/global/gloabalStyle";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.rose,
        tabBarInactiveTintColor: colors.mauve,
        tabBarLabelStyle: styles.tabLabel,
      }}
    >

      <Tabs.Screen
        name="index"
        options={{
          title: "About Me",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "account-circle" : "account-circle-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="city"
        options={{
          title: "City",
          tabBarIcon: ({ focused, color, size }) => (
            <MaterialCommunityIcons
              name={focused ? "home-city" : "home-city-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />

    </Tabs>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.blush,
  },
  tabLabel: {
    fontSize: 11,
    letterSpacing: 0.5,
  },
});

export default Layout;