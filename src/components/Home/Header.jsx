import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { TfiWorld } from "react-icons/tfi";
import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState({
    destination: "",
    checkIn: null,
    checkOut: null,
    guests: "",
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearch((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(search),
      });

      if (response.ok) {
        const data = await response.json();
        navigate("/listing", { state: { searchData: data } });
      } else {
        console.error("Search failed");
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <header className="p-6 bg-black shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center w-[85%] mx-auto">
        {/* Logo */}
        <div className="flex items-center text-white text-xl font-bold">
          {/* <img src="/logo.png" alt="Logo" className="h-8 mr-6" /> */}
          LAUTECH
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold">
          <a href="#" className="hover:underline">
            Places to stay
          </a>
          <a href="#" className="hover:underline">
            Experiences
          </a>
          <a href="#" className="hover:underline">
            Online Experiences
          </a>
        </nav>

        {/* Become a Host, World Icon, User Menu */}
        <div className="flex items-center space-x-4">
          <button className="hidden md:block text-black font-semibold hover:underline">
            Become a Host
          </button>
          <TfiWorld size={24} className="text-gray-500" />
          <div className="bg-gray-200 flex items-center space-x-2 px-4 py-2 rounded-full cursor-pointer">
            <MdMenu className="text-black" size={24} />
            <FaUserCircle className="text-gray-600" size={30} />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex items-center justify-center space-x-4 bg-white rounded-full shadow-md py-4 px-6 mt-6 w-[80%] mx-auto border border-gray-200">
        <input
          name="destination"
          value={search.destination}
          onChange={handleSearchChange}
          className="flex-1 px-3 py-2 outline-none border-r border-gray-300 text-gray-700"
          type="text"
          placeholder="Where are you going?"
        />
        <DatePicker
          selected={search.checkIn}
          onChange={(date) => setSearch({ ...search, checkIn: date })}
          className="flex-1 px-3 py-2 outline-none border-r border-gray-300 text-gray-700"
          placeholderText="Check in"
          dateFormat="yyyy/MM/dd"
        />
        <DatePicker
          selected={search.checkOut}
          onChange={(date) => setSearch({ ...search, checkOut: date })}
          className="flex-1 px-3 py-2 outline-none border-r border-gray-300 text-gray-700"
          placeholderText="Check out"
          dateFormat="yyyy/MM/dd"
        />
        <input
          name="guests"
          value={search.guests}
          onChange={handleSearchChange}
          className="flex-1 px-3 py-2 outline-none text-gray-700"
          type="text"
          placeholder="Guests"
        />
        <button
          className="bg-red-500 rounded-full p-2 text-white flex items-center justify-center"
          onClick={navigate("../../pages/Listing.jsx")}
        >
          <FaSearch />
        </button>
      </div>
    </header>
  );
};

export default Header;
