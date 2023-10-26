import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import Card from './Card';

const CardList = () => {
  const data = [
    {
      key: 1,
      iconName: 'Scanner',
      title: 'Unlimited',
      subtitle: 'Plant Identify',
    },
    {
      key: 2,
      iconName: 'SpeedMeter',
      title: 'Faster',
      subtitle: ' Process',
    },
    {
      key: 3,
      iconName: 'SpeedMeter',
      title: 'Detailed',
      subtitle: 'Detailed',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Card
        iconName={item.iconName}
        title={item.title}
        subtitle={item.subtitle}
      />
    );
  };
  return (
    <View style={{marginHorizontal: 24, marginBottom: 16}}>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CardList;

const styles = StyleSheet.create({});
