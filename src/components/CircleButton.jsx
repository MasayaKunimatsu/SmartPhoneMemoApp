import React from 'react';
import { View, StyleSheet } from 'react-native';
import { string, shape } from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
  const { iconName, style } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Feather name={iconName} size={32} color="white" />
    </View>
  );
}

CircleButton.propTypes = {
  iconName: string.isRequired,
  style: shape(),
};

CircleButton.defaultProps = {
  style: null,
};

const styles = StyleSheet.create({
  circleButton: {
    position: 'absolute',
    right: 40,
    bottom: 40,
    backgroundColor: '#467fd3',
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  circleButtonLabel: {
    fontSize: 40,
    lineHeight: 40,
    color: 'white',
    fontWeight: '300',
  },
});
