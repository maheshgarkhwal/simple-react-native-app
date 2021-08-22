import React, {useState} from 'react';
import {View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from './register';
import CustomInput from '../component/customInput';
import CustomButton from '../component/customButton';
import OTPSend from './OTPSend';
import {useContext} from 'react';
import {MainContext} from '../../context';
import ForgotPassword from './forgotPassword';
import ChangePassword from './changePassword';

export function UserLogin(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setIsLogin} = useContext(MainContext);

  return (
    <View>
      <CustomInput
        onChange={value => setUsername(value)}
        value={username}
        placeholder="Username"
      />
      <CustomInput
        onChange={value => setPassword(value)}
        value={password}
        placeholder="Password"
      />
      <CustomButton title="Login" onPress={() => setIsLogin(true)} />
      <CustomButton
        title="Signup"
        onPress={() => props.navigation.navigate('OTPSend')}
      />

      <CustomButton
        title="Forgot Password"
        onPress={() => props.navigation.navigate('ForgotPassword')}
      />
    </View>
  );
}

const Stack = createStackNavigator();
function Login(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={UserLogin}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="OTPSend"
        component={OTPSend}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ForgotPassword"
        component={ForgotPassword}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ChangePassword"
        component={ChangePassword}
      />
    </Stack.Navigator>
  );
}

export default Login;
