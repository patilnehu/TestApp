import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/login-screen";
import PostListScreen from "./app/screens/postlist-screen";
import PostDetailsScreen from "./app/screens/postdetails-screen";
import CounterScreen from "./app/screens/counter";

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Posts" component={PostListScreen} />
      <Stack.Screen name="Details" component={PostDetailsScreen} />
      <Stack.Screen name="Counter" component={CounterScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
