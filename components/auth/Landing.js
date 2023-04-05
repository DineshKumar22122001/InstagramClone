import React from "react";
import { Text, View, Button, StyleSheet } from "react-native";
import styles from "../App.style";

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
      <View style={{ width: "100%" }}>
        <Text
          style={{
            marginBottom: 20,
            fontSize: 30,
            backgroundColor: "#3399cc",
            color: "#FFFFFF",
            textAlign: "center",
            padding: 12,
            borderRadius: 4,
          }}
          onPress={() => navigation.navigate("Register")}
        >
          REGISTER
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        {/* <Button
          style={{ backgroundColor: "#ff0000" }}
          title="Login"
          onPress={() => navigation.navigate("Login")}
        /> */}
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("Login")}
        >
          LOGIN
        </Text>
      </View>
    </View>
  );
};

export default Landing;
