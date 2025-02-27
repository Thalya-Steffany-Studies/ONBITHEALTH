import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { Text, View } from "react-native";
import { Title } from "@/components/Title";
import "@/global.css";
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  return (
    <View className=" rounded-xl">
      <Text className="text-red-900">Welcome to Tailwind</Text>
    </View>
  );
}
