import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MainPage from "./src/hooks/HooksTest";
//  aaa
export default function App() {
  const [test, setTest] = useState("살려줘");
  const [count, setCount] = useState(0);
  return (
    <View>
      <Button title="AA" onPress={(e) => setTest("초기 살려줘2")} />
      <TextInput
        value={test}
        onChange={(e) => {
          setTest(e.target.value);
        }}
      ></TextInput>

      <Button title="AA" onPress={(e) => setTest("초기 살려줘2")} />
      <Text>{count}</Text>
      <Button title="up" onPress={(e) => setCount(count + 1)}></Button>
      <Button title="down" onPress={(e) => setCount(count - 1)} />

      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.button}
        onPress={(e) => {
          setCount(count + 1);
          console.log("콘솔");
          Alert.alert("위치를 찾을 수가 없습니다.", "앱을 껏다 켜볼까요?");
        }}
      >
        <Text style={styles.buttonText}>up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.4}
        style={styles.button}
        onPress={(e) => setCount(count - 1)}
      >
        <Text style={styles.buttonText}>down</Text>
      </TouchableOpacity>
      <MainPage></MainPage>
    </View>
  );
}
// <View style={styles.container}>
//   <Text>Open up App.js to start working on your app!</Text>
//   <Button>버튼</Button>
//   <StatusBar style="auto" />
// </View>
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 80,
    height: 40,
    backgroundColor: "#ad9d9d",
    borderRadius: 4.5,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
});
