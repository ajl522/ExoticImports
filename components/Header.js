import React from "react";
import { View, Text } from "react-native-animatable";
import { StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Exotic Imports</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "black",
  },
  text: {
    color: "orange",
    fontSize: 30,
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "Bodoni 72",
  },
});

export default Header;
