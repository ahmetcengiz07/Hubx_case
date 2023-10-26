import {configureStore} from '@reduxjs/toolkit';
import onBoardingReducer from '../reducer/reducer';

const store = configureStore({
  reducer: {
    onBoarding: onBoardingReducer,
  },
});

export default store;
