import React, { useState, useEffect } from "react";
import { View, FlatList, Text, TouchableOpacity } from "react-native";
import axios from "axios";

const PostListScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="p-4 border-b border-gray-200"
      onPress={() => navigation.navigate("PostDetails", { post: item })}
    >
      <View className="p-3 border-b border-gray-300">
        <Text className="font-bold text-lg">{item.title}</Text>
        <Text className="text-gray-600">{item.body}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1">
      {/* Header */}
      <View className="p-4 bg-blue-500">
        <Text className="text-white text-xl font-bold">Posts List</Text>
      </View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default PostListScreen;
