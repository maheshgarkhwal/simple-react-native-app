import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

function CustomText(props) {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <Text>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default CustomText;
