import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';

export default function MemoContent() {
  return (
    <ScrollView style={styles.memoContent}>
      <Text style={styles.memoContentText}>
        買い物リスト
        書体やレイアウトなどを確認するために用います。
        本文用なので使い方を間違えると不自然に見えることもありますので要注意。
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  memoContent: {
    marginHorizontal: 27,
    marginTop: 32,
  },
  memoContentText: {
    fontSize: 16,
  },
});
