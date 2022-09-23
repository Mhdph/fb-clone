import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList } from "react-native";
import Navigatior from "./app/navigation";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Navigatior />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
