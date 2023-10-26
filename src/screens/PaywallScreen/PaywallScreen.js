import {Image, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import styles from './style';
import Button from '../../component/Button';
import {EN} from '../../en/en';
import RadioButton from '../../component/RadioButton';
import CardList from '../../component/CardList';
import {useNavigation} from '@react-navigation/native';

const PaywallScreen = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/CameraLine.png')}
      />
      <TouchableOpacity
        style={styles.closeButton}
        hitSlop={24}
        onPress={() => navigation.navigate('TabBar')}>
        <Text style={styles.closeText}>X</Text>
      </TouchableOpacity>

      <View>
        <View style={styles.textContainer}>
          <Text style={styles.plantAppText}>{EN.plantApp}</Text>
          <Text style={styles.premiumText}> {EN.premium}</Text>
        </View>
        <Text style={styles.accesAll}>{EN.accessAll}</Text>
        <CardList />
        <RadioButton
          keyItem={1}
          setSelectedButton={setSelectedButton}
          selectedButton={selectedButton}
          title={EN.oneMonth}
          subtitle={EN.autoRenewable}
        />
        <RadioButton
          keyItem={2}
          setSelectedButton={setSelectedButton}
          selectedButton={selectedButton}
          title={EN.oneYear}
          subtitle={EN.firstThreeDays}
        />
        <View style={styles.buttonContainer}>
          <Button title={EN.tryFree} />
        </View>
        <View>
          <Text style={styles.afterThreeDays}>{EN.afterThreeDays}</Text>
          <Text style={styles.tpr}>{EN.tPR}</Text>
        </View>
      </View>
    </View>
  );
};

export default PaywallScreen;
