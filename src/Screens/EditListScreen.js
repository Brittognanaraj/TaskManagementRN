import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from 'react-native';
import {strings} from '../strings/strings';
import colors from '../styles/colors';
import {TaskItemComponent} from '../Components/TaskItemComponent';
import Routes from '../Navigator/Routes';
import DatabaseUtils from '../database/DatabaseUtils';
import {inputStyles} from '../styles/InputStyles';
import MenuNavBar from '../Components/MenuNavbar';

let dataBase = DatabaseUtils.getInstance();

const EditListScreen = props => {
  const {navigation} = props;
  const [taskData, setTaskData] = useState(dataBase.getAllTaskItemValues());

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => selectedItem(item.task_id)}>
      <TaskItemComponent item={item} id={item.task_id} edit={true} />
    </TouchableOpacity>
  );

  const selectedItem = id => {
    navigation.replace(Routes.EDIT_TASK_SCREEN, {taskId: id});
  };

  return (
    <View testID="route" style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={colors.white}
      />
       <MenuNavBar title={strings.editTaskList.title} />
       {taskData.length > 0 && (
        <FlatList
          data={taskData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      )}
      {taskData.length === 0 && (
        <View style={styles.subcontainer}>
          <Text style={inputStyles.headerStyle}>
            {strings.activityScreen.noContent}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inviteBgColor,
    padding: 30,
  },
  subcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

export default EditListScreen;
