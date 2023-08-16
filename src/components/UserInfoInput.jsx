import React from 'react';
import {
  View, StyleSheet, Text, TextInput,
} from 'react-native';
import { string } from 'prop-types';
import Button from './Button';

export default function UserInfoInput(props) {
  const { title } = props;
  return (
    <View style={styles.inputContainer}>
      <View>
        <Text style={styles.inputTitle}>{title}</Text>
      </View>
      <View>
        <TextInput style={styles.input} placeholder="Email Address" />
        <TextInput style={styles.input} placeholder="Password" />
      </View>
      <Button buttonText="Submit" />
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
