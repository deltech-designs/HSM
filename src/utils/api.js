const API_BASE_URL = "http://localhost:5000";

export const fetchListings = async () => {
  const response = await fetch(`${API_BASE_URL}/api/listings`);
  if (!response.ok) {
    throw new Error("Failed to fetch listings");
  }
  return response.json();
};

export const fetchDestinations = async () => {
  const response = await fetch(`${API_BASE_URL}/api/destinations`);
  if (!response.ok) {
    throw new Error("Failed to fetch destinations");
  }
  return response.json();
};

export const searchDestinations = async (
  destination,
  checkIn,
  checkOut,
  guests
) => {
  const response = await fetch(`${API_BASE_URL}/api/destinations/search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ destination, checkIn, checkOut, guests }),
  });
  if (!response.ok) {
    throw new Error("Search failed");
  }
  return response.json();
};
