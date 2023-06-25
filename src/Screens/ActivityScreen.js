import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, FlatList} from 'react-native';
import {inputStyles} from '../styles/InputStyles';
import {strings} from '../strings/strings';
import colors from '../styles/colors';
import {ACTIVITY_VALUES} from '../Utils/FunctionalConstants';
import DatabaseUtils from '../database/DatabaseUtils';
import {ActivityItem} from '../Components/ActivityItem';
let dataBase = DatabaseUtils.getInstance();

const ActivityScreen = props => {
  const [rowListArray, setRowsListArray] = useState(
    dataBase.getTaskNotStarted(),
  );
  const [pendingPressed, setPendingPressed] = useState(true);

  const onPressPending = () => {
    setPendingPressed(true);
    setRowsListArray(dataBase.getTaskNotStarted());
  };
  const onPressFinished = () => {
    setPendingPressed(false);
    setRowsListArray(dataBase.getTaskFinished());
  };
  const renderItem = ({item}) => <ActivityItem item={item} />;
  const segmentBar = () => {
    return (
      <View style={styles.boxContainer}>
        <TouchableOpacity onPress={onPressPending}>
          <View
            style={
              pendingPressed ? styles.pendingActivate : styles.pendingDeactivate
            }>
            <Text
              style={
                pendingPressed ? styles.textActivate : styles.textDeactivate
              }>
              {ACTIVITY_VALUES.PENDING}
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onPressFinished}>
          <View
            style={[
              pendingPressed
                ? styles.pendingDeactivate
                : styles.pendingActivate,
              {marginRight: 5},
            ]}>
            <Text
              style={
                pendingPressed ? styles.textDeactivate : styles.textActivate
              }>
              {ACTIVITY_VALUES.FINISHED}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View testID="route" style={styles.container}>
      <Text style={inputStyles.headerStyle}>
        {strings.activityScreen.title}
      </Text>
      {rowListArray.length > 0 && (
        <View>
          {segmentBar()}
          <FlatList
            data={rowListArray}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      )}
      {rowListArray.length === 0 && (
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
    backgroundColor: 'white',
    padding: 30,
  },
  subcontainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pendingActivate: {
    borderRadius: 8,
    backgroundColor: colors.brandPoolGreenColor,
    padding: 15,
  },
  pendingDeactivate: {
    borderRadius: 8,
    backgroundColor: colors.white,
    padding: 15,
  },
  textActivate: {
    color: colors.white,
  },
  textDeactivate: {
    color: colors.black,
  },
  boxContainer: {
    backgroundColor: 'white',
    width: '50%',
    marginVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowRadius: 2,
    shadowOpacity: 0.8,
    elevation: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
});

export default ActivityScreen;
