import React from "react";
import { TextInput, View, StyleSheet, Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AppTextInput({ style, icon, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      <MaterialCommunityIcons
        name={icon}
        size={24}
        color="black"
        style={{ paddingRight: 5 }}
      />
      <TextInput style={[{ color: "#000", fontSize: 20 }]} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderColor: "#000",
    borderRadius: 30,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    width: 300,
    justifyContent: "center",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
