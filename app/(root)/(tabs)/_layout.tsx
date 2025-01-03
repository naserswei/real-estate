import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import icons from "@/constants/icons";

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.home}
              className="w-7 h-7"
              style={{ tintColor: color }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.search}
              className="w-7 h-7"
              style={{ tintColor: color }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <Image
              source={icons.person}
              className="w-7 h-7"
              style={{ tintColor: color }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
