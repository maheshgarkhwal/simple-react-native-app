import React from 'react';
import {StyleSheet, SafeAreaView, View, TextInput} from 'react-native';

function CustomInput(props) {
  return (
    <SafeAreaView>
      <TextInput
        style={{...styles.input, ...props.style}}
        onChangeText={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 10,
    borderColor: 'gray',
    borderRadius: 50,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
});

export default CustomInput;
