import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import TelaAviso from '../src/TelaAviso';
import TelaMedicacao from '../src/TelaMedicacao';
import TelaLogin from '../src/TelaLogin';
import TelaUsuarioComum from '../src/TelaUsuarioComum';
import TelaEntrar from '../src/TelaEntrar';
import TelaConfirmado from '../src/TelaConfirmado';

export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen name="TelaAviso" component={TelaAviso}/>
                <Screen name="TelaMedicacao" component={TelaMedicacao}/>
                <Screen name="TelaLogin" component={TelaLogin}/>
                <Screen name="TelaUsuarioComum" component={TelaUsuarioComum}/>
                <Screen name="TelaEntrar" component={TelaEntrar}/>
                <Screen name="TelaConfirmado" component={TelaConfirmado}/>
            </Navigator>
        </NavigationContainer>
    );
}