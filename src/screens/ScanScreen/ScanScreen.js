import {StyleSheet, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {COLORS} from '../../theme/Colors';

const ScanScreen = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default ScanScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
});
