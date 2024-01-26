import React, { useEffect, useMemo, useState } from "react";
import UseCurrentLocation from "./UseCurrentPosition";

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1, // 1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
  maximumAge: 1000 * 3600 * 24, // 24 hour
};

function HooksTest(props) {
  const { location, error } = UseCurrentLocation(geolocationOptions);
  useEffect(() => {
    console.log("showLatLong 컴포넌트 렌더링");
  }, []);
  return (
    <div>
      <h1>latitude: {location && location.latitude}</h1>
      <h1>longitude: {location && location.longitude}</h1>
    </div>
  );
}

export default HooksTest;
