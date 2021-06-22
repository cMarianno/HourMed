import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Alert} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native'
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import api from "./services/api";

export default function TelaRegistrarMedicamento() {
    const route = useRoute();
    const params = route.params;
    const navigation = useNavigation();
    
    const [name, setName] = useState(null);
    const [dateInit, setDateInit] = useState(null);
    const [dateEnd, setDateEnd] = useState(null); // necessário fazer validação para que a data não seja menor que hoje.
    const [breakMed, setBreakMed] = useState(null); // vai ser treta pra validar e guardar no banco <- 

    const makeAddMedicine = async () => {
        const lowIDByEmail = await api.post("/user/getUsersByEmail", {
            email: params.email
        });

        if (name.length === 0 || dateInit.length === 0 || dateEnd.length === 0 || breakMed.length === 0) {
            Alert.alert("Preencha os campos para fazer o cadastro do medicamento!");
        } else {
            try {
                const response = await api.post("/medicine/addMedicine", {
                    name,
                    date_to: dateInit,
                    date_from: dateEnd,
                    interval: "08:00",//breakMed,
                    low_id: lowIDByEmail.data.body.lowID,
                    qtde: 0
                });

                navigation.navigate('TelaConfirmado', params);
            } catch (_err) {
                console.log(_err);
                Alert.alert(
                    "Houve um problema com o cadastro!"
                );
            }
        }
    };

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });

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
                placeholder = "Ex: Dorflex"
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.textTit}>Data inicio tratamento:</Text>
            <TextInputMask
                placeholder="Ex: 01/01/2001"
                style={styles.input}
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY' // formato em que as informações serão exibidas após o preenchimento do campo.
                }}
                value={dateInit}
                onChangeText={value => {
                    setDateInit(value)
                }}
                keyboardType="numeric" // tipo do teclado que será exibido para o usuário.
                returnKeyType="done"
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

            <TouchableOpacity activeOpacity={0.8} onPress={makeAddMedicine}>
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
