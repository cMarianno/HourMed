import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'


export default function TelaLogin() {

    const navigation = useNavigation();

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });

    function handlePressEntrar(){
        navigation.navigate('TelaMedicacao');
    }
    
    function handlePressCriarConta(){
        navigation.navigate('TelaUsuarioComum');
    }

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
        <View style={styles.espaco}></View>
            <Image
                style={styles.logo}
                source={ require('../assets/logo.png') }
            />
           
            <TextInput
                style={styles.input}
                placeholder = "E-mail"
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder = "Senha"
            />

        <View style={styles.espaco2}></View>

            <TouchableOpacity onPress={handlePressEntrar}>
              <Text style={styles.textEntrar}>Entrar</Text>
            </TouchableOpacity>

            <Text style={styles.text}>Não possui uma conta? 
            <Text style={styles.textMarcado} onPress={handlePressCriarConta}> Crie uma</Text>{"\n"} nova conta</Text>
               <StatusBar style="auto" />
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
    logo:{
        resizeMode: 'contain'
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
    text: {
        width: 350,
        height: 150,
        fontFamily: 'Roboto',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: 17,
        color: '#00498c',
        marginTop: 40
    },
    textMarcado: {
        color: "#00ace7",
    },
    textEntrar: {
        paddingTop: 6,
        width:300,
        height:42,
        backgroundColor: "#12003C",
        color: '#ffffff',
        borderRadius: 3,
        fontSize: 16,
        alignItems: 'center',
        justifyContent:'center',
        textAlign: 'center',
        marginTop: 5
    },
});
