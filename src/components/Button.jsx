import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { string, func } from 'prop-types';

export default function Button(props) {
  const { buttonText, onPress } = props;
  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.buttonLabel}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  buttonText: string.isRequired,
  onPress: func,
};

Button.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
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
