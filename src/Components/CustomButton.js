import React, {useState} from 'react';
import {Text, StyleSheet, Pressable, ActivityIndicator} from 'react-native';

import {isSmallerDevice} from '../Utils/Device';
import colors from '../styles/colors';
import {BUTTON_HEIGHT} from '../Utils/FunctionalConstants';

const CustomButton = props => {
  const {
    indicator = false,
    style = null,
    login = false,
    removeAccount = false,
    doubleTapDisable = false,
   
  } = props;

  const [buttonColor, setButtonColor] = useState(colors.loginButtonColor);

  const buttonClicked = () => {
    console.log('button clicked');
    setButtonColor(colors.loginButtonColor);
    props.actionClicked();
  };

  const showActivityIndicator = () => {
    if (indicator === true) {
      return (
        <ActivityIndicator
          animating={indicator}
          style={styles.indicator}
          size="small"
          color="white"
        />
      );
    } else {
      return null;
    }
  };

  const buttonTitle = () => {
    if (indicator === true) {
      return null;
    } else {
      return props.title;
    }
  };

  const addMoneyPressedIn = () => {
    setButtonColor(colors.textfield.focusedBorderColor);
  };
  return (
    <Pressable
      testID={props.e2eID}
      style={[
        props.disabled ? styles.disabledButtonStyle : styles.nextButtonStyle,
        style,
        login && !props.disabled && {backgroundColor: buttonColor},
        {flexDirection: 'row', alignItems: 'center'},
        ,
      ]}
      onPress={() => buttonClicked()}
      onPressIn={addMoneyPressedIn}
      disabled={props.disabled || doubleTapDisable}>
      <Text
        style={[
          props.disabled
            ? styles.disabledNextButtonTextStyle
            : styles.nextButtonTextStyle,
          login && !props.disabled && {color: colors.black},
          removeAccount ? styles.removeAccountTextColor : null,
        ]}>
        {buttonTitle()}
      </Text>
      {showActivityIndicator()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  nextButtonStyle: {
    backgroundColor: colors.login.buttonBackgroundColor,
    borderRadius: 16,
    height: isSmallerDevice()
      ? BUTTON_HEIGHT.SMALLER_DEVICE_BUTTON
      : BUTTON_HEIGHT.HEIGHER_DEVICE_BUTTON,
    justifyContent: 'center',
    alignContent: 'center',
    marginTop: 25,
    width: '100%',
  },

  disabledButtonStyle: {
    backgroundColor: colors.login.disabledButtonBackgroundColor,
    borderRadius: 16,
    height: isSmallerDevice()
      ? BUTTON_HEIGHT.SMALLER_DEVICE_BUTTON
      : BUTTON_HEIGHT.HEIGHER_DEVICE_BUTTON,
    justifyContent: 'center',
    width: '100%',
    marginTop: 25,
  },

  nextButtonTextStyle: {
    color: colors.primaryButtonTextColor,
    fontFamily: colors.primaryBoldButtonFont,
    fontSize: 16,
    letterSpacing: 0,
    textAlign: 'center',
    lineHeight: 20.13,
    fontWeight: '500',
  },

  disabledNextButtonTextStyle: {
    color: colors.secondaryFontColor,
    fontFamily: colors.primaryBoldButtonFont,
    fontSize: 16,
    letterSpacing: 1,
    textAlign: 'center',
    lineHeight: 20.13,
    fontWeight: '400',
  },

  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeAccountTextColor: {
    color: 'white',
  },
});

export default CustomButton;
