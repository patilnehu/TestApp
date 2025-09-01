import React, { useState } from "react";
import { View, TextInput, Button, Alert } from "react-native";
import Footer from "../components/footer";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Alert.alert("Login Details", `Email: ${email}\nPassword: ${password}`);
  };

  return (
    <View className="flex-1 justify-center px-5">
      <TextInput
        className="border border-gray-400 mb-3 p-3 rounded"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        className="border border-gray-400 mb-3 p-3 rounded"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <Footer />
    </View>
  );
};

export default LoginScreen;
