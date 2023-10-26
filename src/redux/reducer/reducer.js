import {ON_BOARDING} from '../action/action';

const initialState = {
  onBoarding: false,
};

const onBoardingReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_BOARDING:
      return {...state, onBoarding: !state.onBoarding};
    default:
      return state;
  }
};

export default onBoardingReducer;
