import React from 'react';
import {View} from 'react-native';
import colors from '../styles/colors';

const HorizontalLine = ({
  margin,
  color = colors.lineColor,
  width = 1,
  marginTop = 0,
}) => {
  return (
    <View
      testID="line"
      style={[
        {
          borderBottomColor: color,
          borderBottomWidth: width,
          marginTop: marginTop,
        },
        margin,
      ]}
    />
  );
};

export default HorizontalLine;
