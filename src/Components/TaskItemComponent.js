import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import colors from '../styles/colors';
import DatabaseUtils from '../database/DatabaseUtils';
import {msToTime} from '../Utils/StringUtils';
import { TASK_STATUS } from '../Utils/FunctionalConstants';

let dataBase = DatabaseUtils.getInstance();

export const TaskItemComponent = ({item, edit = false}) => {
  const [isPlay, setIsPlay] = useState(false);
  const [playIcon, setPlayIcon] = useState(
    require('../../assets/images/icon/icn_play_btn.png'),
  );
  const [state, setState] = useState(-1);
  const [stop, isSetStop] = useState(true);
  const [timer, setTimer] = useState('00:00:00');

  useEffect(() => {
    if (stop) return;
    setTimer(msToTime(state));
    setTimeout(() => {
      setState(prev => prev + 1);
    }, 1000);
  }, [state]);

  const pressStart = () => {
    if (dataBase.getPlayPosition() == 0) {
      dataBase.setPlayPosition(item.task_id);
      dataBase.updateTaskStatus(item.task_id,TASK_STATUS.INPROGRESS);
      setIsPlay(true);
      isSetStop(false);
      setState(1);
      setPlayIcon(require('../../assets/images/icon/icn_stop.jpg'));
    } else if (dataBase.getPlayPosition() == item.task_id) {
      if (isPlay) {
        setIsPlay(false);
        isSetStop(true);
        dataBase.updateTaskTimer(item.task_id,timer);
        dataBase.updateTaskStatus(item.task_id,TASK_STATUS.FINISHED);

        setState(-1);
        setPlayIcon(require('../../assets/images/icon/icn_play_btn.png'));
        dataBase.setPlayPosition('0');
      }
    } else {
      Alert.alert(
        'Other task is running. Please stop the task and start this one',
      );
    }
  };
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
        {edit && (
          <View style={styles.rightArrow}>
            <Image
              style={styles.taskImg}
              source={require('../../assets/images/arrow/right_arrow_bold.png')}></Image>
          </View>
        )}
        {!edit && (
          <View style={styles.right}>
            <TouchableOpacity onPress={pressStart}>
              <Image style={styles.playStopImg} source={playIcon} />
            </TouchableOpacity>
            {isPlay && <Text style={styles.timerText}>{timer}</Text>}
          </View>
        )}
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
    flex: 2,
    flexDirection: 'row',
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
    justifyContent:'center',
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
