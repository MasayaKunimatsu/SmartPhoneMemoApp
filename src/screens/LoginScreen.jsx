import React, { useEffect, useState } from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import firebase from 'firebase';

import UserInfoInput from '../components/UserInfoInput';
import LoginSignupLink from '../components/LoginSignupLink';
import Loading from '../components/Loading';

export default function LoginScreen(props) {
  const { navigation } = props;
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }],
        });
      } else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <Loading isLoading={isLoading} />
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
