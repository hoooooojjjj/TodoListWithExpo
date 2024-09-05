import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";

const MainScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"default"} />
      <Text>Todo App</Text>
      <View>
        <Text>할 일</Text>
      </View>
      <View>
        <Text>완료된 일</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
