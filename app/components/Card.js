import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function Card({ title, subtitle, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.heading}>{title}</Text>
        <Text style={styles.subHeading}>{subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Card;

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 150,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "dodgerblue",
    marginBottom: 10,
  },
  heading: { fontSize: 20, color: "#fff", fontWeight: "bold" },
  subHeading: { fontSize: 16, bottom: -50, color: "#fff" },
});
