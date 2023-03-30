import React from "react";
import { Text, View, Button } from "react-native";

const Landing = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 30,
        alignItems: "center",
      }}
    >
      <View style={{ width: 100, height: 50 }}>
        <Button
          title="Register"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
      <View style={{ width: 100 }}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
};

export default Landing;
