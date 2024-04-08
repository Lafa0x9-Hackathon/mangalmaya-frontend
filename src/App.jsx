import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Mangalmaya/Navbar.jsx";
import Home from "./Components/Mangalmaya/Home.jsx";
import Destination from "./Components/Mangalmaya/Destination.jsx";
import AboutUs from "./Components/Mangalmaya/AboutUs.jsx";
import ContactUs from "./Components/Mangalmaya/ContactUs.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="destination" element={<Destination />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
