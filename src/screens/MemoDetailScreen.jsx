import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, ScrollView,
} from 'react-native';
import { shape, string } from 'prop-types';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import { dateToString } from '../utils';

export default function MemoDetailScreen(props) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState(null);

  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc) => {
        const data = doc.data();
        setMemo({
          id: doc.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View>
      <View style={styles.memoTitle}>
        <Text style={styles.memoTitleText} numberOfLines={1}>{memo && memo.bodyText}</Text>
        <Text style={styles.memoTitleDate}>{memo && dateToString(memo.updatedAt)}</Text>
      </View>
      <ScrollView style={styles.memoContent}>
        <Text style={styles.memoContentText}>
          {memo && memo.bodyText}
        </Text>
      </ScrollView>
      <CircleButton
        iconName="edit-2"
        style={{ top: 60, bottom: 'auto' }}
        onPress={() => { navigation.navigate('MemoEdit', { id: memo.id, bodyText: memo.bodyText }); }}
      />
    </View>
  );
}

MemoDetailScreen.propTypes = {
  route: shape({
    params: shape({ id: string }),
  }).isRequired,
};

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
  memoContent: {
    marginHorizontal: 27,
    marginTop: 32,
  },
  memoContentText: {
    fontSize: 16,
  },
});
