import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from "react-native";
import React from "react";
import InputForm from "../components/InputForm";
import TodoItem from "../components/TodoItem";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const MainScreen = () => {
  const todos = useSelector((state: RootState) => state.todo.todos);
  const checkedTodos = todos.filter((todo) => todo.status === "done");
  const uncheckedTodos = todos.filter((todo) => todo.status === "todo");
  return (
    <SafeAreaView style={styles.container}>
      {/* <StatusBar barStyle={"default"} /> */}
      <Text style={styles.pageTitle}>Todo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
        {uncheckedTodos.length > 0 ? (
          <FlatList
            data={uncheckedTodos}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id.toString()}
          ></FlatList>
        ) : (
          <Text style={styles.emptyText}>할 일이 없습니다.</Text>
        )}
      </View>
      <View style={styles.separator}></View>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
        {checkedTodos.length > 0 ? (
          <FlatList
            data={checkedTodos}
            renderItem={({ item }) => <TodoItem {...item} />}
            keyExtractor={(item) => item.id.toString()}
          ></FlatList>
        ) : (
          <Text style={styles.emptyText}>완료된 일이 없습니다.</Text>
        )}
      </View>
      <InputForm />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === "android" ? 20 : 0,
    backgroundColor: "#f7f8fa",
  },
  pageTitle: {
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: "600",
  },
  listView: {
    flex: 1,
  },
  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: "500",
  },
  separator: {
    marginHorizontal: 10,
    marginTop: 20,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  emptyText: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
});
