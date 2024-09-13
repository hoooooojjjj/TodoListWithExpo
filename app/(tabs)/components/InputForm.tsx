import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  TextInput,
  Text,
} from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addTodo } from "@/redux/slices/todoSlice";

const InputForm = () => {
  const [text, setText] = useState<string>("");

  const todosDispatch = useDispatch<AppDispatch>();

  const onSubmit = () => {
    if (!text) {
      return;
    }
    todosDispatch(addTodo(text));
    setText("");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.addFormContainer}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // iOS에서는 적절한 offset을 설정
    >
      <TextInput
        style={styles.inputField}
        placeholder="할 일을 작성해주세요"
        value={text}
        // onChangeText로 입력된 텍스트를 업데이트
        onChangeText={setText}
        // onSubmitEditing으로 엔터를 눌렀을 때 onSubmit 함수 실행
        onSubmitEditing={onSubmit}
      ></TextInput>
      <Pressable style={styles.addButton} hitSlop={32}>
        <Text style={styles.addButtonText} onPress={onSubmit}>
          +
        </Text>
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
