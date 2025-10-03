import { View, Text, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import citiesData from '../data/cities.json'
import { MaterialIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';

const Cities = () => {
    const router = useRouter()
    const [search, setSearch] = useState("");
    const [filteredCities, setFilteredCities] = useState(citiesData)

    useEffect(() => {
        const newFilteredCities = citiesData.filter((city) =>
            city.city.toLocaleLowerCase().includes(search.toLowerCase())
        );

        setFilteredCities(newFilteredCities);
    }, [search])

    return (
        <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>
            <View style={style.inputContainer}>
                <TextInput placeholder='Digite a cidade'
                    placeholderTextColor={'#FFFFFF'}
                    style={style.input}
                    value={search}
                    onChangeText={(value) => setSearch(value)}
                />
                <MaterialIcons name='search' size={24} color={'#FFFFFF'} />
            </View>
            <ScrollView>
                <View style={style.scrollList}>
                    {
                        filteredCities.map(city => (
                            <TouchableOpacity key={city.city} style={style.listItem} onPress={() => {
                                router.push(`/${city.city_name}`);
                            }}>
                                <Image style={style.cityImage} source={require('../assets/images/clouds.png')} />
                                <Text style={style.cityName}>
                                    {city.city.replace(',', ' -')}
                                </Text>
                                <Text style={style.cityTemp}>
                                    {city.temp}°
                                </Text>
                            </TouchableOpacity>
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
        height: 50,
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