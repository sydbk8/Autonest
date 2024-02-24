import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Delete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/cars/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Car deleted successfully");
      // Redirect to another page or update state as needed
      navigate("/cars"); // Replace with the desired redirect path
    } catch (error) {
      console.error("Error deleting car:", error.message);
    }
  };

  return (
    <div>
      <h2>Delete</h2>
      <p>Are you sure you want to delete this car?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Delete;
