import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
} from 'react-native';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Feather } from '@expo/vector-icons';

export default function MemoList() {
  return (
    <View>
      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/12/24 10:00</Text>
        </View>
        <TouchableOpacity style={styles.memoListItemDelete}>
          <Feather name="x" size={16} color="#b0b0b0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/12/24 10:00</Text>
        </View>
        <TouchableOpacity style={styles.memoListItemDelete}>
          <Feather name="x" size={16} color="#b0b0b0" />
        </TouchableOpacity>
      </View>

      <View style={styles.memoListItem}>
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/12/24 10:00</Text>
        </View>
        <TouchableOpacity style={styles.memoListItemDelete}>
          <Feather name="x" size={16} color="#b0b0b0" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  memoListItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  memoListItemTitle: {
    fontWeight: 'bold',
    lineHeight: 24,
  },
  memoListItemDate: {
    fontSize: 12,
    color: 'gray',
  },
  memoListItemDelete: {
    position: 'absolute',
    right: 19,
  },
});
