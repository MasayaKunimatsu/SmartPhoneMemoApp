import React from 'react';
import { View } from 'react-native';
import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';
import MemoTitle from '../components/MemoTitle';
import MemoContent from '../components/MemoContent';

export default function MemoDetailScreen() {
  return (
    <View>
      <AppBar backButtonFlag />
      <MemoTitle />
      <MemoContent />
      <CircleButton iconName="edit-2" style={{ top: 160, bottom: 'auto' }} />
    </View>
  );
}
