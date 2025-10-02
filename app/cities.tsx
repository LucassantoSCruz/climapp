import { View, Text, StyleSheet, Image, ScrollView, TextInput } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import citiesData from '../data/cities.json'
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const Cities = () => {

    const [search, setSearch] = useState()

    console.log(citiesData);

    return (
        <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
            <View style={style.inputContainer}>
                <TextInput placeholder='Digite a cidade' placeholderTextColor={'#FFFFFF'}/>
                <MaterialIcons name='search' size={24} color={'#FFFFFF'} />
            </View>
            <ScrollView>
                <View style={style.scrollList}>
                    {
                        citiesData.map(city => (
                            <View key={city.city} style={style.listItem}>
                                <Image style={style.cityImage} source={require('../assets/images/clouds.png')} />
                                <Text style={style.cityName}>
                                    {city.city.replace(',',' -')}
                                </Text>
                                <Text style={style.cityTemp}>
                                    {city.temp}°
                                </Text>
                            </View>
                        ))
                    }
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        gap: 16,
        paddingTop: 40
    },
    scrollList: {
        gap: 16
    },
    listItem: {
        flexDirection: 'row',
        height: 63,
        width: '100%',
        backgroundColor: '#FFFFFF15',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 16,
        paddingHorizontal: 16
    },
    cityName: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium'
    },
    cityTemp: {
        color: '#FFF',
        fontSize: 25,
        fontFamily: 'Montserrat_700Bold'
    },
    cityImage: {
        width: 27,
        height: 24
    },
    inputContainer: {
        height: 36,
        width: '100%',
        backgroundColor: '#FFFFFF15',
        borderRadius: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    input: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: "Montserrat_500Medium",
    }
})

export default Cities;