import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {COLORS} from '../theme/Colors';

const {width} = Dimensions.get('screen');

const OnboardCarouselItem = props => {
  const {title, subtitle, img} = props;

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
      {img}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    width: width - 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    lineHeight: 33,
    fontWeight: '300',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: COLORS.textColor,
  },
});

export default OnboardCarouselItem;
