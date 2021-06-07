import React, { useState, Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Div, View, Image,ImageBackground, TouchableOpacity, FlatList, SafeAreaView, SectionList, Alert } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native'
import { color } from 'react-native-reanimated';
import { Header } from 'react-native/Libraries/NewAppScreen';
import api from "./services/api";

export default function TelaAdicionarTarefa() {
  const [selectedId, setSelectedId] = useState('');

  const route = useRoute();
  const params = route.params;
  const navigation = useNavigation();

  function handlePressResponsavel(){
    if(params.type == 'high')
      navigation.navigate('TelaResponsavel', params);
  }

  function handlePressReceitas(){
    if(params.type == 'high')
      navigation.navigate('TelaReceitas', params);
  }

  function handlePressAdd(){
    navigation.navigate('TelaRegistrarMedicamento');
  }

  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  

  const DATA = [
    {
      id: params.myloop.id,
      title: params.myloop.title,
    },
    // {
    //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f632',
    //   title: 'Segundo Remédio',
    // },
    // {
    //   id: '58694a0f-3da1-471f-bd96-145571e29d723',
    //   title: 'Terceiro Remédio',
    // },
    // {
    //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f634',
    //   title: 'Quarto Remédio',
    // },
    // {
    //   id: '58694a0f-3da1-471f-bd96-145571e29d725',
    //   title: 'Quinto Remédio',
    // },
    // {
    //   id: '58694a0f-3da1-471f-bd96-145571e29d726',
    //   title: 'Sexto Remédio',
    // },
    // {
    //   id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f637',
    //   title: 'Sétimo Remédio',
    // },
    // {
    //   id: '58694a0f-3da1-471f-bd96-145571e29d728',
    //   title: 'Oitavo Remédio',
    // },
    
  ];

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#47797C" : "#b8d9dc";
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextHj}>HOJE</Text>
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
        {params.type == 'high'? <Image style={styles.icon1} source={require('../assets/img1.png')}></Image> : <Text>{params.id}</Text> }
        <TouchableOpacity style={styles.icon2} activeOpacity={0.8} onPress={handlePressResponsavel}>
          {params.type == 'high'? <Image  source={require('../assets/img2.png')}></Image> : null }
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon3} activeOpacity={0.8} onPress={handlePressReceitas}>
          {params.type == 'high'? <Image  source={require('../assets/img3.png')}></Image> : null }
        </TouchableOpacity>
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
  headerTextHj: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: '#ffffff',
    paddingTop:30,
    paddingRight:260,
    fontWeight: 'bold',
  },
  textPrincipal: {
    fontFamily: 'Roboto',
    fontSize: 18, 
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#5e6465',
    marginTop:30
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
  icon1: {
    width:"33%",
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
