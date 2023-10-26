import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Icons from '../assets/svg/Icons';
import {COLORS} from '../theme/Colors';
const Input = ({placeholder, onChangeText, value}) => {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.icon}>
        <Icons iconName="Search" />
      </View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    borderWidth: 0.2,
    borderRadius: 12,
    borderColor: COLORS.activeBorderColor,
    marginTop: 14,
    marginBottom: 14,
    backgroundColor: COLORS.white,
  },
  input: {
    padding: 16,
  },
  icon: {
    marginLeft: 18,
  },
});
