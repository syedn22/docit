import React from "react";
import { View, Text, StyleSheet } from "react-native";

function ListComponent({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

export default ListComponent;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
    padding: 10,
    width: 300,
  },
  text: {
    fontSize: 16,
    paddingLeft: 30,
  },
});
