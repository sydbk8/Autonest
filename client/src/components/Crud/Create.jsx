import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Crud.css";

const Create = () => {
  const [carData, setCarData] = useState({
    make: "BMW",
    model: "S4",
    price: 0,
    description: "aaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    miles: 0,
    fuelType: "Gasoline",
    transmission: "Automatic",
    image: null,
    color: "red",
    year: 2024,
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
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log("Car created successfully:", response.data);

      // Reset form fields
      setCarData({
        make: "",
        model: "",
        price: "",
        description: "",
        miles: "",
        fuelType: "Gasoline",
        transmission: "Automatic",
        image: null,
        color: "",
        year: 2024,
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
    <div className="car-form">
      <h2>Create</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="car-control">
          <label>Make</label>
          <input
            type="text"
            name="make"
            value={carData.make}
            onChange={handleChange}
            required
          />
        </div>
        <div className="car-control">
          <label>Model</label>
          <input
            type="text"
            name="model"
            value={carData.model}
            onChange={handleChange}
            required
          />
        </div>
        <div className="car-control">
          <label>Price</label>
          <input
            type="number"
            name="price"
            value={carData.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="car-control">
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={carData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="car-control">
          <label>Miles</label>
          <input
            type="number"
            name="miles"
            value={carData.miles}
            onChange={handleChange}
            required
          />
        </div>
        <div className="car-control">
          <label>Fuel Type</label>
          <select
            className="select"
            name="fuelType"
            value={carData.fuelType}
            onChange={handleChange}
            required
          >
            <option value="Gasoline">Gasoline</option>
            <option value="Electric">Electric</option>
          </select>
        </div>
        <div className="car-control">
          <label>Transmission</label>
          <select
            className="select"
            name="transmission"
            value={carData.transmission}
            onChange={handleChange}
            required
          >
            <option value="Automatic">Automatic</option>
            <option value="Manual">Manual</option>
          </select>
        </div>
        <div className="car-control">
          <label htmlFor="image">Image</label>
          <div
            className="image-upload-container"
            onClick={() => document.getElementById("image").click()}
          >
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              required
              onClick={(e) => e.stopPropagation()}
            />
            {!carData.image && (
              <label className="select-image">Select Image</label>
            )}
            {carData.image && (
              <img src={URL.createObjectURL(carData.image)} alt="Selected" />
            )}
          </div>
        </div>

        <div className="car-control">
          <label>Color</label>
          <input
            type="text"
            name="color"
            value={carData.color}
            onChange={handleChange}
            required
          />
        </div>
        <div className="car-control">
          <label>Year</label>
          <input
            type="number"
            name="year"
            value={carData.year}
            onChange={handleChange}
            required
          />
        </div>
        <div className="car-control">
          <label>Condition</label>
          <select
            className="select"
            name="condition"
            value={carData.condition}
            onChange={handleChange}
            required
          >
            <option value="New">New</option>
            <option value="Used">Used</option>
          </select>
        </div>
        <div className="car-control">
          <label>Type</label>
          <select
            className="select"
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
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default Create;
