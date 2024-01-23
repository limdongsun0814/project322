// 1. expo location import
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { Alert, Text } from "react-native";

export default function MainPage() {
  const [locationData, setLocationData] = useState({
    coords: { latitude: 0.0, longitude: 0.0 },
  });

  useEffect(() => {
    setInterval(() => {
      getLocation();
    }, 1000);
  }, []);

  const getLocation = async () => {
    try {
      await Location.requestForegroundPermissionsAsync();
      const locationData = await Location.getCurrentPositionAsync();
      setLocationData(locationData);
      console.log(locationData.coords.latitude);
      // Alert.alert("위치를 찾을 수가 없습니다.", "하하");
    } catch (error) {
      Alert.alert("위치를 찾을 수가 없습니다.", "앱을 껏다 켜볼까요?");
    }
  };
  return (
    <Text>
      latitude: {locationData.coords.latitude} longitude:
      {locationData.coords.longitude}
    </Text>
  );
}
