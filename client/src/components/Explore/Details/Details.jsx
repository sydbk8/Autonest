import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css"; // Import the CSS file

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const URL = `http://localhost:5000/api/cars/${id}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container details">
      <div className="details-banner">
        <img
          className="image"
          src={`http://localhost:5000/uploads/${data.image}`}
          alt={data.model}
        />
      </div>
      <div className="details-info">
        <h1 className="model">{data.model}</h1>
        <h3 className="make">{data.make}</h3>
        <p className="price">Price: ${data.price}</p>
        <div className="details">
          <p>Miles: {data.miles} miles</p>
          <p>Fuel Type: {data.fuelType}</p>
          <p>Transmission: {data.transmission}</p>
          <p>Color: {data.color}</p>
          <p>Year: {data.year}</p>
          <p>Condition: {data.condition}</p>
        </div>
        <p className="description">Description: {data.description}</p>
      </div>
    </div>
  );
};

export default Details;
