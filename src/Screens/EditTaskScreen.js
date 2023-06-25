import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  Platform,
  TouchableWithoutFeedback,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {strings} from '../strings/strings';
import colors from '../styles/colors';
import {Dropdown} from 'react-native-element-dropdown';
import {convertToDDMMYYY, getTaskLabel} from '../Utils/StringUtils';
import CustomButton from '../Components/CustomButton';
import DatePicker from 'react-native-date-picker';
import DatabaseUtils from '../database/DatabaseUtils';
import {inputStyles} from '../styles/InputStyles';

const data = getTaskLabel();
let dataBase = DatabaseUtils.getInstance();

const EditTaskScreen = props => {
  const {taskId} = props.route.params;
  const [taskName, setTaskName] = useState('');
  const [taskCreated, setTaskCreated] = useState('');
  const [description, setDescription] = useState('');
  const [dropDownValue, setDropDownValue] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [btnDisable, setBtnDisable] = useState(true);
  const [valueChanged, setValueChanged] = useState(false);
  const [isShowIcon, setShowIcon] = useState(true);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [DOB, setDOB] = useState(strings.createTask.datePlaceholder);
  const [dateValue, setDateValue] = useState('');

  // useEffect(() => {
  //   realm = new Realm({path: 'TaskDatabase.realm'});
  // }, []);

  useEffect(() => {
    console.log('TASK IIIDD', dataBase.getTaskByTaskId(taskId));

    setTaskName(dataBase.getTaskByTaskId(taskId).task_name);
    setTaskCreated(dataBase.getTaskByTaskId(taskId).task_created);
    setDescription(dataBase.getTaskByTaskId(taskId).task_desc);
    setDropDownValue(dataBase.getTaskByTaskId(taskId).task_label);
    setCity(dataBase.getTaskByTaskId(taskId).task_city);
    setState(dataBase.getTaskByTaskId(taskId).task_state);
    setDOB(dataBase.getTaskByTaskId(taskId).task_date);
    setDateValue(dataBase.getTaskByTaskId(taskId).task_date);
  }, [taskId]);

  useEffect(() => {
    if (
      taskName.length > 2 &&
      description.length > 2 &&
      dropDownValue.length > 2 &&
      city.length > 2 &&
      state.length > 2 &&
      dateValue.length > 2
    ) {
      setBtnDisable(false);
      console.log();
    } else {
      setBtnDisable(true);
    }
  }, [taskName, description, dropDownValue, city, state, dateValue]);

  const renderItem = item => {
    return (
      <View style={styles.dropItem}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  };

  const onPressButton = () => {
    // dataBase.insertTaskItemsDb(
    //   taskName,
    //   description,
    //   dropDownValue,
    //   city,
    //   state,
    //   dateValue,
    // );
    console.log('---', dropDownValue, dateValue);
    dataBase.updateTaskItem(taskId, dropDownValue, dateValue);

    setTaskName('');
    setDescription('');
    setDropDownValue('');
    setCity('');
    setState('');
    setDOB(strings.createTask.datePlaceholder);
    setDateValue('');
  };

  const onDateTextPressed = () => {
    // if (Platform.OS === 'android') {
    setOpen(true);
    // }
  };

  return (
    <View testID="route" style={styles.container}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor={colors.white}
      />

      <ScrollView
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}
        ref={view => (this._scrollView = view)}
        scrollToOverflowEnabled={true}
        nestedScrollEnabled={true}
        contentContainerStyle={{paddingBottom: 100}}>
        <Text style={inputStyles.headerStyle}>
          {strings.editTaskScreen.title}
        </Text>

        <TextInput
          testID="create_task_name"
          style={styles.input}
          onChangeText={setTaskName}
          value={taskName}
          editable={false}
          placeholder={strings.createTask.taskName}
        />
        <TextInput
          testID="create_task_desc"
          style={styles.inputDesc}
          editable={false}
          multiline
          numberOfLines={4}
          onChangeText={setDescription}
          value={description}
          placeholder={strings.createTask.description}
        />
        <Text style={{marginTop: 20}}>
          {strings.editTaskScreen.taskCreated}
        </Text>
        <TextInput
          testID="create_task_desc"
          style={styles.taskCreatedInput}
          editable={false}
          onChangeText={setTaskCreated}
          value={taskCreated}
          placeholder={strings.createTask.description}
        />
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={strings.createTask.labelPlaceholder}
          searchPlaceholder="Search..."
          value={dropDownValue}
          onChange={item => {
            console.log('dropdown value==', item.value);
            setDropDownValue(item.value);
          }}
          renderItem={renderItem}
        />
        <TextInput
          testID="create_task_city"
          style={styles.input}
          editable={false}
          numberOfLines={4}
          onChangeText={setCity}
          value={city}
          placeholder={strings.createTask.city}
        />
        <TextInput
          testID="create_task_state"
          style={styles.input}
          editable={false}
          numberOfLines={4}
          onChangeText={setState}
          value={state}
          placeholder={strings.createTask.state}
        />

        <TouchableWithoutFeedback onPress={() => onDateTextPressed()}>
          <View style={styles.contentContainer} onPress={onDateTextPressed}>
            <View testID="dob-text" style={styles.inputContainer}>
              <Text
                style={{
                  color: {valueChanged}
                    ? colors.primaryFontColor
                    : colors.secondaryFontColor,
                  marginLeft: 10,
                  fontSize: 16,
                }}>
                {DOB}
              </Text>
            </View>
            {isShowIcon && (
              <View testID="cal-img" style={styles.calendarIconContainer}>
                <Image
                  style={styles.calendarIcn}
                  source={require('../../assets/images/icon/ic_calendar.png')}
                />
              </View>
            )}
          </View>
        </TouchableWithoutFeedback>

        <DatePicker
          modal
          open={open}
          date={date}
          mode={'date'}
          onConfirm={date => {
            setOpen(false);
            setDate(date);
            setDOB(convertToDDMMYYY('' + date));
            setDateValue(convertToDDMMYYY('' + date));
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />

        <View style={{marginTop: 30}}>
          <CustomButton
            e2eID="create_task_button"
            actionClicked={onPressButton}
            title={strings.editTaskScreen.btnTitle}
            disabled={btnDisable}
            indicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inviteBgColor,
    padding: 30,
  },
  subContainer: {
    flex: 1,
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
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    borderColor: colors.brandPoolGreenColor,
  },
  inputDesc: {
    height: 80,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 20,
    borderColor: colors.brandPoolGreenColor,
  },
  taskCreatedInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginTop: 5,
    borderColor: colors.brandPoolGreenColor,
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
  bottomView: {
    alignSelf: 'center',
    bottom: 30,
    position: 'absolute',

    left: 32,
    right: 32,
  },
  ///
  dropdown: {
    marginTop: 20,
    height: 50,
    backgroundColor: 'white',
    borderColor: colors.brandPoolGreenColor,
    borderWidth: 1,
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  dropItem: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  // Calendar
  inputContainer: {
    height: 50,
    borderRadius: 16,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  calendarIcn: {
    height: 30,
    width: 30,
  },
  calendarIconContainer: {
    height: 50,
    flex: 0.75,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-between',
    borderRadius: 16,
    borderWidth: 1,
    marginTop: 20,
    borderColor: colors.brandPoolGreenColor,
  },
});

export default EditTaskScreen;
