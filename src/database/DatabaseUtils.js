import React from 'react';
import {Alert} from 'react-native';

import Realm from 'realm';
import {getCurrentDateInDDMMYYYY} from '../Utils/StringUtils';
import {TASK_STATUS} from '../Utils/FunctionalConstants';
let realm;
let currentDate = getCurrentDateInDDMMYYYY();
let playPosition = 0;
export default class DatabaseUtils {
  static instance = null;
  static createInstance() {
    var object = new DatabaseUtils();
    return object;
  }

  static getInstance() {
    if (!DatabaseUtils.instance) {
      DatabaseUtils.instance = DatabaseUtils.createInstance();
    }
    return DatabaseUtils.instance;
  }

  createTaskItemsDb() {
    realm = new Realm({
      path: 'TaskDatabase.realm',
      schema: [
        {
          name: 'task_details',
          properties: {
            task_id: {type: 'int', default: 0},
            task_name: 'string',
            task_desc: 'string',
            task_label: 'string',
            task_city: 'string',
            task_state: 'string',
            task_date: 'string',
            task_start_time: 'string',
            task_end_time: 'string',
            task_location: 'string',
            task_created: 'string',
            task_status: 'string',
          },
        },
      ],
    });
  }

  insertTaskItemsDb(
    taskName,
    description,
    dropDownValue,
    city,
    state,
    taskDate,
  ) {
    realm = new Realm({path: 'TaskDatabase.realm'});
    realm.write(() => {
      var ID =
        realm.objects('task_details').sorted('task_id', true).length > 0
          ? realm.objects('task_details').sorted('task_id', true)[0].task_id + 1
          : 1;
      realm.create('task_details', {
        task_id: ID,
        task_name: taskName,
        task_desc: description,
        task_label: dropDownValue,
        task_city: city,
        task_state: state,
        task_date: taskDate,
        task_start_time: '',
        task_end_time: '',
        task_location: '',
        task_created: currentDate,
        task_status: TASK_STATUS.NOT_STARTED,
      });
      Alert.alert(
        'Success',
        'Task added successfully',
        [
          {
            text: 'Ok',
            onPress: () => console.log('Alert Dismissed'),
          },
        ],
        {cancelable: false},
      );
    });
  }

  setPlayPosition(playPos) {
    playPosition = playPos;
  }

  getPlayPosition() {
    return playPosition;
  }

  getAllTaskItemValues() {
    realm = new Realm({path: 'TaskDatabase.realm'});
    var task_details = realm.objects('task_details');
    return task_details;
  }

  getTaskByTaskId(taskId) {
    realm = new Realm({path: 'TaskDatabase.realm'});
    var task_details = realm
      .objects('task_details')
      .filtered('task_id =' + taskId);
    return task_details[0];
  }

  getTaskNotStarted() {
    realm = new Realm({path: 'TaskDatabase.realm'});
    var task_details = realm
      .objects('task_details')
      .filtered('task_status = "not started"');
    return task_details;
  }

  getTaskFinished() {
    realm = new Realm({path: 'TaskDatabase.realm'});
    var task_details = realm
      .objects('task_details')
      .filtered('task_status = "finished"');
    return task_details;
  }

  updateTaskItem(taskId, taskLabel, taskDate) {
    realm = new Realm({path: 'TaskDatabase.realm'});
    realm.write(() => {
      var obj = realm.objects('task_details').filtered('task_id =' + taskId);
      if (obj.length > 0) {
        obj[0].task_label = taskLabel;
        obj[0].task_date = taskDate;

        Alert.alert(
          'Success',
          'Task updated successfully',
          [
            {
              text: 'Ok',
              onPress: () => console.log('Dismissed'),
            },
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert('User Updation Failed');
      }
    });
  }

  updateTaskTimer(taskId, timer) {
    realm = new Realm({path: 'TaskDatabase.realm'});
    realm.write(() => {
      var obj = realm.objects('task_details').filtered('task_id =' + taskId);
      if (obj.length > 0) {
        obj[0].task_end_time = timer;
      } else {
        Alert.alert('User Updation Failed');
      }
    });
  }

  updateTaskStatus(taskId, status) {
    realm = new Realm({path: 'TaskDatabase.realm'});
    realm.write(() => {
      var obj = realm.objects('task_details').filtered('task_id =' + taskId);
      if (obj.length > 0) {
        obj[0].task_status = status;
      } else {
        Alert.alert('User Updation Failed');
      }
    });
  }
}
