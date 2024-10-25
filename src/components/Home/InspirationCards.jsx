import { useEffect, useState } from "react";

const API_URL = "https://localhost:5000/api/destinations";

export default function InspirationCards() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(`${API_URL}`);
        const data = await response.json();
        setDestinations(data);
      } catch (error) {
        console.error("Failed to fetch destinations:", error);
      }
    };

    fetchDestinations();
  }, []); // Fetch once when the component mounts

  return (
    <section className="p-10">
      <h2 className="text-2xl font-bold mb-6">
        Inspiration for your next trip
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {destinations.length > 0 ? (
          destinations.map((place, index) => (
            <div
              key={index}
              className={`text-white rounded-lg overflow-hidden shadow-lg ${place.color}`}
            >
              <img
                className="w-full h-48 object-cover"
                src={place.image}
                alt={place.name}
              />
              <div className="p-4">
                <h3 className="text-lg">{place.name}</h3>
                <p>{place.distance} away</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading destinations...</p>
        )}
      </div>
    </section>
  );
}
