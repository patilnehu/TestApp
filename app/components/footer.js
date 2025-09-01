import { Text, View, StyleSheet } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text>End of List</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  item: { padding: 10, borderBottomWidth: 1 },
  title: { fontWeight: "bold" },
});
