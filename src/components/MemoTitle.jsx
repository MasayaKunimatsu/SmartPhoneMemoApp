import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MemoTitle() {
  return (
    <View style={styles.memoTitle}>
      <Text style={styles.memoTitleText}>買い物リスト</Text>
      <Text style={styles.memoTitleDate}>2020/12/24 10:00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  memoTitle: {
    backgroundColor: '#467fd3',
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitleText: {
    color: 'white',
    fontSize: 20,
    lineHeight: 32,
    fontWeight: 'bold',
  },
  memoTitleDate: {
    color: 'white',
  },
});
