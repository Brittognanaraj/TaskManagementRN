import {StyleSheet} from 'react-native';

import colors from './colors';

const inputStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // backgroundColor: colors.primaryBackgroundColor,
  },
  subContainer: {
    flex: 1,
    // backgroundColor: colors.primaryBackgroundColor,
    marginTop: 18,
    marginBottom: 18,
    marginLeft: 0,
    marginRight: 0,
  },
  labelStyles: {
    fontSize: 14,
    marginLeft: -10,
    paddingVertical: -10,
    color: colors.secondaryFontColor,
  },

  inputStyles: {
    color: colors.primaryFontColor,
    paddingTop: 20,
    marginLeft: -4.5,
    fontSize: 16,
  },

  inputContainer: {
    marginTop: 20,
    marginBottom: 7,
  },

  containerStyles: {
    borderWidth: 2,
    paddingHorizontal: 10,
    borderColor: colors.textfield.focusedBorderColor,
    borderRadius: 16,
    backgroundColor: colors.textfield.backgroundColor,
  },
  customLabelStyles: {
    colorBlurred: colors.textfield.darkGrey,
    colorFocused: colors.textfield.darkGrey,
    fontSizeFocused: 12,
  },
  androidLabelStyles: {
    backgroundColor: colors.white,
    paddingHorizontal: 5,
  },
  androidInputStyles: {
    color: colors.primaryFontColor,
    paddingHorizontal: 10,
  },
  headerStyle: {
    marginTop: 20,
    fontSize: 22,
    marginBottom: 10,
    fontWeight: '700',
  },
  segmentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 27,
    width:'100%'
  },
  segmentView: {
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 27,
    backgroundColor: colors.primaryBackgroundColor,
    tintColor: colors.declineButtonBackgroundColor,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.declineButtonBackgroundColor,
  },

  segmentAndroidView: {
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 27,
    backgroundColor: colors.lineColor,
    tintColor: colors.declineButtonBackgroundColor,
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.declineButtonBackgroundColor,
    borderTopColor: colors.declineButtonBackgroundColor,
  },

  iossegmentView: {
    width: 160,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 27,
    backgroundColor: 'white',
    // tintColor: colors.declineButtonBackgroundColor,
    // borderRadius: 10,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.declineButtonBackgroundColor,
  },

});

export {inputStyles};
