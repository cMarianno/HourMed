import React, { useState, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Div, View, Image,ImageBackground, TouchableOpacity, SafeAreaView, FlatList, Alert} from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native'
import { color } from 'react-native-reanimated';
import { Header } from 'react-native/Libraries/NewAppScreen';
import api from "./services/api";
import AwesomeAlert from 'react-native-awesome-alerts';

export default function TelaReceitas() {
  const [selectedId, setSelectedId] = useState('');

  async function showAlert1() {  
    Alert.alert(  
        'Atenção',  
        'Deseja Exluir Este Medicamento?',  
        [  
            {  
                text: 'Fechar',  
                onPress: () => console.log('Cancel Pressed'),  
                style: 'cancel',  
            },  
            {
              text: 'Excluir',
              onPress: () => Alert.alert("Medicamento Excluido"),
            },  
        ]  
    );  


  }  

  const route = useRoute();
  const params = route.params;
  const navigation = useNavigation();

  function handleAdicionar(){
    navigation.navigate('TelaRegistrarMedicamento', params);
  }

  function handleAdicionarTarefas(){
    navigation.navigate('TelaAdicionarTarefa', params);
  }

  function handlePressResponsavel(){
    navigation.navigate('TelaResponsavel', params);
  }

  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  const DATA = [];

  params.myloop.map((userData) => {
      DATA.push(
        {
            id: userData.id+userData.title,
            title: userData.title,
            qtde: userData.qtde
        }
      );
  });

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
      <Text style={[styles.subtitleBox, textColor]}>{item.qtde}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = "#b8d9dc";
    const color = 'black';

    return (
      <Item
        item={item}
        onPress={() => {setSelectedId(item.id); showAlert1()}}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleAdicionar}>
          <Text style={styles.headerTextAdd}>Adicionar</Text>
      </TouchableOpacity>
        <Text style={styles.headerTextResp}>RECEITAS</Text>
      </View>
      <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              extraData={selectedId}
            />
          </SafeAreaView>
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
    backgroundColor: '#EDFBFD',
    marginTop: StatusBar.currentHeight || 0,
  },
  header: {
    flex: 0.15,
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
    flex:0.14,
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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  subtitleBox: {
    fontSize: 32,
    textAlign: 'right',
    marginTop: -48
  },
  scroll:{
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  centerImage: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    resizeMode: 'contain'
  }
});
