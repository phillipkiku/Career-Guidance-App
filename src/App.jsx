import React from "react";
// import '@mantine/core/styles.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navigation";
import Home from "./pages/home";
import User from "./pages/user";
import Footer from "./components/footer"
import Resources from "./pages/resources";
import ContactUs from "./pages/contactus";
import AboutUs from "./pages/aboutus";

// import Testimonials from "./pages/testimonials";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/contactus" element={<ContactUs/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}
export default App;
