// HomePage.js
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero";
import InspirationCards from "../components/Home/InspirationCards";
import ExperienceSection from "../components/Home/ExperienceSection";
import GiftCards from "../components/Home/GiftCards";
import HostingInfo from "../components/Home/HoistingInfo";
import Footer from "../components/Home/Footer";

const HomePage = () => (
  <div>
    <Header />
    <Hero />
    <InspirationCards />
    <ExperienceSection />
    <GiftCards />
    <HostingInfo />
    <Footer />
  </div>
);

export default HomePage;
