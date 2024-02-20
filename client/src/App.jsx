import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
import Update from "./components/Update/Update";
import Delete from "./components/Delete/Delete";
import Details from "./components/Details/Details";
import NotFound from "./components/NotFound/NotFound";
import Create from "./components/Create/Create";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Logout from "./components/Logout/Logout";
import Profile from "./components/Profile/Profile";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";
import DeleteProfile from "./components/DeleteProfile/DeleteProfile";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<Details />} />
        <Route path="/create" element={token ? <Create /> : <Navigate to="/login" />} />
        <Route path="/update/:id" element={token ? <Update /> : <Navigate to="/login" />} />
        <Route path="/delete/:id" element={token ? <Delete /> : <Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/profile" element={token ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/profile/update" element={token ? <UpdateProfile /> : <Navigate to="/login" />} />
        <Route path="/profile/delete" element={token ? <DeleteProfile /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
