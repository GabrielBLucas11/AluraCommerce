import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createNativeStackNavigator();

import Principal from './views/Principal';
import Login from './views/Login';
import Configuracao from './views/Configuracao';

export default function Rotas() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Tab.Screen name="Principal" component={Principal} options={{ headerShown: false }}/>
        <Tab.Screen name="Configurações" component={Configuracao} options={{ headerTitleAlign: 'center' }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}