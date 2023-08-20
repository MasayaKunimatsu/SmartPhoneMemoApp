/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import {
  View, StyleSheet, Text, TextInput, Alert
} from 'react-native';
import { string } from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';

import Button from './Button';

export default function UserInfoInput(props) {
  const { mode } = props;
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handlePress() {
    if (mode === 'signup') {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => { goMemoList(userCredential) })
        .catch((error) => {
          Alert.alert(error.code);
        });
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => { goMemoList(userCredential) })
        .catch((error) => {
          Alert.alert(error.code);
        });
    }
  }

  function goMemoList(userCredential) {
    const { user } = userCredential;
    console.log(user.uid);
    navigation.reset({
      index: 0,
      routes: [{ name: 'MemoList' }],
    });
  }

  return (
    <View style={styles.inputContainer}>
      <View>
        <Text style={styles.inputTitle}>{`${mode === 'login' ? 'Log In' : 'Sign Up'}`}</Text>
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
        />
      </View>
      <Button
        buttonText="Submit"
        onPress={() => handlePress(mode)}
      />
    </View>
  );
}

UserInfoInput.propTypes = {
  mode: string.isRequired,
};

const styles = StyleSheet.create({
  inputContainer: {
    paddingHorizontal: 27,
  },
  inputTitle: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    paddingVertical: 24,
  },
  input: {
    backgroundColor: 'white',
    height: 48,
    paddingLeft: 8,
    marginBottom: 16,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
});
