import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const TodoItem = () => {
  return (
    <View style={styles.todoItemContainer}>
      <Pressable style={styles.checkBtn} hitSlop={10}></Pressable>
      <Text style={[styles.todoText, styles.todoTextChecked]}>운동하기</Text>
      <Pressable
        style={(styles.todoDeleteBtn, styles.todoDeleteBtnDone)}
        hitSlop={10}
      ></Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItemContainer: {
    backgroundColor: "rgba(0,0,0,0.1)",
    height: 41,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  checkBtn: {
    flex: 1,
  },
  todoText: {
    flex: 10,
  },
  todoTextChecked: {
    flex: 10,
  },
  todoDeleteBtn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "rgba(0,0,0,0.7)",
    borderWidth: 1,
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 20,
  },
  todoDeleteBtnDone: {},
});
