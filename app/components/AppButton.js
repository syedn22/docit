import React from "react";
import { Button, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppButton({ title, onPress, style, icon }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color="white"
        style={{ paddingRight: 5 }}
      />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: "bold",
  },
  button: {
    width: 250,
    height: 40,
    backgroundColor: "dodgerblue",
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
});
