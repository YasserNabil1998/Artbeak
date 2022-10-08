
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Projects from "./components/pages/Projects";
import Transactions from "./components/pages/Transactions";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Index" element={<Index />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Transactions" element={<Transactions />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
