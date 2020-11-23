import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { loginAnonymously, registerLoginCallback } from './firebase_config';
import { storeHouse } from './firebase_repository';
import * as firebase from "firebase";

function handleLoginButtonPress() {
  loginAnonymously()
}


export default function App() {
  const [user, setUser] = useState<firebase.User>();

  useEffect(() => {
    // register
    registerLoginCallback((user: firebase.User) => setUser(user));
  }, [])
  
  async function handleWriteHouseButtonPress() {
    if (user?.uid) {
      storeHouse(user.uid, "My Second House");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app! Now!</Text>
      {
        !user && <Button title="Login" onPress={handleLoginButtonPress} />
      }
      <Button title="Write a House" onPress={handleWriteHouseButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
