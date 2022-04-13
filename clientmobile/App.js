import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { key: 1, item: " Item 1" },
    { key: 2, item: " Item 2" },
    { key: 3, item: " Item 3" },
    { key: 4, item: " Item 4" },
    { key: 5, item: " Item 5" },
    { key: 6, item: " Item 6" },
    { key: 7, item: " Item 7" },
  ]);
  const [name, setName] = useState("");

  const DATA = [
    {
      title: "Title 1",
    },
  ];

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setItems([...items, { key: 69, item: "Item 69" }]);
    setRefreshing(false);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChange={(value) => setName(value)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "blue",
    fontSize: 20,
    fontStyle: "italic",
    margin: 10,
  },
  item: {
    backgroundColor: "#4ae1fa",
    justifyContent: "center",
    alignItems: "center",
  },
});
