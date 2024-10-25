import ListingDetails from "../components/Listing/ListingDetails";
import BookingInfo from "../components/Listing/BookingInfo";
import Amenities from "../components/Listing/Amenities";
// import Reviews from "../components/Listing/Review";
import MapSection from "../components/Listing/MapSection";
import Footer from "../components/Listing/Footer";

const ListingPage = () => {
  return (
    <div>
      <ListingDetails />
      <div className="container mx-auto flex flex-col md:flex-row my-8">
        <div className="w-full md:w-2/3 pr-6">
          <Amenities />
          <Reviews />
          <MapSection />
        </div>
        <div className="w-full md:w-1/3">
          <BookingInfo />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ListingPage;
