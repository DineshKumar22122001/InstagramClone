import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "./components/auth/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Main from "./components/Main";
import Save from "./components/main/save";

import { Provider } from "react-redux";

import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import Reducers from "./redux/reducers";
import thunk from "redux-thunk";

// import * as firebase from "firebase/compat/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// import "firebase/compat/auth";
// import "firebase/compat/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfYZGl2K93iHcMFsEC3LlejWYbocjL6_4",
  authDomain: "instagram-demo-befb8.firebaseapp.com",
  projectId: "instagram-demo-befb8",
  storageBucket: "instagram-demo-befb8.appspot.com",
  messagingSenderId: "800146529524",
  appId: "1:800146529524:web:c0c8a3610998d2dd5a92a1",
  measurementId: "G-LPEN96YZH6",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

import React, { Component } from "react";
import Add from "./components/main/Add";

const store = configureStore({ reducer: Reducers }, applyMiddleware(thunk));

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({ loaded: true, loggedIn: false });
      } else {
        this.setState({ loaded: true, loggedIn: true });
      }
    });
  }
  render() {
    const { loaded, loggedIn } = this.state;
    if (!loaded) {
      return (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Loading</Text>
        </View>
      );
    }
    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Landing"
              component={Landing}
              options={{ headerShown: false }}
            ></Stack.Screen>
            <Stack.Screen name="Register" component={Register}></Stack.Screen>
            <Stack.Screen name="Login" component={Login}></Stack.Screen>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    if (loggedIn) {
      return (
        <Provider store={store}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
              ></Stack.Screen>
              <Stack.Screen
                name="Add"
                component={Add}
                navigation={this.props.navigation}
                // options={{ headerShown: false }}
              ></Stack.Screen>
              <Stack.Screen
                name="Save"
                component={Save}
                options={{ headerShown: true }}
                // options={{ headerShown: false }}
              ></Stack.Screen>
            </Stack.Navigator>
          </NavigationContainer>
        </Provider>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
