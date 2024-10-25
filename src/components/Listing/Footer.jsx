const Footer = () => {
  return (
    <footer className="py-8 border-t mt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold">Things to know</h4>
            <ul className="text-sm text-gray-500">
              <li>Check-in: After 3:00 PM</li>
              <li>Check-out: 11:00 AM</li>
              {/* Add more policies here */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Health & Safety</h4>
            <ul className="text-sm text-gray-500">
              <li>Committed to Airbnb's enhanced cleaning process.</li>
              {/* More details */}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Cancellation policy</h4>
            <ul className="text-sm text-gray-500">
              <li>Free cancellation before Feb 14.</li>
              {/* Add more */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
