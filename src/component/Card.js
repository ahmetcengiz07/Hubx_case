import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Icons from '../assets/svg/Icons';
import {COLORS} from '../theme/Colors';

const Card = props => {
  const {iconName, title, subtitle} = props;
  return (
    <View style={styles.cardContainer}>
      <View style={styles.iconContainer}>
        <Icons iconName={iconName} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Card;

const {width} = Dimensions.get('screen');
const itemCount = 2.4;
const itemRatio = 130 / 156;
const cardWidth = (width - 32) / itemCount;
const cardHeight = cardWidth * itemRatio;

const styles = StyleSheet.create({
  cardContainer: {
    width: cardWidth,
    height: cardHeight,
    backgroundColor: COLORS.inactiveBackground,
    marginRight: 8,
    borderRadius: 14,
  },
  title: {
    fontSize: 20,
    lineHeight: 24,
    fontWeight: '500',
    color: COLORS.white,
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 18,
    fontWeight: '400',
    color: COLORS.privacy,
  },
  iconContainer: {
    marginVertical: 16,
    marginHorizontal: 16,
  },
  titleContainer: {
    marginHorizontal: 16,
  },
});
