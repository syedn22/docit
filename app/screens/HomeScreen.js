import React from "react";

import { View, StyleSheet, Text } from "react-native";
import Card from "../components/Card";

function HomeScreen({ navigation }) {
  return (
    <View style={styles.page}>
      <Card
        title="Msc - Software Systems 2018 Batch"
        subtitle="Created By: Priya"
        onPress={() => navigation.navigate("MainScreen")}
      />
      <Card
        title="Msc - Software Systems 2018 Batch"
        subtitle="Created By: Priya"
        onPress={() => navigation.navigate("MainScreen")}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
});
