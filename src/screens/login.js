import React from 'react';
import {Alert, Button, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './home';
import Register from './register';

export function OTPSend(props) {
  return (
    <View>
      <Text>Send OTP</Text>
      <Button
        title="register"
        onPress={() => props.navigation.navigate('Register')}
      />
    </View>
  );
}

const Stack = createStackNavigator();
function Login(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OTPSend" component={OTPSend} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default Login;
