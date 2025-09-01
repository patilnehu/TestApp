import React from "react";
import { View, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function PostDetailsScreen() {
  const route = useRoute();
  const { post } = route.params;

  return (
    <View className="flex-1 p-4 bg-white">
      <Text className="text-2xl font-bold mb-2">{post.title}</Text>
      <Text className="text-gray-700">{post.body}</Text>
    </View>
  );
}
