import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'

export default function TelaRegistrarMedicamento() {

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });

    const navigation = useNavigation();
    
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
        <TouchableOpacity style={styles.button2} activeOpacity={0.8} onPress={handlePressVoltar}>
          <Text style={styles.headerTxtVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Registrar Medicamento</Text>
           
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder = "Nome do medicamento"
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder = "Nome do dependente"
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder = "Início do tratamento"
            />

             <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder = "Fim do tratamento"
             />

             <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder = "Intervalo medicamento"
             />

        <View style={styles.espaco2}></View>

            <TouchableOpacity style={styles.button2} activeOpacity={0.8} onPress={handlePressConcluir}>
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
    input:{
        marginTop:30,
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
