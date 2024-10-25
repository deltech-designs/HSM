import { useState } from "react";
import { FaStar } from "react-icons/fa";

const BookingInfo = () => {
  const [guests, setGuests] = useState(2);

  return (
    <div className="border p-6 rounded-lg shadow-md w-full md:w-1/3">
      <div className="text-xl font-bold">$75 / night</div>
      <div className="flex items-center text-gray-500">
        <FaStar className="text-red-500" /> 5.0 · 7 reviews
      </div>

      {/* Date Selection */}
      <div className="my-4">
        <label className="block text-sm font-semibold mb-1">Check-in</label>
        <input type="date" className="border rounded-lg p-2 w-full" />
      </div>
      <div className="my-4">
        <label className="block text-sm font-semibold mb-1">Check-out</label>
        <input type="date" className="border rounded-lg p-2 w-full" />
      </div>

      {/* Guests Selection */}
      <div className="my-4">
        <label className="block text-sm font-semibold mb-1">Guests</label>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border rounded-lg p-2 w-full"
        >
          <option value="1">1 guest</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
        </select>
      </div>

      <button className="w-full bg-red-500 text-white p-3 rounded-lg">
        Reserve
      </button>

      {/* Breakdown of Pricing */}
      <div className="text-gray-500 text-sm mt-4">
        <div className="flex justify-between">
          <span>$75 x 7 nights</span>
          <span>$525</span>
        </div>
        <div className="flex justify-between">
          <span>Cleaning fee</span>
          <span>$50</span>
        </div>
        <div className="flex justify-between">
          <span>Service fee</span>
          <span>$73</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total before taxes</span>
          <span>$648</span>
        </div>
      </div>
    </div>
  );
};

export default BookingInfo;
