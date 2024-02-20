import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Create.css';

const Create = () => {
  const [carData, setCarData] = useState({
    make: "Bmw",
    model: "M8",
    price: 10000,
    description: "aaa",
    miles: 10,
    fuelType: "Gasoline",
    transmission: "Automatic",
    image: null,
    color: "aaa",
    year: 2022,
    condition: "New",
    type: "Sedan",
  });

  const navigate = useNavigate();

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
      // Prepare form data
      const formData = new FormData();
      formData.append("make", carData.make);
      formData.append("model", carData.model);
      formData.append("price", carData.price);
      formData.append("description", carData.description);
      formData.append("miles", carData.miles);
      formData.append("fuelType", carData.fuelType);
      formData.append("transmission", carData.transmission);
      formData.append("image", carData.image);
      formData.append("type", carData.type);
      formData.append("condition", carData.condition);
      formData.append("year", carData.year);
      formData.append("color", carData.color);

      const response = await axios.post(
        "http://localhost:5000/api/cars",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with your actual token
          },
        }
      );

      console.log("Car created successfully:", response.data);

      // Reset form fields
      setCarData({
        make: "Bmw",
    model: "M8",
    price: 10000,
    description: "aaa",
    miles: 10,
    fuelType: "Gasoline",
    transmission: "Automatic",
    image: null,
    color: "aaa",
    year: 2022,
    condition: "New",
    type: "Sedan",
      });

      // Redirect to another route upon successful creation
      navigate("/explore"); // Assuming "/" is the route for the home page
    } catch (error) {
      console.error("Error creating car:", error.message);
    }
  };

  return (
    <div className="create">
      <h2>Create</h2>
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
            <option value="Electric">Electric</option>
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
  <option value="Convertible">Convertible</option>
  <option value="Coupe">Coupe</option>
  <option value="Hatchback">Hatchback</option>
  <option value="Minivan">Minivan</option>
  <option value="Sedan">Sedan</option>
  <option value="SUV">SUV</option>
  <option value="Truck">Truck</option>
  <option value="Van">Van</option>
  <option value="Wagon">Wagon</option>
</select>

        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Create;
