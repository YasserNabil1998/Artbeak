
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/pages/Footer";
import Index from "./components/pages/Index";
import Login from "./components/pages/Login";
import Signin from "./components/pages/Signin";
import Signup from "./components/pages/Signup";
import Projects from "./components/pages/Projects";
import Transactions from "./components/pages/Transactions";
import Notifications from "./components/pages/Notifications";
import AccountSettings from "./components/pages/AccountSettings";
import Frame_01 from "./components/pages/Frame_01";
import Frame_02 from "./components/pages/Frame_02";
import Frame_03 from "./components/pages/Frame_03";
import Frame_04 from "./components/pages/Frame_04";
import Frame_05 from "./components/pages/Frame_05";
import Frame_06 from "./components/pages/Frame_06";
import Frame_07 from "./components/pages/Frame_07";

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
          <Route path="/Notifications" element={<Notifications />} />
          <Route path="/AccountSettings" element={<AccountSettings />} />
          <Route path="/Frame_01" element={<Frame_01 />} />
          <Route path="/Frame_02" element={<Frame_02 />} />
          <Route path="/Frame_03" element={<Frame_03 />} />
          <Route path="/Frame_04" element={<Frame_04 />} />
          <Route path="/Frame_05" element={<Frame_05 />} />
          <Route path="/Frame_06" element={<Frame_06 />} />
          <Route path="/Frame_07" element={<Frame_07 />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
