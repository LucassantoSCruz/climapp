import { CityDetailResponse } from "@/model/city-details.response";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const CityDetails = () => {
  const searchParams = useLocalSearchParams();
  const [cityDetails, setCityDetails] = useState<CityDetailResponse>();

  const handleData = async () => {
    try {
      const response = await fetch("https://climapp-api.vercel.app/api");
      const responseJSON = (await response.json()) as CityDetailResponse[];

      const city = responseJSON.find((cityData) =>
        cityData.city.includes(searchParams.cityName)
      );
      console.log(city);
      if (city) {
        setCityDetails(city);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  return (
    <LinearGradient colors={["#00457D", "#05051F"]} style={style.container}>

      <View style={style.headerContainer}>
        <TouchableOpacity style={style.headerIcon} onPress={router.back}>
          <MaterialIcons
            name="chevron-left"
            size={24}
            color={"#FFF"}
          />
        </TouchableOpacity>
        <Text style={style.headerTitle}>
          {cityDetails?.city_name || "Cidade não encontrada"}
        </Text>
      </View>

      <View style={style.card}>
        <View style={style.cardHeader}>
          <Text style={style.cardHeaderTitle}>Hoje</Text>
          <Text style={style.cardHeaderTitle}>{cityDetails?.date}</Text>
        </View>

        <View style={style.cardBox}>
          <Image source={require('../assets/images/clouds.png')} style={style.cardImage} />
          <View>
            <Text style={style.cardTemperature}>
              {cityDetails?.temp}°
            </Text>
            <Text style={style.cardDescription}>
              {cityDetails?.description}
            </Text>
          </View>

          <View style={style.rowBox}>

            <View style={style.row}>
              <Image source={require('../assets/images/humidity.png')} style={style.rowIcon} />
              <Text style={style.rowTitle}>Umidade: </Text>
              <Text style={style.rowValue}>{cityDetails?.humidity}%</Text>
            </View>

            <View style={style.row}>
              <Image source={require('../assets/images/temperature.png')} style={style.rowIcon} />
              <Text style={style.rowTitle}>Temperatura:</Text>
              <Text style={style.rowValue}>{cityDetails?.forecast[0].min}/{cityDetails?.forecast[0].max}</Text>
            </View>

          </View>
        </View>
      </View>

      <View style={style.rowCardWeek}>
        {
          cityDetails?.forecast.map(day => (
            <View style={style.cardDayWeek}>
              <View style={{ alignItems: 'center' }}>
                <Text style={style.textWeekDay}>
                  {day.weekday}
                </Text>
                <Text style={style.textWeekDay}>
                  {day.date}
                </Text>
              </View>
              <Image source={require('../assets/images/clouds.png')} style={style.imageCard} />
              <Text style={style.textTemp}>
                {day.max}/{day.min}°
              </Text>
            </View>
          ))
        }
      </View>

    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 40,
    paddingTop: 40,
  },
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  headerTitle: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Montserrat_600SemiBold",
  },
  card: {
    width: "100%",
    borderRadius: 24,
    backgroundColor: "#4463D5",
    padding: 16,
    gap: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  cardHeaderTitle: {
    color: "#FFF",
    fontSize: 16,
    fontFamily: "Montserrat_600SemiBold",
  },
  headerIcon: {
    position: "absolute",
    left: 0,
  },
  cardImage: {
    width: 72,
    height: 64
  },
  cardTemperature: {
    fontSize: 43,
    color: '#FFF',
    fontFamily: 'Montserrat_700Bold',
    textAlign: 'center'
  },
  cardDescription: {
    fontSize: 13,
    fontFamily: 'Montserrat_400Regular',
    color: '#FFF',
    textAlign: 'center'
  },
  cardBox: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rowIcon: {
    width: 24,
    height: 24
  },
  rowTitle: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Montserrat_600SemiBold'
  },
  rowValue: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular',
    marginLeft: 'auto'
  },
  rowBox: {
    gap: 8
  },
  rowCardWeek: {
    flexDirection: 'row',
    gap: 16
  },
  cardDayWeek: {
    width: 85,
    backgroundColor: '#FFFFFF15',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    gap: 16
  },
  imageCard: {
    width: 27,
    height: 24
  },
  textWeekDay: {
    color: '#FFF',
    fontSize: 16,
    fontFamily: 'Montserrat_400Regular'
  },
  textTemp: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Montserrat_600SemiBold'
  }
});

export default CityDetails;