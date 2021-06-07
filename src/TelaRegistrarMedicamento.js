import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';
import { StyleSheet, TouchableOpacity, Text, View, TextInput} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';


export default function TelaRegistrarMedicamento() {

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });

    const navigation = useNavigation();
    
    const [dateInit, setDateInit] = useState(null);
    const [dateEnd, setDateEnd] = useState(null); // necessário fazer validação para que a data não seja menor que hoje.
    const [breakMed, setBreakMed] = useState(null); // vai ser treta pra validar e guardar no banco <- 

    if (!loaded) {
        return null;
    }
    
    function handlePressConcluir(){
        navigation.navigate('TelaReceitas');
    }

    function handlePressVoltar(){
        navigation.navigate('TelaReceitas');
    }

     TelaRegistrarMedicamento.state = {
        who: 'usuario'
    }

    return (
        <View style={styles.container}>
        <View style={styles.espaco}></View>
        <TouchableOpacity activeOpacity={0.8} onPress={handlePressVoltar}>
          <Text style={styles.headerTxtVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Registrar Medicamento</Text>
           
           <Text style={styles.textTit}>Nome do medicamento</Text>
            <TextInput
                style={styles.input}
                type="text"
                placeholder = "Luana Ferreira"
            />

            <Text style={styles.textTit}>Nome do dependente</Text>
            <TextInput
                style={styles.input}
                placeholder = "Maria Luiza"
            />

            <Text style={styles.textTit}>Data inicio tratamento:</Text>
            <TextInputMask // campo mascarado (cobaia - com explicações) 
                placeholder="Ex: 01/01/2001" // exemplo de como preencher o campo. ;)
                style={styles.input}
                type={'datetime'} // tipo da máscara.
                options={{
                    format: 'DD/MM/YYYY' // formato em que as informações serão exibidas após o preenchimento do campo.
                }}
                value={dateInit} // valor do campo.
                onChangeText={value => {
                    setDateInit(value)
                }}
                keyboardType="numeric" // tipo do teclado que será exibido para o usuário.
                returnKeyType="done" // tipo de botão do teclado exibido para o usuário.
            />

            <Text style={styles.textTit}>Data fim tratamento</Text>
            <TextInputMask 
                placeholder="Ex: 31/12/2021"
                style={styles.input}
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY'
                }}
                value={dateEnd}
                onChangeText={value => {
                    setDateEnd(value)
                }}
                keyboardType="numeric"
                returnKeyType="done"
            />
            <Text style={styles.textTit}>Intervalo Medicamento:</Text>
             <TextInput 
                placeholder="Ex: 08:00"
                style={styles.input}
                type={'datetime'}
                options={{
                    format: 'HH:mm'
                }}
                value={breakMed}
                onChangeText={value => {
                    setBreakMed(value)
                }}
                keyboardType="numeric"
                returnKeyType="done"


            />

        <View style={styles.espaco2}></View>

            <TouchableOpacity activeOpacity={0.8} onPress={handlePressConcluir}>
              <Text style={styles.textEntrar}>Registrar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#EDFBFD',
    },
    espaco:{
      marginTop:80,
      backgroundColor: '#000000'
    },
    espaco2:{
      marginTop:20,
      backgroundColor: '#000000'
    },
    headerTxtVoltar:{
      fontWeight: "bold",
      fontSize: 20,
      paddingRight: 270,
      paddingBottom: 20
    },
    headerTxt:{
      fontWeight: "bold",
      fontSize: 20
    },
    textTit:{
        marginTop:15,
        width: 300,
        fontSize: 16,
        fontWeight: 'bold'
    },
    input:{
        marginTop:10,
        padding:10,
        width:300,
        backgroundColor: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3
    },
    buttons: {
        borderRadius: 8,
        marginTop: 30,
        backgroundColor: "#12003C",
    },
    text: {
        width: 350,
        height: 150,
        fontFamily: 'Roboto',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 17,
        color: '#00498c',
        marginTop: 250
    },
    textMarcado: {
        color: "#00ace7",
    },
    textEntrar: {
        paddingTop: 8,
        width:300,
        height:42,
        backgroundColor: "#12003C",
        color: '#fff',
        marginTop: 20,
        borderRadius: 3,
        fontSize: 16,
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center', 
    },
});
