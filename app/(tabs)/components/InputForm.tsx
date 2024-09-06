import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import React from "react";

const InputForm = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addFormContainer}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // iOS에서는 적절한 offset을 설정
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요"
      ></TextInput>
      <Pressable style={styles.addButton}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: "row",
    marginTop: "auto",
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: "#f7f8fa",
  },
  inputField: {
    flex: 1,
    height: 41,
    borderRadius: 4,
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    color: "#000000",
    fontSize: 15,
    textAlignVertical: "center",
    padding: 5,
    marginRight: 25,
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  addButtonText: {
    color: "white",
    fontSize: 25,
  },
});
