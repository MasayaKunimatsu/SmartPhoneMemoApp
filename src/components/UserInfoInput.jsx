import React from 'react';
import {
  View, StyleSheet, Text, TextInput,
} from 'react-native';
import { string } from 'prop-types';

export default function UserInfoInput(props) {
  const { title } = props;
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Password" />
      <Text style={styles.roundButton}>Submit</Text>
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
  },
  roundButton: {
    backgroundColor: '#467fd3',
    color: 'white',
    height: 48,
    width: 99,
    borderRadius: 4,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 16,
    lineHeight: 32,
  },
});
