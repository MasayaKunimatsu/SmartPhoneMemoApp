import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

import AppBar from '../components/AppBar';
import UserInfoInput from '../components/UserInfoInput';
import LoginSignupLink from '../components/LoginSignupLink';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />
      <UserInfoInput title="Log In" />
      <LoginSignupLink text="Not registered?" linkText="Sign up here!" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
