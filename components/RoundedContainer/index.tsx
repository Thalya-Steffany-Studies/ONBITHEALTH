import { ReactNode } from "react";
import { View } from "react-native";

interface IRoundedContainer {
  children: ReactNode;
}

export const RoundedContainer = ({ children }: IRoundedContainer) => (
  <View className="justify-center bg-white ro items-center gap-7 box-border p-8 h-max w-full text-brand-800 rounded-tr-[70px] rounded-tl-[70px] drop-shadow-lg shadow-brand-500">
    {children}
  </View>
);
