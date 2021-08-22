import React from 'react';
import Profile from './profile';
import Home from './home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import PartnerProfile from './partnerProfile';
import PartnerSearch from './partnerSearch';
import {StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Tab = createBottomTabNavigator();

function Main() {
  return (
    <Tab.Navigator>
      <Tab.Screen options={{headerShown: false}} name="Home" component={Home} />
      <Tab.Screen
        options={{headerShown: false}}
        name="Partner Search"
        component={PartnerSearch}
      />
      <Tab.Screen
        options={{headerShown: false}}
        name="Profile"
        component={Profile}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function Dashboard() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Dashboard"
        component={Main}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="PartnerProfile"
        component={PartnerProfile}
      />
    </Stack.Navigator>
  );
}

export default Dashboard;
