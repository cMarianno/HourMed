import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Div, View, Image,ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'
import { color } from 'react-native-reanimated';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function TelaReceitas() {

  const navigation = useNavigation();

  function handleAdicionarTarefas(){
    navigation.navigate('TelaAdicionarTarefa');
  }

  function handlePressResponsavel(){
    navigation.navigate('TelaResponsavel');
  }

  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextAdd}>Adicionar</Text>
        <Text style={styles.headerTextResp}>RECEITAS</Text>
      </View>
      <View style={styles.espacos}></View>
      <Image style={styles.logo} source={ require('../assets/SintomasDiarios.png') }/>
      <Text style={styles.textPrincipal}>SINTOMAS DIÁRIOS</Text>
      <Text style={styles.textSecundario}>Identifique diariamente os sintomas{"\n"}e eles farão parte do seu relatório {"\n"}de saúde.</Text>
      <View style={styles.espacos}></View>
      <View style={styles.footer}>
      <Text style={styles.icon}></Text>
      
      <TouchableOpacity style={styles.icon1} activeOpacity={0.8} onPress={handleAdicionarTarefas}>
        <Image source={require('../assets/img1.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.icon2} activeOpacity={0.8} onPress={handlePressResponsavel}>
          <Image source={require('../assets/img2.png')}></Image>
      </TouchableOpacity>
      <Image style={styles.icon3} source={require('../assets/img3.png')}></Image>
      </View>
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
    flex: 0.25,
    alignItems: 'center',
    backgroundColor: '#47797C',
    paddingTop:50,
    width: "100%", 
  },
  headerTextAdd: {
    fontFamily: 'Roboto',
    fontSize: 18,
    paddingTop: 2,
    paddingLeft: 250,  
    color: '#ffffff',
    fontWeight: 'bold',
  },
  headerTextResp: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#ffffff',
    paddingTop:10,
    paddingRight:260,
    fontWeight: 'bold',
  },
  logo: {
    width: "90%",
    height: "15%",
    resizeMode: 'contain'
  },
  textPrincipal: {
    fontFamily: 'Roboto',
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5e6465',
    marginTop:10
  },
  textSecundario: {
    fontFamily: 'Roboto',
    fontSize: 14, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5e6465',
    marginTop:10
  },
  espacos:{
    flex:0.40,
    width: "100%"
  },
  footer: {
    width:"100%",
    flex:0.20,
    backgroundColor:"#b8d9dc",
    flexDirection: 'row'
  },
  icon: {
    width:"5%",
    resizeMode: 'contain'
  },
  icon1: {
    width:"28%",
    resizeMode: 'contain'
  },
  icon2: {
    width:"33%",
    resizeMode: 'contain'
  },
  icon3: {
    width:"33%",
    resizeMode: 'contain'
  },

});
