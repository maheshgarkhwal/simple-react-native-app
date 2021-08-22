import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

function CustomButton(props) {
  return (
    <View>
      <Button
        onPress={props.onPress}
        title={props.title}
        style={{...styles.button, ...props.style}}
        accessibilityLabel={props.label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 35,
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 6,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default CustomButton;
