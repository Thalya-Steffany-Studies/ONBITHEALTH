import { Linking, Text, TouchableOpacity } from "react-native";

interface ILinkButton {
  url: string;
  text: string;
}

export const LinkButton = ({ url, text }: ILinkButton) => {
  return (
    <TouchableOpacity
      className="bg-brand-300 p-3 rounded-lg w-full active:bg-brand-500"
      onPress={() => Linking.openURL(url)}
      activeOpacity={1}
    >
      <Text className="text-brand-800 text-center text-lg font-medium font-be-vietnam w-full">
        {text}
      </Text>
    </TouchableOpacity>
  );
};
