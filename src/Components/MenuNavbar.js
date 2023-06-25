import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {inputStyles} from '../styles/InputStyles';

const MenuNavBar = props => {
  const {title, customDismiss = false, dismiss, marginLeft = 0} = props;
  const navigation = useNavigation();

  const pressBack = () => {
    if (customDismiss) {
      dismiss();
      return;
    }
    navigation.goBack();
  };

  const backIcon = () => {
    return (
      <Image
        testID="back_icon"
        source={require('../../assets/images/arrow/arrow-left.png')}
      />
    );
  };

  return (
    <View style={[styles.container, {marginLeft: marginLeft}]}>
      <View style={styles.subContainer}>
        <TouchableOpacity testID="back" onPress={pressBack}>
          <View style={styles.backButton}>{backIcon()}</View>
        </TouchableOpacity>
        <Text testID="title" style={inputStyles.headerStyleNav}>
          {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    height: 35,
    width: 35,

    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default MenuNavBar;
