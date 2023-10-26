import React from 'react';
import {StyleSheet, View} from 'react-native';
import {COLORS} from '../theme/Colors';

export const Pagination = props => {
  const {
    activeDotIndex,
    dotsLength,
    activeDotColor,
    inactiveDotColor = COLORS.inactiveIcon,
  } = props;
  const dots = [...Array(dotsLength).keys()].map(index => {
    const isActive = index === activeDotIndex;
    const isLastIndex = index === dotsLength - 1;

    const style = isActive
      ? [styles.active, {backgroundColor: activeDotColor}]
      : [styles.inactive, {backgroundColor: inactiveDotColor}];
    const marginRightStyle = {marginRight: isLastIndex ? 0 : 10};

    return <View key={`dot_${index}`} style={[style, marginRightStyle]} />;
  });

  return <View style={styles.container}>{dots}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  inactive: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
});
