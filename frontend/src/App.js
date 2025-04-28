import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css"
import Quests from "./components/Quests";
import Shop from "./components/Shop";
import Blogs from "./components/Blogs";
import { useState } from "react";
import MyProfile from "./components/MyProfile";
import Create from "./components/Create";
import Signup from "./components/Signup";
import Signin from "./components/Signin";


function App() {

  return (
    <div className="main">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Quests />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/create" element={<Create />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
