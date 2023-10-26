import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getCategoriesData} from '../api/Api';
import {COLORS} from '../theme/Colors';

const CategList = () => {
  const [categoriesData, setCategoriesData] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  const getCategories = async () => {
    const categories = await getCategoriesData();
    setCategoriesData(categories.data);
  };
  useEffect(() => {
    getCategories();
  }, []);

  const renderItemCategory = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.8} style={styles.categContainer}>
        {!imageLoading && <Text style={styles.plantName}>{item.name}</Text>}
        {imageLoading && (
          <ActivityIndicator
            style={styles.loading}
            size="small"
            color="green"></ActivityIndicator>
        )}
        <Image
          style={styles.image}
          source={item.image}
          resizeMode="contain"
          onLoadEnd={() => setImageLoading(false)}
        />
      </TouchableOpacity>
    );
  };
  return (
    <View style={{marginHorizontal: 24}}>
      <FlatList
        data={categoriesData}
        renderItem={renderItemCategory}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CategList;

const {width} = Dimensions.get('screen');
const itemCategCount = 2;
const imageCategWidth = (width - 68) / itemCategCount;
const imageCategHeight = imageCategWidth;

const styles = StyleSheet.create({
  plantName: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: '500',
    position: 'absolute',
    marginTop: 16,
    marginLeft: 16,
    zIndex: 999,
  },
  categContainer: {
    borderRadius: 12,
    backgroundColor: COLORS.white,
    marginHorizontal: 6,
    width: imageCategWidth,
    height: imageCategHeight,
    marginVertical: 8,
  },
  image: {
    width: imageCategWidth,
    height: imageCategHeight,
    borderRadius: 12,
  },
  loading: {
    borderRadius: 12,
    backgroundColor: '#cec',
    marginHorizontal: 6,
    width: imageCategWidth,
    height: imageCategHeight,
    marginVertical: 8,
  },
});
