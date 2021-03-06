import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Div, View, Image,ImageBackground, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native'
import { color } from 'react-native-reanimated';
import { Header } from 'react-native/Libraries/NewAppScreen';

export default function TelaResponsavel() {

  const route = useRoute();
  const params = route.params;
  const navigation = useNavigation();

  function handleAdicionarTarefas(){
    navigation.navigate('TelaAdicionarTarefa', params);
  }

  function handlePressReceitas(){
    navigation.navigate('TelaReceitas', params);
  }

  function handleReceitasID(){
    navigation.navigate('TelaResponsavelID', params);
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
        <TouchableOpacity activeOpacity={0.8} onPress={handleReceitasID}>
          <Text style={styles.headerTextAdd}>Adicionar</Text>
        </TouchableOpacity>
        <Text style={styles.headerTextResp}>RESPONSÁVEL</Text>
      </View>
      <View style={styles.espacos}></View>
      <Image style={styles.logo} source={require('../assets/Responsavel.png') }/>
      <Text style={styles.textPrincipal}>RESPONSÁVEL PELO PROGRESSO</Text>
      <Text style={styles.textSecundario}>Acompanhe em tempo real o progresso{"\n"}diário do dependente.</Text>
      <View style={styles.espacos}></View>
      <View style={styles.footer}>

      <Text style={styles.icon}></Text>
      <TouchableOpacity style={styles.icon1} activeOpacity={0.8} onPress={handleAdicionarTarefas}>
        <Image source={require('../assets/img1.png')}></Image>
      </TouchableOpacity>
      
        <Image style={styles.icon2} source={require('../assets/img2.png')}></Image>

        <TouchableOpacity style={styles.icon3} activeOpacity={0.8} onPress={handlePressReceitas}>
          <Image  source={require('../assets/img3.png')}></Image>
        </TouchableOpacity>
        
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
    paddingRight:190,
    fontWeight: 'bold',
  },
  logo: {
    width: "70%",
    height: "25%",
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
