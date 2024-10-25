import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import ListingPage from "./pages/ListingPage";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/listing-page" element={<ListingPage />} />
      </Routes>
    </Router>
  );
}
