import React, { Component } from "react";
import { View, Button, TextInput } from "react-native";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
        />
        <View style={{ paddingBottom: 30, paddingTop: 30 }}>
          <TextInput
            placeholder="password"
            secureTextEntry={true}
            onChangeText={(password) => this.setState({ password })}
          />
        </View>
        <Button onPress={() => this.onSignIn()} title="Sign In"></Button>
      </View>
    );
  }
}

export default Login;