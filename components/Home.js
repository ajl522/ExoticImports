import React, { useRef, useEffect } from "react";
import { View, Text, Image, StyleSheet, Animated } from "react-native";

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};

const Home = () => {
  return (
    <View style={styles.container}>
      <FadeInView style={{ width: 250, height: 50 }}>
        <Text>Home</Text>
        <Image source={require("../assets/images/Layer-15-min.jpg")} />
        <Text>
          Welcome to Exotic Imports Our commitment to excellence and innovation
          underpins everything we do: from the performance of the Formula One™
          team on race day to the ownership experience we offer Sportscars &
          Supercars. Exotic Imports is proud to have joined the McLaren team as
          your retailer.Our aim is to deliver what McLaren Automotive’s
          engineers planned from the outset; a new sports car that is a pleasure
          to own and thrilling to drive.
        </Text>
      </FadeInView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    padding: 30,
  },
});

export default Home;
