const Amenities = () => {
  return (
    <div className="my-8">
      <h2 className="text-xl font-bold mb-4">What this place offers</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <FaWifi /> Wifi
        </div>
        <div>
          <FaSwimmer /> Pool
        </div>
        <div>
          <FaCar /> Free parking on premises
        </div>
        <div>
          <FaTv /> TV
        </div>
        {/* Add more amenities here */}
      </div>
    </div>
  );
};

export default Amenities;
