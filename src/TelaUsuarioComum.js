import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, TouchableOpacity, StatusBar, Text, View} from 'react-native';
import { useFonts } from 'expo-font';

export default function TelaUsuarioComum() {

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
                <Icon name="arrow-left" size={20} color="#12003C" />
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.iconRight}
                activeOpacity={0.8}
            >
                <Icon name="close" size={20} color="red" />
            </TouchableOpacity>

            <Text style={styles.title}>Qual o seu nome completo?</Text>
            <View style={styles.name}>
            <Text style={styles.txtname}>Nome do Dependente</Text>
                {/* <TextInput
                    style={styles.input}
                    placeholder = "E-MAIL"
                /> */}
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#EDFBFD',
    },
    icon:{
        marginTop: 40,
        marginRight: 300,
        alignItems: 'center',
    },
    iconRight: {
        marginTop: -18,
        position: 'relative',
        marginLeft: 280,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Roboto',
        marginTop: 20,
        fontWeight: '400',
        fontSize: 20,
        textAlign: 'center',
    },
    txtname:{
        fontSize: 15,
        marginTop: 15,
    }
});
