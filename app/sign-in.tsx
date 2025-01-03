import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { router } from "expo-router";

const signIn = () => {
  return (
    <SafeAreaView className="h-full bg-white">
      <ScrollView contentContainerClassName="h-full flex flex-col items-center">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="flex flex-col items-center justify-center gap-4 w-[80%] ">
          <Text className="text-sm text-gray-400 font-rubik ">
            WELCOME TO REAL SCOUT
          </Text>
          <Text className="p-2 text-4xl text-center font-rubik-bold">
            Let's Get You Closer To
            <Text className="text-blue-500 "> Your Ideal Home</Text>
          </Text>
          <Text className="text-sm text-gray-500 font-rubik ">
            Login to Real scout with Google
          </Text>
          <TouchableOpacity
            className="flex flex-row items-center justify-center w-[100%] gap-3 px-2 
          py-4 bg-gray-100  rounded-full"
            onPress={() => {
              router.push("/(root)/(tabs)");
            }}
          >
            <Image source={icons.google} className="w-6 h-6" />
            <Text className="text-lg font-bold">Sign up with Google</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
