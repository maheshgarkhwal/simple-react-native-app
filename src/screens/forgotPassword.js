import React from 'react';
import {useState} from 'react';
import {Button, View} from 'react-native';
import CustomInput from '../component/customInput';

function ForgotPassword(props) {
  const [mobileNo, setMobielNo] = useState();
  return (
    <View>
      <CustomInput
        onChange={value => setMobielNo(value)}
        value={mobileNo}
        placeholder="Mobile Number"
      />
      <Button
        title="submit"
        onPress={() => props.navigation.navigate('ChangePassword')}
      />
    </View>
  );
}

export default ForgotPassword;
