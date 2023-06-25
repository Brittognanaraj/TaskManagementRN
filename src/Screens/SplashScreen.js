import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Routes from '../Navigator/Routes';
import DatabaseUtils from '../database/DatabaseUtils';

const SplashScreen = props => {
  const {navigation} = props;
  setTimeout(() => {
    console.log('5 sec.');
    navigation.replace(Routes.TAB_NAVIGATOR);
  }, 5000);

  useEffect(() => {
    DatabaseUtils.getInstance().createTaskItemsDb();
  }, []);

  return (
    <View testID="route" style={styles.container}>
      <Image source={require('../../assets/images/app_logo.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
