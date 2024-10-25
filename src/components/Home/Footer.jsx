export default function Footer() {
  return (
    <footer className="bg-black text-white p-10">
      {/* Upper part of the footer */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Column 1 - Inspiration for Future Getaways */}
        <div>
          <h4 className="font-bold mb-4">Inspiration for Future Getaways</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Phoenix, Arizona
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                San Francisco, California
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Barcelona, Spain
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                London, England
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Paris, France
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Tokyo, Japan
              </a>
            </li>
          </ul>
        </div>

        {/* Column 2 - Support */}
        <div>
          <h4 className="font-bold mb-4">Support</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Safety Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Cancellation options
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our COVID-19 Response
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Supporting people with disabilities
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Report a neighborhood concern
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Community */}
        <div>
          <h4 className="font-bold mb-4">Community</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Airbnb.org: disaster relief housing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Support Afghan refugees
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Combating discrimination
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Hosting */}
        <div>
          <h4 className="font-bold mb-4">Hosting</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Try hosting
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                AirCover: protection for Hosts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Explore hosting resources
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Visit our community forum
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How to host responsibly
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5 - About */}
        <div>
          <h4 className="font-bold mb-4">About</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Newsroom
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Learn about new features
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Letter from our founders
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Airbnb Luxe
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom section of the footer */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="text-sm">
          &copy; 2024 Airbnb, Inc. All rights reserved.
        </div>

        {/* Right side (Terms, Privacy, Site Map) */}
        <div className="flex space-x-4 text-sm mt-4 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Site Map
          </a>
        </div>
      </div>
    </footer>
  );
}
