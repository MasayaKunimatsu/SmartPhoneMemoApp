import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { string } from 'prop-types';

export default function LoginSignupLink(props) {
  const { text, linkText } = props;
  return (
    <View style={styles.textContainer}>
      <Text style={[styles.textCommon]}>{text}</Text>
      <Text style={[styles.textCommon, styles.link]}>{linkText}</Text>
    </View>
  );
}

LoginSignupLink.propTypes = {
  text: string.isRequired,
  linkText: string.isRequired,
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
