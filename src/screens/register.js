import React from 'react';
import {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {MainContext} from '../../context';

function Register(props) {
  const {setIsLogin} = useContext(MainContext);
  return (
    <View>
      <Text>Register page</Text>
      <Button title="REGISTER" onPress={() => setIsLogin(true)} />
    </View>
  );
}

export default Register;
