import React, { useState } from "react";

import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as DocumentPicker from "expo-document-picker";

import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import AppDatePicker from "../components/AppDatePicker";

function EventForm(props) {
  const [documentDetails, setdocumentDetails] = useState();

  const readDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: "application/*",
      });
      setdocumentDetails(result);
    } catch (error) {
      console.log("Can't open file", error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <AppText style={styles.title}>About Event</AppText>
        <AppTextInput style={styles.textInput} placeholder="Title" />
        <AppTextInput style={styles.textArea} placeholder="Description" />
        <AppDatePicker />
        <TouchableOpacity
          onPress={readDocument}
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
        </TouchableOpacity>
        {documentDetails && (
          <View
            style={{
              width: 300,
              height: 50,
              borderWidth: 1,
              borderRadius: 10,
              padding: 5,
              margin: 10,
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              fontSize: 24,
              flexDirection: "row",
              overflow: "hidden",
            }}
          >
            <Text style={{ width: 200, fontSize: 14 }}>
              {documentDetails.name}
            </Text>
            <MaterialCommunityIcons
              onPress={() => setdocumentDetails(null)}
              name="close"
              size={24}
              color="grey"
            />
          </View>
        )}

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
