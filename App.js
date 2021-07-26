import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Main />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    backgroundColor: "#fff",
  },
});
