import React, { useState, useEffect } from "react";
import axios from "axios";

const UpdateProfile = () => {
  const [userData, setUserData] = useState({
    email: "",
    // Add more fields as needed
  });

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        // Make a GET request to fetch user data
        const response = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        // Set the fetched user data in state
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a PUT request to update user data
      const response = await axios.put(
        "http://localhost:5000/api/auth/profile",
        userData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error.message);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdateProfile;
