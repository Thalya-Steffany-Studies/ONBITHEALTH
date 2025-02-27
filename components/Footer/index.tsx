import { Text, View } from "react-native";

export interface IFooter {
  text: string;
}

export const Footer = ({ text }: IFooter) => (
  <View>
    <Text className="text-lg font-medium text-brand-800 font-be-vietnam">
      {text}
    </Text>
  </View>
);
