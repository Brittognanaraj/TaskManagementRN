import {Platform,} from 'react-native';
import {Dimensions} from 'react-native';
import { DEVICE_SIZES } from './FunctionalConstants';

export const isSmallerDevice = () => {
  if (Platform.OS === 'android') {
    //Add android device check here.`
    return false;
  } else {
    const deviceHeight = Dimensions.get('window').height;
    return (
      deviceHeight < DEVICE_SIZES.IPHONE_SE_HEIGHT ||
      deviceHeight === DEVICE_SIZES.IPHONE_6S_PLUS_HEIGHT ||
      deviceHeight === DEVICE_SIZES.IPHONE_8_PLUS_HEIGHT
    );
  }
};
 