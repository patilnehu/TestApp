import React, { useState } from "react";
import { View, TextInput, Button, Alert, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    Alert.alert("Login Details", `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View className="flex-1 justify-center items-center p-4 bg-white">
      <Text className="text-2xl font-bold mb-4">Login</Text>
      <TextInput
        className="w-full border border-gray-300 p-2 mb-4 rounded"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="w-full border border-gray-300 p-2 mb-4 rounded"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Button
        title="Go to Counter"
        onPress={() => navigation.navigate("Counter")}
      />
      <Button
        title="Go to Posts"
        onPress={() => navigation.navigate("PostList")}
      />
    </View>
  );
}
