import React from 'react';
import { View } from 'react-native';
import CircleButton from '../components/CircleButton';
import MemoTitle from '../components/MemoTitle';
import MemoContent from '../components/MemoContent';

export default function MemoDetailScreen(props) {
  const { navigation } = props;
  return (
    <View>
      <MemoTitle />
      <MemoContent />
      <CircleButton
        iconName="edit-2"
        style={{ top: 60, bottom: 'auto' }}
        onPress={() => { navigation.navigate('MemoEdit'); }}
      />
    </View>
  );
}
