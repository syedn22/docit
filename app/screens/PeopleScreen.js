import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

import ListComponent from "../components/ListComponent";

const teachers = [{ name: "priya" }, { name: "Shanti" }, { name: "Sugumar" }];
const students = [
  { rollno: "1831001", name: "abi" },
  { rollno: "1831002", name: "abinaya" },
  { rollno: "1831055", name: "Syed Mohammed" },
  { rollno: "1831042", name: "Rohit A" },
];

function PeopleScreen(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Teachers</Text>
        {teachers.map((t) => (
          <ListComponent key={t.name} name={t.name} />
        ))}

        <Text style={styles.heading}>Students</Text>
        {students.map((s) => (
          <ListComponent name={s.name} key={s.rollno} />
        ))}
      </View>
    </ScrollView>
  );
}

export default PeopleScreen;

const styles = StyleSheet.create({
  heading: {
    color: "dodgerblue",
    fontSize: 28,
    borderBottomColor: "dodgerblue",
    borderBottomWidth: 3,
    padding: 10,
    width: 320,
  },
  container: {
    margin: 10,
    flex: 1,
    alignItems: "center",
  },
});
