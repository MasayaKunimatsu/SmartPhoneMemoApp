/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/12/24 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoListItemDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <Feather name="x" size={16} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/12/24 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoListItemDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <Feather name="x" size={16} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.memoListItem}
        onPress={() => { navigation.navigate('MemoDetail'); }}
      >
        <View>
          <Text style={styles.memoListItemTitle}>買い物リスト</Text>
          <Text style={styles.memoListItemDate}>2020/12/24 10:00</Text>
        </View>
        <TouchableOpacity
          style={styles.memoListItemDelete}
          onPress={() => { Alert.alert('Are you sure?'); }}
        >
          <Feather name="x" size={16} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>
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
    padding: 8,
  },
});
