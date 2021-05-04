import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, ImageBackground, Text, View} from 'react-native';
import { useFonts } from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native'

export default function TelaMedicacao() {

    const navigation = useNavigation();

    function handlePress(){
        navigation.navigate('TelaAdicionarTarefa');
    }

    const [loaded] = useFonts({
        Roboto: require('../assets/fonts/Roboto-Thin.ttf'),
    });
    
    if (!loaded) {
        return null;
    }

    return (
        <View style={styles.container}>
            <ImageBackground
                source={ require('../assets/ImageMedicacao.png') }
                style={styles.backgroundImage}
            >
                <TouchableOpacity
                    style={styles.icon}
                    activeOpacity={0.8}
                >
                    <Icon name="close" size={25} color="red" />
                </TouchableOpacity>

                <Text style={styles.text}> SUA {"\n"} MEDICAÇÃO {"\n"} SEM {"\n"} ATRASO!</Text>

                <TouchableOpacity
                    style={styles.buttons}
                    activeOpacity={0.8}
                    onPress={handlePress}
                >
                    <Text style={styles.textConta}>COMEÇAR</Text>
                </TouchableOpacity>
            </ImageBackground>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    },
    backgroundImage:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: "center"
    },
    text: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 45,
        textAlign: 'center',
        marginBottom: 50,
        lineHeight: 59,
    },
    buttons: {
        borderRadius: 8,
        marginTop: 160,
        backgroundColor: "#12003C",
        marginLeft: 50,
        marginRight: 50
    },
    textConta: {
        color: "#fff",
        paddingLeft: 70,
        paddingTop: 10,
        paddingRight: 71,
        paddingBottom: 11,
        textAlign: 'center',
        fontSize: 20
    },
    icon:{
        marginLeft: 350,
        marginTop: -100,
        marginBottom: 120
    }
});
