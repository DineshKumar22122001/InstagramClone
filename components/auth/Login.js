import React, { Component } from "react";
import { View, Button, TextInput, Text } from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import styles from "../App.style";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.onSignIn = this.onSignIn.bind(this);
  }
  onSignIn() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <View style={{ padding: 30 }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
        />
        <View style={{ paddingBottom: 30, paddingTop: 30 }}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <Text style={styles.button} onPress={() => this.onSignIn()}>
          LOGIN
        </Text>
      </View>
    );
  }
}

export default Login;
