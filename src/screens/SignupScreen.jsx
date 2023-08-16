import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

import AppBar from '../components/AppBar';
import UserInfoInput from '../components/UserInfoInput';
import LoginSignupLink from '../components/LoginSignupLink';

export default function SignupScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />
      <UserInfoInput title="Sign Up" />
      <LoginSignupLink text="Already registered?" linkText="Log in here!" />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
});
