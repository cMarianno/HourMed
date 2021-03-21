import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {

  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Thin.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    
    <View style={styles.container}>
      <TouchableOpacity style={styles.icon} activeOpacity={0.8}>
        <Icon name="arrow-left" size={20} color="#00498c" />
      </TouchableOpacity>
      <View style={styles.viewButtons}>
        <Text style={styles.text1}>Para iniciar o cadastro selecione um perfil</Text>
        <TouchableOpacity
          style={styles.buttonResponsavel}
          activeOpacity={0.8}
        >
          <Text style={styles.textResponsavel}>RESPONSÁVEL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonUsuario}
          activeOpacity={0.8}
        >
          <Text style={styles.textUsuario}>USUÁRIO</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Criando a conta você concorda {"\n"} com os <Text style={styles.textMarcado}>Termos de Serviço</Text> e {"\n"} <Text style={styles.textMarcado}>Política de Privacidade.</Text></Text>
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
  icon:{
    marginLeft: -300,
    marginTop: 70,
    marginBottom: 120
  },
  text1: {
    color: '#00498c',
    paddingLeft: 110,
    paddingRight: 111,
    paddingBottom: 11,
    textAlign: 'center'
  },
  viewButtons:{
    justifyContent: 'space-between',
    marginTop: 80
  },
  buttonResponsavel: { 
    borderRadius: 8,
    marginTop: 10,
    marginLeft: 90,
    width: 190,
    textAlign: 'center',
    backgroundColor: "#12003C"
  },
  buttonUsuario: {
    borderRadius: 8,
    marginTop: 15,
    width: 190,
    marginLeft: 90,
    backgroundColor: "#12003C",
  },
  textUsuario: { 
    color: '#fff',
    paddingLeft: 62,
    paddingTop: 10,
    width:100,
    paddingRight: 111,
    paddingBottom: 11,
    textAlign: 'center'
  },
  textResponsavel: {
    color: "#fff",
    paddingLeft: 48,
    paddingTop: 10,
    width:100,
    paddingRight: 131,
    paddingBottom: 11,
    textAlign: 'center'
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
