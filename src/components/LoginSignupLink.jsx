import React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { string, func } from 'prop-types';

export default function LoginSignupLink(props) {
  const { text, linkText, onPress } = props;
  return (
    <View style={styles.textContainer}>
      <Text style={[styles.textCommon]}>{text}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={[styles.textCommon, styles.link]}>{linkText}</Text>
      </TouchableOpacity>
    </View>
  );
}

LoginSignupLink.propTypes = {
  text: string.isRequired,
  linkText: string.isRequired,
  onPress: func,
};

LoginSignupLink.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 27,
    flexDirection: 'row',
    marginTop: 24,
  },
  textCommon: {
    fontSize: 14,
    lineHeight: 24,
  },
  link: {
    marginLeft: 8,
    color: '#467FD3',
  },
});
