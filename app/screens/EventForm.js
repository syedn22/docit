import React from "react";

import { View, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import AppDatePicker from "../components/AppDatePicker";

function EventForm(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <AppText style={styles.title}>About Event</AppText>
        <AppTextInput style={styles.textInput} placeholder="Title" />
        <AppTextInput style={styles.textArea} placeholder="Description" />
        <AppDatePicker />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 1,
            borderRadius: 5,
            width: 150,
          }}
        >
          <MaterialCommunityIcons name="paperclip" size={28} color="grey" />
          <AppText style={{ fontSize: 15 }}>Add</AppText>
        </View>

        <AppButton title="Submit"></AppButton>
      </View>
    </ScrollView>
  );
}

export default EventForm;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  textInput: {
    height: 50,
    width: 340,
    borderRadius: 5,
    borderWidth: 0,
  },
  textArea: {
    height: 150,
    width: 340,
    borderRadius: 5,
    borderWidth: 0,
  },
  title: {
    fontSize: 30,
    height: 70,
    fontWeight: "100",
  },
  icon: {
    paddingLeft: 10,
  },
});
