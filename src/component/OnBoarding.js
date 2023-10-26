import {FlatList, Image, Dimensions, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';
import OnboardCarouselItem from './OnBoardingItem';
import {Pagination} from './Pagination';
import {COLORS} from '../theme/Colors';
import Button from './Button';
import {SafeAreaView} from 'react-native-safe-area-context';
import {EN} from '../en/en';
import {useDispatch} from 'react-redux';
import {onBoarding} from '../redux/action/action';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('screen');
const IS_ONBOARDING_KEY = 'isOnBoarding';

const carouselData = [
  {
    img: (
      <Image
        style={{width: width, height: (width * 499) / 375}}
        source={require('../assets/Frame13.png')}
        resizeMode="contain"
      />
    ),
    title: EN.welcometo,
    subtitle: EN.welcomeSubtitle,
    buttonTitle: EN.getStarted,
  },
  {
    img: (
      <Image
        style={{width: width, height: (width * 499) / 375}}
        source={require('../assets/Content.png')}
        resizeMode="contain"
      />
    ),
    title: EN.takeAPhoto,
    subtitle: '',
    buttonTitle: EN.continue,
  },
  {
    img: (
      <Image
        style={{width: width, height: (width * 499) / 375}}
        source={require('../assets/FlatIphone.png')}
        resizeMode="contain"
      />
    ),
    title: EN.getPlant,
    subtitle: '',
    buttonTitle: EN.continue,
  },
];

const OnBoarding = ({setIsVisible}) => {
  const flatListRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const buttonTitle = activeIndex === 0 ? 'Get Started' : 'Continue';
  const dispatch = useDispatch();
  const buttonPressHandle = index => {
    index < carouselData.length - 1
      ? (flatListRef.current.scrollToIndex({
          animated: true,
          index: index + 1,
          viewPosition: 0.5,
        }),
        setActiveIndex(activeIndex + 1))
      : (setIsVisible(false),
        dispatch(onBoarding()),
        AsyncStorage.setItem(IS_ONBOARDING_KEY, 'true'));
  };

  const renderItem = ({item, index}) => (
    <OnboardCarouselItem
      privacy={item?.privacy}
      img={item?.img}
      title={item?.title}
      subtitle={item?.subtitle}
      onPress={item?.onPress}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        scrollEnabled={false}
        bounces={true}
        pagingEnabled
        data={carouselData}
        ref={flatListRef}
        renderItem={({item, index}) => renderItem({item, index})}
        showsHorizontalScrollIndicator={false}
        horizontal
      />
      <Button
        onPress={() => buttonPressHandle(activeIndex)}
        title={buttonTitle}
      />
      {activeIndex === 0 ? (
        <View>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 15,
              color: COLORS.privacy,
              alignSelf: 'center',
            }}>
            {EN.privacyPolicy}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 14,
              lineHeight: 15,
              color: COLORS.privacy,
              alignSelf: 'center',
              textDecorationLine: 'underline',
            }}>
            {EN.privacyPolicyCont}
          </Text>
        </View>
      ) : (
        <Pagination
          activeDotIndex={activeIndex}
          dotsLength={carouselData.length}
          activeDotColor={COLORS.textColor}
        />
      )}
    </SafeAreaView>
  );
};

export default OnBoarding;
