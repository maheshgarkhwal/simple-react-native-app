import React, {useState} from 'react';
import {Button, View} from 'react-native';
import CustomInput from '../component/customInput';
import CustomText from '../component/customText';

function PartnerSearch(props) {
  const [partner, setPartner] = useState();
  const [data, setData] = useState([]);

  const showData = () => {
    setData([
      'Mahesh garkhwal',
      'mukesh singh',
      'piyush dubey',
      'amit chauhan',
    ]);
  };

  return (
    <View>
      <CustomInput
        onChange={value => setPartner(value)}
        value={partner}
        placeholder="Search Partner"
      />

      <Button
        title="Search"
        onPress={() => {
          showData();
        }}
      />
      {data.map(val => (
        <CustomText
          onPress={() => {
            props.navigation.navigate('PartnerProfile');
          }}
          value={val}
        />
      ))}
    </View>
  );
}

export default PartnerSearch;
