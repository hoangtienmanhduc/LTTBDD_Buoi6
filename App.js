import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
  var initialElements = [
        {"uimage":"./image/ca_nau_lau.png"},
        {"uimage":"./image/ca_nau_lau.png"}];
  const [taskList, setTaskList] = useState([]);
  const [taskValue, setTaskValue] = useState("");
  const [exampleState, setExampleState] = useState(initialElements);
  
  return (
    <View style={styles.container}>
      <View style={styles.formAdd}>
        <TextInput
          placeholder="Nhập tên môn học"
          style={styles.inputTask}
          onChangeText={(taskValue) => setTaskValue(taskValue)}
          value={taskValue}
        />
        <Button
          title="Thêm mới môn học"
          onPress={() => {
            setTaskList([...taskList, taskValue]);
            setTaskValue("");
            setExampleState(initialElements);
          }}
        />
      </View>
      <FlatList
        style={{ marginTop: 10 }}
        data={taskList}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemTask}>
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.txtNumber}>{index+1} </Text>
                <Image style={{width:10,height:10}} source={item.uimage} />
                <Text style={{ fontSize: 18 }}>{item}</Text>
              </View>
              <TouchableOpacity
                style={styles.btnDelete}
                onPress={() => {
                  const taskListTemp = [...taskList];
                  taskListTemp.splice(index, 1);
                  setTaskList(taskListTemp);
                }}
              >
                <Text style={{ color: "red", padding: 10 }}>Xóa</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  formAdd: {
    height: 120,
    borderBottomWidth: 1,
    padding: 10,
  },
  inputTask: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  itemTask: {
    borderWidth: 1,
    borderRadius: 20,
    margin: 5,
    marginHorizontal: 10,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtNumber: {
    fontSize: 18,
    marginRight: 10,
    color: "red",
    fontWeight: "bold",
  },
  btnDelete: {
    backgroundColor: "yellow",
  },
});
