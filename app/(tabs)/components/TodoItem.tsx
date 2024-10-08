import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import CheckedBox from "../../../assets/svg/checkbox-uncheck.svg";
import UncheckBox from "../../../assets/svg/checkbox-checked.svg";
import DeleteBtn from "../../../assets/svg/delete.svg";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { deleteTodo, updateTodo } from "@/redux/slices/todoSlice";

type Props = {
  id: number;
  text: string;
  status: "todo" | "done";
};

const TodoItem = (props: Props) => {
  const Dispatch = useDispatch<AppDispatch>();

  const onCheck = () => {
    Dispatch(updateTodo({ ...props }));
  };

  const onDelete = () => {
    Dispatch(deleteTodo({ ...props }));
  };
  return (
    <View style={styles.todoItemContainer}>
      <Pressable style={styles.checkBtn} hitSlop={10} onPress={onCheck}>
        {props.status === "todo" ? (
          <UncheckBox />
        ) : (
          <CheckedBox style={styles.CheckedBox} />
        )}
      </Pressable>
      <Text
        style={
          props.status === "todo" ? styles.todoText : styles.todoTextChecked
        }
      >
        {props.text}
      </Text>
      <Pressable
        onPress={onDelete}
        style={
          props.status === "todo"
            ? styles.todoDeleteBtn
            : styles.todoDeleteBtnDone
        }
        hitSlop={10}
      >
        <DeleteBtn />
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  todoItemContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "#f7f8fa",
  },
  checkBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  todoText: {
    marginRight: "auto",
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
  todoTextChecked: {
    marginRight: "auto",
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    opacity: 0.3,
    textDecorationLine: "line-through",
  },
  todoDeleteBtn: {
    opacity: 0.8,
  },
  todoDeleteBtnDone: {
    opacity: 0.3,
  },
  CheckedBox: {
    shadowColor: "#000000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
});
