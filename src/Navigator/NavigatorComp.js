import {screenNavigator} from './Navigators';

export const verticalAnimation = {
  cardStyleInterpolator: ({current, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
  headerShown: false,
};

const NavigatorComp = props => {
  const appNavigator = () => {
    return screenNavigator();
  };

  return appNavigator();
};

export default NavigatorComp;
