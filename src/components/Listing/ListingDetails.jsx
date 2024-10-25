import { FaStar } from "react-icons/fa";
import { BsShare, BsHeart } from "react-icons/bs";

const ListingDetails = () => {
  return (
    <div className="container mx-auto my-8">
      {/* Listing Title & Actions */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Bordeaux Getaway</h1>
          <div className="flex items-center text-gray-500">
            <FaStar className="text-red-500" /> 5.0 · 7 reviews · Bordeaux,
            Nouvelle-Aquitaine, France
          </div>
        </div>
        <div className="flex space-x-4 text-gray-700">
          <button className="flex items-center space-x-1">
            <BsShare /> <span>Share</span>
          </button>
          <button className="flex items-center space-x-1">
            <BsHeart /> <span>Save</span>
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img
          src="/path-to-image1.jpg"
          className="col-span-2 rounded-lg"
          alt="Listing main image"
        />
        <div className="grid grid-cols-2 gap-2">
          <img src="/path-to-image2.jpg" className="rounded-lg" alt="Image 2" />
          <img src="/path-to-image3.jpg" className="rounded-lg" alt="Image 3" />
          <img src="/path-to-image4.jpg" className="rounded-lg" alt="Image 4" />
          <img src="/path-to-image5.jpg" className="rounded-lg" alt="Image 5" />
        </div>
      </div>
    </div>
  );
};

export default ListingDetails;
