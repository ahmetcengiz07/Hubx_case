import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabBar from './TabBar/TabBar';
import PaywallScreen from '../screens/PaywallScreen/PaywallScreen';

const Stack = createNativeStackNavigator();
const RouteNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="TabBar" component={TabBar} />
      <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
    </Stack.Navigator>
  );
};

export default RouteNavigation;
