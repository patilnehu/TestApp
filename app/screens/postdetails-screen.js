import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const PostDetailsScreen = ({ route, navigation }) => {
  const { post } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{post.title}</Text>
      <Text style={styles.body}>{post.body}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Counter"
          onPress={() => navigation.navigate("Counter")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
  body: { fontSize: 16, marginBottom: 20 },
  buttonContainer: { marginTop: 10 },
});

export default PostDetailsScreen;
