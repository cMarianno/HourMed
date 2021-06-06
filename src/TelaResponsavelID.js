import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from "./services/api";


export default function TelaRegistrarMedicamento() {
    const route = useRoute();
    let [userID, setUserID] = useState("");
    const params = route.params;

    const saveLowId = async () => {
        if (userID.length === 0) {
            Alert.alert("Preencha os campos para fazer o registro!");
        } else {
            try {
                await api.post("/user/putLowId", {
                    email: params.email,
                    lowID: userID,
                });

                navigation.navigate('TelaConfirmado', params);
            } catch (_err) {
                console.log(_err);
                Alert.alert(
                    "Houve um problema com a linkagem com o(a) idoso(a), verifique suas credenciais!"
                );
            }
        }
    };

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });

    const navigation = useNavigation();
    
    if (!loaded) {
        return null;
    }
    

    function handlePressVoltar(){
        navigation.navigate('TelaResponsavel');
    }

    return (
        <View style={styles.container}>
        <View style={styles.espaco}></View>
        <TouchableOpacity style={styles.button2} activeOpacity={0.8} onPress={handlePressVoltar}>
          <Text style={styles.headerTxtVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Registrar Idoso</Text>
           
            <TextInput
                style={styles.input}
                placeholder = "ID"
                value={userID}
                onChangeText={setUserID}
            />
            
        <View style={styles.espaco2}></View>

            <TouchableOpacity style={styles.button2} activeOpacity={0.8} onPress={saveLowId}>
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
