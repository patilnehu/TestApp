import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./app/screens/login-screen";
import PostListScreen from "./app/screens/postlist-screen";
// import PostDetailsScreen from "./src/screens/PostDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PostList">
          <Stack.Screen name="Login" component={LoginScreen} />
          {/* <Stack.Screen name="Posts" component={PostsScreen} /> */}
          <Stack.Screen name="PostList" component={PostListScreen} />
          {/* <Stack.Screen name="PostDetails" component={PostDetailsScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
