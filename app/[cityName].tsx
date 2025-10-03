import { CityDetailResponse } from "@/model/city-details.response";
import { MaterialIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

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
        <MaterialIcons
          name="chevron-left"
          size={24}
          color={"#FFF"}
          style={style.headerIcon}
        />
        <Text style={style.headerTitle}>
          {cityDetails?.city_name || "Cidade não encontrada"}
        </Text>
      </View>

      <View style={style.card}>
        <View style={style.cardHeader}>
          <Text style={style.cardHeaderTitle}>Hoje</Text>
          <Text style={style.cardHeaderTitle}>{cityDetails?.date}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    gap: 16,
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
});

export default CityDetails;
