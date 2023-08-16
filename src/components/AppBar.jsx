import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
import { bool } from 'prop-types';

export default function AppBar(props) {
  const { backButtonFlag, logoutButtonFlag } = props;
  return (
    <View style={styles.appbar}>
      <View style={styles.appbarInner}>
        <TouchableOpacity style={styles.appbarLeft}>
          <Text style={styles.backText}>{`${backButtonFlag ? '< Back' : ''}`}</Text>
        </TouchableOpacity>
        <Text style={styles.appbarTitle}>Memo App</Text>
        <TouchableOpacity style={styles.appbarRight}>
          <Text style={styles.logoutText}>{`${logoutButtonFlag ? 'ログアウト' : ''}`}</Text>
        </TouchableOpacity>
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
  },
  backText: {
    color: 'white',
    fontSize: 20,
  },
  appbarRight: {
    position: 'absolute',
    right: 13,
    bottom: 8,
  },
  logoutText: {
    color: 'rgba(255, 255, 255, 0.8)',
  },
});
