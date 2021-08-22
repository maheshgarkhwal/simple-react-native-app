import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import CustomButton from '../component/customButton';

function PartnerProfile(props) {
  return (
    <View>
      <CustomButton title="Update" />
      <Text>this is partner profile</Text>
    </View>
  );
}

export default PartnerProfile;
