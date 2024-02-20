import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [carData, setCarData] = useState({
    make: "",
    model: "",
    price: 0,
    description: "",
    miles: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    image: null,
    color: "",
    year: 2022,
    condition: "New",
    type: "Sedan",
  });

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/cars/${id}`
        );

        setCarData(response.data);
      } catch (error) {
        console.error("Error fetching car details:", error.message);
      }
    };

    fetchCarDetails();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData({
      ...carData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setCarData({
      ...carData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("make", carData.make);
      formData.append("model", carData.model);
      formData.append("price", carData.price);
      formData.append("description", carData.description);
      formData.append("miles", carData.miles);
      formData.append("fuelType", carData.fuelType);
      formData.append("transmission", carData.transmission);
      formData.append("image", carData.image);
      formData.append("color", carData.color);
      formData.append("year", carData.year);
      formData.append("condition", carData.condition);
      formData.append("type", carData.type);

      const response = await axios.put(
        `http://localhost:5000/api/cars/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Car updated successfully:", response.data);
      navigate("/"); // Redirect to home page after successful update
    } catch (error) {
      console.error("Error updating car:", error.message);
    }
  };

  return (
    <div className="mt-12">
      <h2>Update</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>
          Make:
          <input
            type="text"
            name="make"
            value={carData.make}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Model:
          <input
            type="text"
            name="model"
            value={carData.model}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={carData.price}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={carData.description}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Miles:
          <input
            type="number"
            name="miles"
            value={carData.miles}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Fuel Type:
          <select
            name="fuelType"
            value={carData.fuelType}
            onChange={handleChange}
            required
          >
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </label>
        <br />
        <label>
          Transmission:
          <select
            name="transmission"
            value={carData.transmission}
            onChange={handleChange}
            required
          >
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </label>
        <br />
        <label>
          Image:
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            required
          />
        </label>
        <br />
        <label>
          Color:
          <input
            type="text"
            name="color"
            value={carData.color}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Year:
          <input
            type="number"
            name="year"
            value={carData.year}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Condition:
          <select
            name="condition"
            value={carData.condition}
            onChange={handleChange}
            required
          >
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </label>
        <br />
        <label>
          Type:
          <select
            name="type"
            value={carData.type}
            onChange={handleChange}
            required
          >
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
            <option value="Convertible">Convertible</option>
            <option value="Coupe">Coupe</option>
            <option value="Wagon">Wagon</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Update;
