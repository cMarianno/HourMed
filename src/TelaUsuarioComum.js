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
            <Text style={styles.headerTextResp}>Crie sua Conta</Text>
      </View>
      <DropDownPicker
                items={[
                    {label: 'Usuário', value: 'usuario', icon: () => <Icon name="flag" size={18} color="#D5E8FE" />, hidden: true},
                    {label: 'Responsável', value: 'responsavel', icon: () => <Icon name="flag" size={18} color="#D5E8FE" />}
                ]}
                defaultValue={TelaUsuarioComum.state.who}
                containerStyle={{height: 40, marginTop: '5%', width: '80%'}}
                style={{ backgroundColor: '#D5E8FE'}}
                itemStyle={{
                    justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#D5E8FE'}}
                onChangeItem={item => TelaUsuarioComum.setState({
                    who: item.value
            })}>
        
        </DropDownPicker>
       <View style={styles.espacos2}></View>

       <Text style={styles.txtSubtitulo}>Nome:</Text>
       <TextInput style={styles.txtInput}/>
       <View style={styles.espacos2}></View>

       <Text style={styles.txtSubtitulo}>Email:</Text>
       <TextInput style={styles.txtInput}/>
       <View style={styles.espacos2}></View>
        
       <Text style={styles.txtSubtitulo}>Senha:</Text>
       <TextInput style={styles.txtInput}/>
       <View style={styles.espacos2}></View>

       <Text style={styles.TxtConfirmarSenha}>Confirmar Senha:</Text>
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
    paddingRight:260,  
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
