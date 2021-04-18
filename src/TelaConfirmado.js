import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, Text, View, Image } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native'

export default function TelaAviso() {

    const navigation = useNavigation();

    // setTimeout(() => {navigation.navigate('TelaLogin');}, 5000)

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });
    
    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.icon}
                activeOpacity={0.8}
            >
                <Icon name="arrow-left" size={20} color="#FFFFFF" />
            </TouchableOpacity>
            <Image
                style={styles.logo}
                source={ require('../assets/ImagemOk.png') }
            />
            <Text style={styles.text}>CONFIRMADO</Text>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#00c34c',
    },
    icon:{
        marginTop: 40,
        marginRight: 300,
    },
    logo: {
        width: "140%",
        height: "14%",
        resizeMode: 'contain',
        marginTop: 190,
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 30,
        textAlign: 'center',
        color: '#000000',
        paddingTop: 10,
        fontWeight: '400',
        marginBottom: 50,
    }
});
