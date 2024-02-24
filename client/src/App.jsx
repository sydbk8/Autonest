import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Explore from "./components/Explore/Explore";
import Update from "./components/Crud/Update";
import Delete from "./components/Crud/Delete";
import Details from "./components/Explore/Details/Details";
import NotFound from "./components/NotFound/NotFound";
import Create from "./components/Crud/Create";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Logout from "./components/Auth/Logout/Logout";
import Profile from "./components/Auth/Profile/Profile";
import UpdateProfile from "./components/Auth/UpdateProfile/UpdateProfile";
import DeleteProfile from "./components/Auth/DeleteProfile/DeleteProfile";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const expirationTime = localStorage.getItem("expirationTime");
      const currentTime = Date.now();

      if (currentTime > expirationTime) {
        // Token has expired, logout the user
        handleLogout();
      } else {
        // Set timeout to automatically logout when token expires
        const timeout = setTimeout(() => {
          handleLogout();
        }, expirationTime - currentTime);
        return () => clearTimeout(timeout);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:id" element={<Details />} />
        <Route
          path="/create"
          element={isLoggedIn ? <Create /> : <Navigate to="/login" />}
        />
        <Route
          path="/update/:id"
          element={isLoggedIn ? <Update /> : <Navigate to="/login" />}
        />
        <Route
          path="/delete/:id"
          element={isLoggedIn ? <Delete /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/logout"
          element={<Logout handleLogout={handleLogout} />}
        />
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/update"
          element={isLoggedIn ? <UpdateProfile /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile/delete"
          element={isLoggedIn ? <DeleteProfile /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
