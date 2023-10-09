import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.head}>
      <Text style={styles.headText}>Welcome To Techify</Text>
      <Text>A place where you find all the latest tech newz...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  head: {
    marginTop: 18,
    justifyContent: "center",
    alignItems: "center",
  },
  headText: {
    fontSize: 18,
    fontWeight: "600",
    letterSpacing: 2,
  },
});

export default Header;
