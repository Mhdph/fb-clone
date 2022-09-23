import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import CreatePostScreen from "./app/screens/CreatePostScreen";
import FeedScreen from "./app/screens/FeedScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CreatePostScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
