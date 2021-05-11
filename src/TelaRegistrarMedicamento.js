import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextInputMask } from 'react-native-masked-text';
import { StyleSheet, TouchableOpacity, StatusBar, Text, View, TextInput} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react';

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

    function handlePressRegistrar(){
        navigation.navigate('TelaLogin');
    }

    return (
        <View style={styles.container}>

            <Text style={styles.fundoAzul}>
            </Text>
            <TouchableOpacity
                style={styles.icon}
                activeOpacity={0.8}
            >
                <Icon name="arrow-left" size={20} color="#fff" />
            </TouchableOpacity>

            <Text style={styles.title}>Registrar medicamento</Text>

            <Text style={styles.txtNameMed}>Nome do medicamento:</Text>
            <TextInput style={styles.inputNameMed} />

            <Text style={styles.txtDateInit}>Data inicio tratamento:</Text> 
            <TextInputMask // campo mascarado (cobaia - com explicações) 
                placeholder="Ex:. 01/01/2001" // exemplo de como preencher o campo. ;)
                style={styles.inputDateInit}
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


            <Text style={styles.txtDateEnd}>Data fim tratamento:</Text>
            <TextInputMask 
                placeholder="Ex:. 31/12/2021"
                style={styles.inputDateEnd}
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

            <Text style={styles.txtBreakMed}>Intervalo Medicamento:</Text>
            <TextInput 
                placeholder="Ex:. 08:00"
                style={styles.inputBreakMed}
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

            <TouchableOpacity
                style={styles.button}
                activeOpacity={0.8}
                onPress={handlePressRegistrar}
            >
                <Text style={styles.textRegistrar}>REGISTRAR</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#EDFBFD',
    },
    icon:{
        marginTop: '10%',
        marginRight: '85%',
        alignItems: 'center',
    },
    iconRight: {
        marginTop: '-18%',
        position: 'relative',
        marginLeft: '280%',
        alignItems: 'center',
    },
    fundoAzul: {
        position: 'absolute',
        width: '100%',
        height: 80,
        left: 0,
        top: 0,
        backgroundColor: "#1613A4"
    },
    title: {
        marginTop: '-6%',
        fontWeight: 'bold',
        fontSize: 22,
        height: 25,
        textAlign: 'center',
        color: '#fff'
    },
    txtNameMed:{
        marginTop: '10%',
        width: 350,
        height: 30,
        marginLeft: '10%',
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 17,
        color: '#00498c'
    },
    inputNameMed:{
        height: 40,
        borderWidth: 1,
        borderColor: '#00498c',
        width: 280,
        marginLeft: '7%',
        borderRadius: 20,
        backgroundColor: '#D5E8FE',
        padding: 10
    },
    txtDateInit:{
        marginTop: '5%',
        width: 350,
        height: 30,
        marginLeft: '10%',
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 17,
        color: '#00498c'
    },
    inputDateInit:{
        height: 40,
        borderWidth: 1,
        borderColor: '#00498c',
        width: 280,
        marginLeft: '7%',
        borderRadius: 20,
        backgroundColor: '#D5E8FE',
        padding: 10
    },
    txtDateEnd:{
        marginTop: '5%',
        width: 350,
        height: 30,
        marginLeft: '10%',
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 17,
        color: '#00498c'
    },
    inputDateEnd:{
        height: 40,
        borderWidth: 1,
        borderColor: '#00498c',
        width: 280,
        marginLeft: '7%',
        borderRadius: 20,
        backgroundColor: '#D5E8FE',
        padding: 10
    },
    txtBreakMed:{
        marginTop: '5%',
        width: 350,
        height: 30,
        marginLeft: '10%',
        fontFamily: 'Roboto',
        fontSize: 14,
        lineHeight: 17,
        color: '#00498c'
    },
    inputBreakMed:{
        height: 40,
        borderWidth: 1,
        borderColor: '#00498c',
        width: 280,
        marginLeft: '7%',
        borderRadius: 20,
        backgroundColor: '#D5E8FE',
        padding: 10
    },
    button: {
        borderRadius: 20,
        marginTop: '12%',
        backgroundColor: "#12003C",
        width: '50%',
        marginLeft: '25%'
    },
    textRegistrar: {
        color: "#fff",
        fontSize: 18,
        fontWeight: 'bold',
        width: '30%',
        paddingLeft: 44,
        paddingTop: 10,
        paddingRight: 100,
        paddingBottom: 10,
        textAlign: 'center'
    }
});


