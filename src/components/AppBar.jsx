import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { bool } from 'prop-types';

export default function AppBar(props) {
  const { backButtonFlag, logoutButtonFlag } = props;
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <Text style={styles.appbarLeft}>{`${backButtonFlag ? '< Back' : ''}`}</Text>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <Text style={styles.appbarRight}>{`${logoutButtonFlag ? 'ログアウト' : ''}`}</Text>
      </View>
    </View>
  );
}

AppBar.propTypes = {
  backButtonFlag: bool,
  logoutButtonFlag: bool,
};

AppBar.defaultProps = {
  backButtonFlag: false,
  logoutButtonFlag: false,
};

const styles = StyleSheet.create({
  appbar: {
    width: '100%',
    height: 104,
    backgroundColor: '#467fd3',
    justifyContent: 'flex-end',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
  },
  appbarInner: {
    alignItems: 'center',
  },
  appbarTitle: {
    marginBottom: 8,
    fontSize: 23,
    lineHeight: 32,
    color: 'white',
    fontWeight: 'bold',
  },
  appbarLeft: {
    position: 'absolute',
    left: 13,
    bottom: 8,
    color: 'white',
    fontSize: 20,
  },
  appbarRight: {
    position: 'absolute',
    right: 13,
    bottom: 8,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
