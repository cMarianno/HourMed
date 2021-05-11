import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'

export default function TelaAviso() {

  const navigation = useNavigation();

  setTimeout(() => {navigation.navigate('TelaLogin');}, 5000)

  const [loaded] = useFonts({
    Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={ require('../assets/logo.png') }
      />
      <Text style={styles.text}>Obtenha seu alarme diário de {"\n"} medicamentos, com {"\n"} acompanhamento e lembretes {"\n"} de compras.</Text>
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
    width: "246%",
    height: "26%",
    resizeMode: 'contain',
    marginTop: 49,
  },
  text: {
    width: "350%",
    height: "15%",
    fontFamily: 'Roboto',
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 23,
    color: '#00498c',
    marginTop: 80,
  }
});
