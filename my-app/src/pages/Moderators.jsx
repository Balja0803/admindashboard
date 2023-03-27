import axios from "axios";
import { useEffect, useState } from "react";

export function Moderators() {
  const [rest, setRest] = useState();
  const location = {
    location: {
      type: "point",
      coordinates: [106.933868, 47.9237483],
    },
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
  }

  const fetchLocation = async (location) => {
    // const formData = new FormData();
    // formData.append("location", JSON.stringify(location));
    const result = await axios.post(
      "http://localhost:2323/restaurants/nearest",
      location
    );
    console.log(result.data);
    setRest(result.data);
  };

  return (
    <div>
      <button onClick={() => fetchLocation(location)}>
        Find nearest restaurants
      </button>
      {rest && <p>Nearest restaurants: {rest.name}</p>}
    </div>
  );
}
