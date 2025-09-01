import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Button title="Increment (+)" onPress={() => setCount(count + 1)} />
      <Text style={styles.count}>{count}</Text>
      <Button title="Decrement (-)" onPress={() => setCount(count - 1)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  count: { fontSize: 48, marginBottom: 20 },
});

export default CounterScreen;
