import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
} from 'react-native';
import {strings} from '../strings/strings';
import colors from '../styles/colors';
import Routes from '../Navigator/Routes';
import {inputStyles} from '../styles/InputStyles';
import HorizontalLine from '../Components/HorizontalLine';

const DashBoardScreen = props => {
  const {navigation} = props;

  const clickHandler = () => {
    navigation.navigate(Routes.CREATE_TASK_SCREEN);
  };

  const seeListScreen = () => {
    navigation.navigate(Routes.ALL_LIST_SCREEN);
  };

  const editTask = () => {
    navigation.navigate(Routes.EDIT_LIST_TASK_SCREEN);
  };

  const listItem = (text, icon, callFun) => {
    return (
      <TouchableOpacity onPress={callFun} style={styles.touchableSeeList}>
        <View style={styles.taskListView}>
          <Image style={styles.taskImg} source={icon}></Image>
          <Text style={styles.taskTxt}>{text}</Text>
          <Image
            style={styles.taskImg}
            source={require('../../assets/images/arrow/right_arrow_bold.png')}></Image>
        </View>

        <HorizontalLine marginTop={15} />
      </TouchableOpacity>
    );
  };

  return (
    <View testID="route" style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={colors.white}
      />
      <Text style={inputStyles.headerStyle}>{strings.dashboard.title}</Text>
      {listItem(
        strings.dashboard.taskList,
        require('../../assets/images/icon/icn_list.png'),
        seeListScreen,
      )}
      {listItem(
        strings.dashboard.editTask,
        require('../../assets/images/icon/icn_edit.png'),
        editTask,
      )}
      {/* <TouchableOpacity onPress={seeListScreen} style={styles.touchableSeeList}>
        <View style={styles.taskListView}>
        <Image
            style={styles.taskImg}
            source={require('../../assets/images/icon/icn_list.png')}></Image>
          <Text style={styles.taskTxt}>{strings.dashboard.taskList}</Text>
          <Image
            style={styles.taskImg}
            source={require('../../assets/images/arrow/right_arrow_bold.png')}></Image>
        </View>
        
       <HorizontalLine  marginTop = {15}/> 
      </TouchableOpacity> */}

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={clickHandler}
        style={styles.touchableOpacityStyle}>
        <Image
          source={require('../../assets/images/icon/icn_plus_btn.png')}
          style={styles.floatingButtonStyle}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inviteBgColor,
    padding: 30,
  },
  touchableSeeList: {
    width: '100%',
    marginTop: 20,
  },
  taskListView: {
    flexDirection: 'row',
  },
  taskTxt: {
    fontSize: 15,
    color: colors.brandPoolGreenColor,
    flex: 1.5,
    fontWeight: '500',
    marginLeft: 15,
  },
  taskImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
  },

  item: {
    backgroundColor: 'orange',
    padding: 20,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
});

export default DashBoardScreen;
