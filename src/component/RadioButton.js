import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '../theme/Colors';
import Icons from '../assets/svg/Icons';

const RadioButton = props => {
  const {selectedButton, title, subtitle, keyItem, setSelectedButton} = props;
  const isSelected = selectedButton === keyItem;

  return (
    <TouchableOpacity
      onPress={() => setSelectedButton(keyItem)}
      key={keyItem}
      style={[isSelected ? styles.activeContainer : styles.inactiveContainer]}>
      <View style={[isSelected ? styles.activeCircle : styles.inactiveCircle]}>
        <View
          style={[isSelected ? styles.activeInCircle : styles.inactiveInCircle]}
        />
      </View>
      <View style={styles.titlesContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {isSelected && keyItem === 2 && <Icons iconName="Badge" />}
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  activeContainer: {
    marginHorizontal: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 14,
    borderColor: COLORS.green,
    backgroundColor: COLORS.screenBackground,
    flexDirection: 'row',
    marginVertical: 8,
  },
  activeCircle: {
    width: 24,
    height: 24,
    backgroundColor: COLORS.green,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginVertical: 18,
  },
  activeInCircle: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.white,
    borderRadius: 4,
  },
  inactiveContainer: {
    marginHorizontal: 24,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 14,
    borderColor: COLORS.inactiveIcon,
    backgroundColor: COLORS.inactiveBackground,
    flexDirection: 'row',
    marginVertical: 8,
  },
  inactiveCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginVertical: 18,
    backgroundColor: COLORS.activeBorderColor,
  },
  inactiveInCircle: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  titlesContainer: {
    paddingHorizontal: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '500',
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 12,
    lineHeight: 14,
    fontWeight: '300',
    color: COLORS.privacy,
  },
});
