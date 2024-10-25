import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchListings, searchDestinations } from "../utils/api";
// import ListingCard from "";

const Listings = () => {
  const location = useLocation();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadListings = async () => {
      setLoading(true);
      try {
        if (location.state) {
          const { destination, checkIn, checkOut, guests } = location.state;
          const data = await searchDestinations(
            destination,
            checkIn,
            checkOut,
            guests
          );
          setListings(data.listings);
        } else {
          const data = await fetchListings();
          setListings(data.listings);
        }
      } catch (error) {
        console.error("Error fetching listings:", error);
      } finally {
        setLoading(false);
      }
    };

    loadListings();
  }, [location.state]); // Dependency on location.state

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Listings</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {listings.map((listing) => (
            <ListingCard key={listing._id} {...listing} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listings;
