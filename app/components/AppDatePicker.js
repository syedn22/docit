import React, { useState } from "react";
import { Platform, StyleSheet, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import AppButton from "./AppButton";
import AppText from "./AppText";

function AppDatePicker({ dateTitle, timeTitle, setDateTime }) {
  const [date, setDate] = useState(Date.now());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [value, setvalue] = useState();

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
    
    const dateArray = String(currentDate).split(" ");
    const timeArray = dateArray[4].split(":");
    // setDateTime({
    //   month: dateArray[1],
    //   day: dateArray[2],
    //   year: dateArray[3],
    //   hour: timeArray[0],
    //   minute: timeArray[1],
    // });
    setvalue(String(currentDate));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => showMode("date");

  const showTimepicker = () => showMode("time");

  return (
    <>
      <View style={styles.conatiner}>
        <AppButton
          onPress={showDatepicker}
          title="Date"
          style={styles.button}
          icon="calendar"
        />
        <AppText style={styles.text}>{value}</AppText>
      </View>

      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </>
  );
}

export default AppDatePicker;

const styles = StyleSheet.create({
  text: {
    height: 50,
    fontSize: 16,
    width: 200,
    backgroundColor: "white",
    height: 40,
    marginVertical: 5,
    borderRadius: 10,
  },
  conatiner: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  button: { margin: 0, width: 100, marginRight: 5 },
});
