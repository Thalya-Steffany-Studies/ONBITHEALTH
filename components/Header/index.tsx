import { View, Text } from "react-native";
import { Avatar } from "@/components/Avatar";

interface IHeader {
  alt: string;
  url: string;
  text: string;
}

export const Header = ({ alt, url, text }: IHeader) => (
  <View className="gap-6 items-center">
    <Avatar.Root alt={alt}>
      <Avatar.Image
        source={{
          uri: url,
        }}
      />
    </Avatar.Root>

    <Text className="text-2xl text-brand-800 font-bold font-be-vietnam ">
      {text}
    </Text>
  </View>
);
