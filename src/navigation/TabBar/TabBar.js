import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import DiagnoseScreen from '../../screens/DiagnoseScreen/DiagnoseScreen';
import ScanScreen from '../../screens/ScanScreen/ScanScreen';
import MyGardenScreen from '../../screens/MyGardenScreen/MyGardenScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import HomeStack from '../HomeStack/HomeStack';

import Icons from '../../assets/svg/Icons';

const Tab = createBottomTabNavigator();
const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => <Icons color={color} iconName={route.name} />,
        tabBarActiveTintColor: 'green',
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Diagnose" component={DiagnoseScreen} />
      <Tab.Screen
        options={{
          tabBarLabel: '',
        }}
        name="Scan"
        component={ScanScreen}
      />
      <Tab.Screen name="My Garden" component={MyGardenScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabBar;
