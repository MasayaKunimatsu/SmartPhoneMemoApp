import React, { useState } from 'react';
import {
  View, StyleSheet, Text, TextInput,
} from 'react-native';
import { string } from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigation } from '@react-navigation/native';

import Button from './Button';

export default function UserInfoInput(props) {
  const { title } = props;
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.inputContainer}>
      <View>
        <Text style={styles.inputTitle}>{title}</Text>
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
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'MemoList' }],
          });
        }}
      />
    </View>
  );
}

UserInfoInput.propTypes = {
  title: string.isRequired,
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
