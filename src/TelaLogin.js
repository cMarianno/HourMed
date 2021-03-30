import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'

export default function TelaLogin() {

    const navigation = useNavigation();

    function handlePressCriarConta(){
        navigation.navigate('TelaUsuarioComum');
    }

    function handlePressEntrar(){
        navigation.navigate('TelaMedicacao');
    }

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            
            <Image
                style={styles.logo}
                source={ require('../assets/logo.png') }
            />
        
            <View style={styles.viewInput}>  
                
                <TextInput style={styles.input1}  
                placeholder = "E-MAIL"
                />
                
                <TextInput style={styles.input2}   
                secureTextEntry={true}
                placeholder = "SENHA"
                />
        
                <TouchableOpacity
                style={styles.button2}
                activeOpacity={0.8}
                >
                <Text style={styles.textEntrar}>ENTRAR</Text>
                </TouchableOpacity>
        
            </View>
            <Text style={styles.text}>Não possui uma conta? <Text style={styles.textMarcado}>Crie uma</Text>{"\n"} nova conta</Text>
            <StatusBar style="auto" />
            </View>
        );
    }
    
    const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'space-around',
        backgroundColor: '#EDFBFD',
    },
    logo: {
        width: 246,
        height: 262,
        resizeMode: 'contain',
        marginTop: 49,
    },
    viewInput:{
        justifyContent: 'space-between',
        marginTop: 80
    },
    input1: { 
        marginTop: 10,
        width:300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
    },
    input2: {
        marginTop: 15,
        width:300,
        backgroundColor: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
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
    button2: {
        borderRadius: 8,
        marginTop: 20,
        backgroundColor: "#12003C",
    },
});
