import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
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
    <div>
      <h1>
        {data.make} {data.model}
      </h1>
      <p>Price: ${data.price}</p>
      <p>Description: {data.description}</p>
      <p>Miles: {data.miles} miles</p>
      <p>Fuel Type: {data.fuelType}</p>
      <p>Transmission: {data.transmission}</p>
      <img
        src={`http://localhost:5000/uploads/${data.image}`}
        alt={data.model}
      />
    </div>
  );
};

export default Details;
