import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useLocation } from "react-router-dom"; 
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";

const customIcon = new L.Icon({
  iconUrl: markerIcon,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Map = () => {
  const { state } = useLocation(); 
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (state) {
      const { location, checkInDate, checkOutDate, guests } = state;
      // Fetch listings from the backend
      fetchListings(location, checkInDate, checkOutDate, guests);
    }
  }, [state]);

  const fetchListings = async (location, checkInDate, checkOutDate, guests) => {
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location, checkInDate, checkOutDate, guests }),
      });
      const data = await response.json();
      setListings(data.listings); 
    } catch (error) {
      console.error("Error fetching listings:", error);
    }
  };

  const position = [44.8378, -0.5792]; 
  return (
    <MapContainer
      center={position}
      zoom={12}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {listings.map((listing) => (
        <Marker
          key={listing.id}
          position={[listing.latitude, listing.longitude]}
          icon={customIcon}
        >
          <Popup>
            <div>
              <strong>{listing.title}</strong>
              <br />
              Price: ${listing.price}/night
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
