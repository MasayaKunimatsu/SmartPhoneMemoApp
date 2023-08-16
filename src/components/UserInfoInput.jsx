import React from 'react';
import {
  View, StyleSheet, Text, TextInput,
} from 'react-native';
import { string } from 'prop-types';

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
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonLabel}>Submit</Text>
      </View>
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
  buttonContainer: {
    backgroundColor: '#467fd3',
    alignSelf: 'flex-start',
    borderRadius: 4,
  },
  buttonLabel: {
    color: 'white',
    paddingVertical: 8,
    paddingHorizontal: 24,
    fontSize: 16,
    lineHeight: 32,
  },
});
