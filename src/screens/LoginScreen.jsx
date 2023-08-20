import React, { useEffect } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';

import UserInfoInput from '../components/UserInfoInput';
import LoginSignupLink from '../components/LoginSignupLink';

export default function LoginScreen(props) {
  const { navigation } = props;

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      }
    });
    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <UserInfoInput mode="login" />
      <LoginSignupLink
        text="Not registered?"
        linkText="Sign up here!"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Signup' }],
          });
        }}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
