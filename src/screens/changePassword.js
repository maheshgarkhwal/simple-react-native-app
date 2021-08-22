import React from 'react';
import {useState} from 'react';
import {Button, View} from 'react-native';
import CustomInput from '../component/customInput';

function ChangePassword(props) {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <View>
      <CustomInput
        onChange={value => setPassword(value)}
        value={password}
        placeholder="New Password"
      />
      <CustomInput
        onChange={value => setConfirmPassword(value)}
        value={confirmPassword}
        placeholder="Confirm Password"
      />
      <Button
        title="update"
        onPress={() => props.navigation.navigate('Login')}
      />
    </View>
  );
}

export default ChangePassword;
