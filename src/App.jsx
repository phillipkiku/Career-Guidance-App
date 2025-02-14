import React from "react";
// import '@mantine/core/styles.css';
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navigation";
import Home from "./pages/home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
  );
}
export default App;
