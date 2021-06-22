import React, { useState, useEffect } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'
import api from "./services/api";

export default function TelaUsuarioComum() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPass, setConfirmPass] = useState("");
    let [username, setUsername] = useState("");
    let [dropdown, setDropdown] = useState("");
    let errors = "";
    
    const makeSign = async () => {
        if (email.length === 0 || password.length === 0 || confirmPass.length === 0 || username.length === 0)
            errors = "Preencha os campos para fazer a criação da sua senha!";
        
        if (password != confirmPass)
            errors = "Campo Senha e Confirmar Senha devem conter a mesma informação!"

        if(errors == ""){
            try {
                const response = await api.post("/user/signup", {
                    email: email,
                    password: password,
                    type: dropdown.value,
                    name: username,
                    lowID: "0"
                });
    
                navigation.navigate('TelaMedicacao', {email, type: dropdown.value, id: response.data.body._id, low_id: "0"});
            } catch (_err) {
                console.log(_err);
                Alert.alert(
                    "Houve um problema com a criação da sua senha, verifique suas credenciais!"
                );
            }
        }else  
            Alert.alert(errors);
    };

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });

    const navigation = useNavigation();
    
    if (!loaded) {
        return null;
    }

    function handlePressVoltar(){
        navigation.navigate('TelaLogin');
    }

    return (
        <View style={styles.container}>
        <View style={styles.espaco}></View>
        <TouchableOpacity style={styles.button2} activeOpacity={0.8} onPress={handlePressVoltar}>
          <Text style={styles.headerTxtVoltar}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTxt}>Crie sua conta</Text>

            <DropDownPicker
                items={[
                    {label: 'Responsável', value: 'high'},
                    {label: 'Usuário', value: 'low', selected: true},
                    
                ]}
                defaultIndex={1}
                defaultValue="low"
                containerStyle={{height: 40, marginTop: '5%', width: '80%'}}
                value={dropdown}
                onChangeItem={setDropdown}

            />

            <TextInput
                style={styles.input}
                placeholder = "Nome"
                value={username}
                onChangeText={setUsername}
            />

            <TextInput
                style={styles.input}
                placeholder = "E-mail"
                value={email}
                autoCompleteType="email"
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={setEmail}
            />

            <TextInput
                style={styles.input}
                placeholder = "Senha"
                value={password}
                autoCompleteType="password"
                textContentType="password"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={setPassword}
            />

            <TextInput
                style={styles.input}
                placeholder = "Confirmar senha"
                value={confirmPass}
                autoCompleteType="password"
                textContentType="password"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={setConfirmPass}
            />

        <View style={styles.espaco2}></View>

            <TouchableOpacity style={styles.button2} activeOpacity={0.8} onPress={makeSign}>
              <Text style={styles.textEntrar}>Concluir</Text>
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
