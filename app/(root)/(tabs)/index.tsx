import icons from "@/constants/icons";
import images from "@/constants/images";
import { Link } from "expo-router";
import { Image, ScrollView, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="h-full bg-white">
      <View className="flex flex-row items-center justify-between p-7">
        <View className="flex flex-row items-center gap-4">
          <Image source={images.avatar} className="w-16 h-16 rounded-full " />
          <View>
            <Text className="text-gray-300 ">Good Morning</Text>
            <Text className="text-2xl font-bold">Naser swei</Text>
          </View>
        </View>
        <View className="relative ">
          <Image source={icons.bell} className="w-7 h-7" />
          <View className="absolute top-0 right-0 w-3 h-3 bg-blue-500 rounded-full " />
        </View>
      </View>

      <View className="flex flex-row items-center rounded-lg mx-auto p-4 bg-gray-50 w-[90%]">
        <Image source={icons.search} className="w-7 h-7" />
        <TextInput
          placeholder="Search something"
          placeholderTextColor="#888" // Change this to your desired color
          className="flex-1 px-4 py-2 bg-transparent rounded-full"
        />
        <Image source={icons.filter} className="w-7 h-7" />
      </View>
    </SafeAreaView>
  );
}
