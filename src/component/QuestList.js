import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getQuenstionData} from '../api/Api';
import {COLORS} from '../theme/Colors';

const QuestList = () => {
  const [questionsData, setQuestionsData] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  const getQuenstions = async () => {
    const questions = await getQuenstionData();
    setQuestionsData(questions.data);
  };

  useEffect(() => {
    getQuenstions();
  }, []);

  const renderItemQuestion = ({item}) => {
    return (
      <TouchableOpacity activeOpacity={0.8}>
        <ImageBackground
          onLoadEnd={() => setImageLoading(false)}
          style={styles.questContainer}
          source={{uri: item.image_uri}}
          resizeMode="contain">
          {imageLoading ? (
            <View style={styles.loading}>
              <ActivityIndicator size="small" color="green" />
            </View>
          ) : (
            <Text style={styles.questionTitle}>{item.title}</Text>
          )}
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginHorizontal: 24}}>
      <FlatList
        data={questionsData}
        renderItem={renderItemQuestion}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginBottom: 24}}
      />
    </View>
  );
};

export default QuestList;

const {width} = Dimensions.get('screen');
const itemQuesCount = 1.5;
const ratioQues = 164 / 240;
const imageQuesWidth = (width - 34) / itemQuesCount;
const imageQuesHeight = imageQuesWidth * ratioQues;

const styles = StyleSheet.create({
  questContainer: {
    width: imageQuesWidth,
    height: imageQuesHeight,
    borderRadius: 12,
    marginRight: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  questionTitle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: '400',
    marginHorizontal: 14,
    textAlign: 'left',
    color: COLORS.white,
    marginBottom: 12,
  },
  loading: {
    width: imageQuesWidth,
    height: imageQuesHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cec',
    marginRight: 12,
    borderRadius: 12,
    overflow: 'hidden',
  },
});
