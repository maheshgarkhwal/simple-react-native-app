import {NavigationContainer} from '@react-navigation/native';
import React, {useState} from 'react';
import {MainContext} from './context';
import Dashboard from './src/screens/dashboard';
import Login from './src/screens/login';

export default function App() {
  const [isLogin, setIslogin] = useState(false);
  return (
    <MainContext.Provider value={{isLogin}}>
      <NavigationContainer>
        {false ? <Dashboard /> : <Login />}
      </NavigationContainer>
    </MainContext.Provider>
  );
}
