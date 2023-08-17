import React from 'react';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';

import UserInfoInput from '../components/UserInfoInput';
import LoginSignupLink from '../components/LoginSignupLink';

export default function SignupScreen(props) {
  const { navigation } = props;
  return (
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <UserInfoInput title="Sign Up" />
      <LoginSignupLink
        text="Already registered?"
        linkText="Log in here!"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
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
