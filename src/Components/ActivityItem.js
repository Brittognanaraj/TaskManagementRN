import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import colors from '../styles/colors';

export const ActivityItem = ({item, edit = false}) => {
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.left}>
          <Text style={styles.taskTxt}>{item.task_name}</Text>
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <Text style={styles.taskState}>{'Location : '}</Text>
            <Text style={styles.taskState}>{item.task_state}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 1,
    backgroundColor: colors.inviteBgColor,
  },
  boxContainer: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 4,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 3, height: 3},
    shadowRadius: 2,
    shadowOpacity: 0.8,
    elevation: 5,
  },
  left: {
    flex: 1.5,
  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightArrow: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  taskImg: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  playStopImg: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
  },
  taskTxt: {
    fontSize: 19,
    color: colors.brandPoolGreenColor,
    flex: 1.5,
    fontWeight: '600',
  },
  taskState: {
    fontSize: 14,
    color: colors.lightGray,
    fontWeight: '400',
  },
  timerText: {
    fontSize: 14,
    color: colors.black,
    backgroundColor: colors.borderColor,
    fontWeight: '400',
    marginTop: 5,
  },
});
