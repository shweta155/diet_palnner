import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { AuthProvider } from "./context/Auth";
import About from "./pages/About/About";
import Footer from "./component/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import DietForm from "./pages/DietForm/DietForm";
import "./app.css";
import ContactPage from "./pages/contactPage/ContactPage";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/diet" element={<DietForm />} />
        </Routes>
        <Footer />
      </Router>
    </AuthProvider>
  );
};

export default App;
// src/App.js
