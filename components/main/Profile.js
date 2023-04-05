import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import styles from "../App.style";

import { connect } from "react-redux";
const Profile = (props) => {
  const { currentUser, posts } = props;
  console.log({ currentUser, posts });
  return (
    <View style={styles.profile}>
      <View style={styles.userInfo}>
        {/* <Text>{currentUser.name}</Text> */}
        <Text>{currentUser.email}</Text>
      </View>
      <View style={styles.gallery}>
        <FlatList
          numColumns={3}
          horizontal={false}
          data={posts}
          renderItem={({ item }) => (
            <Image source={{ uri: item.downloadURL }} />
          )}
        ></FlatList>
      </View>
    </View>
  );
};

const mapStateToProps = (store) => ({
  currentUser: store.userState.currentUser,
  posts: store.userState.posts,
});

export default connect(mapStateToProps, null)(Profile);
