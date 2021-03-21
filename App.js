import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    Roboto: require('./assets/fonts/Roboto-Thin.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={ require('./assets/logo.png') }
      />

      <TouchableOpacity
        style={styles.buttons}
        activeOpacity={0.8}
      >
        <Text style={styles.textConta}>CRIAR CONTA</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttons}
        activeOpacity={0.8}
      >
        <Text style={styles.textEntrar}>ENTRAR</Text>
      </TouchableOpacity>

      <Text style={styles.text}>Criando a conta você concorda {"\n"} com os <Text style={styles.textMarcado}>Termos de Serviço</Text> e {"\n"} <Text style={styles.textMarcado}>Política de Privacidade.</Text></Text>
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
  logo: {
    width: 246,
    height: 262,
    resizeMode: 'contain',
    marginTop: 49,
  },
  buttons: {
    borderRadius: 8,
    marginTop: 30,
    backgroundColor: "#12003C",
  },
  textConta: {
    color: "#fff",
    paddingLeft: 110,
    paddingTop: 10,
    paddingRight: 111,
    paddingBottom: 11,
  },
  textEntrar: {
    color: "#fff",
    paddingLeft: 130,
    paddingTop: 10,
    paddingRight: 131,
    paddingBottom: 11,
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
