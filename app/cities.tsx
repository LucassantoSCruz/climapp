import { View, Text, StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const Cities = () => {
    return (
        <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>

        </LinearGradient>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 64,
        paddingVertical: 79,
        paddingHorizontal: 32
    },
    title: {
        fontSize: 25,
        color: '#FFF',
        fontFamily: 'Montserrat_400Regular'
    },
    button: {
        width: "100%",
        height: 40,
        backgroundColor: '#7693FF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32,
        flexDirection: 'row',
        gap: 8
    },
    buttonTitle: {
        color: '#01080E',
        fontSize: 20,
        fontWeight: '600',
        fontFamily: 'Montserrat_600SemiBold'
    }
})

export default Cities;