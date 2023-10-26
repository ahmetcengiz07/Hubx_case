import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
import RouteNavigation from './src/navigation/RouteNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RouteNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
