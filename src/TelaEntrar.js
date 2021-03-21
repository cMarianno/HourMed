import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Image, TextInput } from 'react-native';
import { useFonts } from 'expo-font';

export default function TelaEntrar() {

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });
    
    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
        
            <TextInput
                style={styles.input}
                placeholder = "E-MAIL"
            />

            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder = "SENHA"
            />

            <TouchableOpacity
                style={styles.buttons}
            >
                <Text>ENTRAR</Text>
            </TouchableOpacity>

        
        <Text style={styles.text}>Não possui uma conta?<Text style={styles.textMarcado}>Crie uma {"\n"} nova conta</Text></Text>
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
    input:{
        marginTop:10,
        padding:10,
        width:300,
        backgroundColor: '#fff',
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
    }
});
