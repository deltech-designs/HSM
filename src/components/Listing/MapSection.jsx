import { MapContainer, TileLayer, Marker } from "react-leaflet";

const MapSection = () => {
  const position = [44.8378, -0.5792]; // Bordeaux Coordinates

  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">Where you'll be</h2>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} />
      </MapContainer>
    </div>
  );
};

export default MapSection;
