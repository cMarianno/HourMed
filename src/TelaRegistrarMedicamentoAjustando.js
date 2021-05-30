import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'
import DatePicker from 'react-native-datepicker';


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

    state = {
        data: ''
    }
    
    changeDate = (valor) => {
        this.setState({
            data: valor
        })
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
                type="date"
                placeholder = "Nome do medicamento"
            />

            <TextInput
                style={styles.input}
                placeholder = "Nome do dependente"
            />

            <DatePicker
                format="DD/MM/YYYY"
                style={styles.dateComponente}
                date={this.state.data}
                onDateChange={this.changeDate}
            />

            <TextInput
                style={styles.input}
                type="date"
                defaultValue="2021-05-24"
                placeholder = "Início do tratamento"
            />

             <TextInput
                style={styles.input}
                defaultValue="2021-07-24"
                placeholder = "Fim do tratamento"
             />

             <TextInput
                style={styles.input}
                defaultValue="11:00"
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
    dateComponente:{
        width: 300
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