import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import TelaAviso from '../src/TelaAviso';
import TelaLogin from '../src/TelaLogin';
import TelaMedicacao from '../src/TelaMedicacao';
import TelaUsuarioComum from '../src/TelaUsuarioComum';
import TelaEntrar from '../src/TelaEntrar';
import TelaRegistrarMedicamento from '../src/TelaRegistrarMedicamento';
import TelaConfirmado from '../src/TelaConfirmado';
import TelaAdicionarTarefa from '../src/TelaAdicionarTarefa';
import TelaReceitas from '../src/TelaReceitas';
import TelaResponsavel from '../src/TelaResponsavel';

export default function Routes(){
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen name="TelaAviso" component={TelaAviso}/>
                <Screen name="TelaLogin" component={TelaLogin}/>
                <Screen name="TelaMedicacao" component={TelaMedicacao}/>
                <Screen name="TelaUsuarioComum" component={TelaUsuarioComum}/>
                <Screen name="TelaEntrar" component={TelaEntrar}/>
                <Screen name="TelaRegistrarMedicamento" component={TelaRegistrarMedicamento}/>
                <Screen name="TelaConfirmado" component={TelaConfirmado}/>
                <Screen name="TelaAdicionarTarefa" component={TelaAdicionarTarefa}/>
                <Screen name="TelaReceitas" component={TelaReceitas}/>
                <Screen name="TelaResponsavel" component={TelaResponsavel}/>
            </Navigator>
        </NavigationContainer>
    );
}