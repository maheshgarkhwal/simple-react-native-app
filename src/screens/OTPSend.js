import React from 'react';
import {View, Text, Button} from 'react-native';

function OTPSend(props) {
  return (
    <View>
      <Text>Send OTP</Text>
      <Button
        title="verify OTP"
        onPress={() => props.navigation.navigate('Register')}
      />
    </View>
  );
}

export default OTPSend;
