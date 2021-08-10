import React from 'react';
import {Button, Text, View} from 'react-native';

function Register(props) {
  return (
    <View>
      <Text>Register page</Text>
      <Button
        title="send OTP"
        onPress={() => props.navigation.navigate('OTPSend')}
      />
    </View>
  );
}

export default Register;
