import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <Text className="text-2xl font-bold mb-4">Counter</Text>
      <View className="flex-row justify-center items-center">
        <TouchableOpacity
          className="px-4 py-2 bg-red-500 rounded"
          onPress={() => setCount(count - 1)}
        >
          <Text className="text-white text-xl">-</Text>
        </TouchableOpacity>
        <Text className="mx-4 text-3xl font-bold">{count}</Text>
        <TouchableOpacity
          className="px-4 py-2 bg-green-500 rounded"
          onPress={() => setCount(count + 1)}
        >
          <Text className="text-white text-xl">+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
