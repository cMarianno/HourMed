import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'

export default function TelaUsuarioComum() {

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });

    const navigation = useNavigation();

    if (!loaded) {
        return null;
    }

    function handlePressConcluir(){
        navigation.navigate('TelaRegistrarMedicamento');
    }

    TelaUsuarioComum.state = {
        who: 'usuario'
    }

  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerTextAdd}>Voltar</Text>
            <Text style={styles.headerTextResp}>Registrar Medicamento</Text>
      </View>

       <View style={styles.espacos2}></View>

       <Text style={styles.txtNomeMed}>Nome do medicamento</Text>
       <TextInput style={styles.txtInput}/>
       <View style={styles.espacos2}></View>

       <Text style={styles.txtNomeDep}>Nome do dependente</Text>
       <TextInput style={styles.txtInput}/>
       <View style={styles.espacos2}></View>
        
       <Text style={styles.txtSubtitulo}>Data início do tratamento</Text>
       <TextInput style={styles.txtInput}/>
       <View style={styles.espacos2}></View>

       <Text style={styles.txtSubtitulo}>Data final do tratamento</Text>
       <TextInput style={styles.txtInput}/>
       <View style={styles.espacos2}></View>

      <Text style={styles.txtSubtitulo}>Intervalo do medicamento</Text>
       <TextInput style={styles.txtInput}/>
       <View style={styles.espacos2}></View>

       <TouchableOpacity style={styles.BtnConcluir} activeOpacity={0.8} onPress={handlePressConcluir}>
           <Text style={styles.BtnTxt}>Concluir</Text>
       </TouchableOpacity>
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
  header: {
    flex: 0.15,
    alignItems: 'center',
    backgroundColor: '#EDFBFD',
    paddingTop:50,
    width: "100%", 
  },
  headerTextAdd: {
    fontFamily: 'Roboto',
    fontSize: 18,
    paddingTop: 2,
    paddingRight:300,  
    color: '#00498c',
    fontWeight: 'bold',
  },
  txtSubtitulo:{
    fontFamily: 'Roboto',
    fontSize: 17,
    paddingTop: 2,
    paddingRight:70,  
    color: '#00498c',
    fontWeight: 'bold',
    flex: 0.06
  },
  txtNomeMed:{
    fontFamily: 'Roboto',
    fontSize: 17,
    paddingTop: 2,
    paddingRight:80,  
    color: '#00498c',
    fontWeight: 'bold',
    flex: 0.06
  },
  txtNomeDep:{
    fontFamily: 'Roboto',
    fontSize: 17,
    paddingTop: 2,
    paddingRight:100,  
    color: '#00498c',
    fontWeight: 'bold',
    flex: 0.06
  },
  txtInput:{
    fontFamily: 'Roboto',
    fontSize: 1,
    paddingRight:310,  
    color: '#00498c',
    fontWeight: 'bold',
    flex: 0.05,
    backgroundColor: "#055468",
    borderRadius: 20,
    backgroundColor: '#D5E8FE'
  },
  TxtConfirmarSenha:{
    fontFamily: 'Roboto',
    fontSize: 17,
    paddingTop: 2,
    paddingRight:160,  
    color: '#00498c',
    fontWeight: 'bold',
    flex: 0.06
  },
  BtnConcluir:{
    backgroundColor: "#000000",
    paddingRight:150,  
    color: '#ffffff',
    fontWeight: 'bold',
    flex: 0.05,
    borderRadius: 20,
    textAlign: 'center',
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: 'Roboto'
  },
  BtnTxt: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
    fontFamily: 'Roboto'
  },
  headerTextResp: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#00498c',
    paddingTop:10,
    fontWeight: 'bold',
  },
  espacos2:{
    flex:0.03,
    width: "100%"
  }

});
