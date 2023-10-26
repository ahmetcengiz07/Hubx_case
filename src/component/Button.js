import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Colors';

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 25,
    borderRadius: 12,
    marginVertical: 12,
  },
  title: {
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 24,
    paddingVertical: 16,
  },
});
