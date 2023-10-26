/* eslint-disable react/self-closing-comp */
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Input from '../../component/Input';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
import QuestList from '../../component/QuestList';
import CategList from '../../component/CategList';
import {EN} from '../../en/en';
import ScreenModal from '../../component/ScreenModal';
import OnBoarding from '../../component/OnBoarding';
import {SafeAreaView} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = () => {
  const navigation = useNavigation();
  const [getStartedVisible, setGetStartedVisible] = useState(null);
  const IS_ONBOARDING_KEY = 'isOnBoarding';

  const getAsyncStorage = async () => {
    const storage = await AsyncStorage.getItem(IS_ONBOARDING_KEY);

    setGetStartedVisible(storage !== 'true');
  };

  useEffect(() => {
    getAsyncStorage();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground source={require('../../assets/Background.png')}>
          <View style={{marginLeft: 24}}>
            <Text style={styles.welcomeText}>{EN.hiPlant}</Text>
            <Text style={styles.whenText}>{EN.goodAfternoon}</Text>
          </View>
          <Input placeholder="Search for plants" />
        </ImageBackground>
        <TouchableOpacity onPress={() => navigation.navigate('PaywallScreen')}>
          <Image
            style={styles.premiumButton}
            resizeMode="contain"
            source={require('../../assets/PremiumBox.png')}
          />
        </TouchableOpacity>
        <View>
          <Text style={styles.getStarted}>{EN.getStarted}</Text>
        </View>
        <QuestList />
        <CategList />
        <ScreenModal
          isVisible={getStartedVisible}
          setIsVisible={setGetStartedVisible}>
          <OnBoarding
            isVisible={getStartedVisible}
            setIsVisible={setGetStartedVisible}></OnBoarding>
        </ScreenModal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
