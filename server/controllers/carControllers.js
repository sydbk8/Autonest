import Car from "../models/Car.js";
import { Sequelize } from 'sequelize';

const createCar = async (req, res) => {
  try {
    const {
      make,
      model,
      price,
      description,
      miles,
      fuelType,
      transmission,
      color,
      year,
      condition,
      type,
    } = req.body;

    const newCar = await Car.create({
      make,
      model,
      price,
      description,
      miles,
      fuelType,
      transmission,
      image: req.file.filename,
      color,
      year,
      condition,
      type,
      userId: req.user.id,
    });

    res.status(201).json(newCar);
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({ error: "Failed to create car" });
  }
};

const getAllCars = async (req, res) => {
  try {
    const {
      sortBy,
      makeFilter,
      fuelType,
      transmission,
      condition,
      type,
      minPrice,
      maxPrice,
      searchQuery
    } = req.query;

    const filters = {};

    if (makeFilter) {
      filters.make = { [Sequelize.Op.iLike]: `%${makeFilter}%` };
    }

    if (fuelType) {
      filters.fuelType = { [Sequelize.Op.iLike]: `%${fuelType}%` };
    }

    if (transmission) {
      filters.transmission = { [Sequelize.Op.iLike]: `%${transmission}%` };
    }

    if (condition) {
      filters.condition = { [Sequelize.Op.iLike]: `%${condition}%` };
    }

    if (type) {
      filters.type = { [Sequelize.Op.iLike]: `%${type}%` };
    }

    if (minPrice || maxPrice) {
      filters.price = {};

      if (minPrice) {
        filters.price[Sequelize.Op.gte] = parseInt(minPrice, 10);
      }

      if (maxPrice) {
        filters.price[Sequelize.Op.lte] = parseInt(maxPrice, 10);
      }
    }

    if (searchQuery) {
      filters[Sequelize.Op.or] = [
        { make: { [Sequelize.Op.iLike]: `%${searchQuery}%` } },
        { model: { [Sequelize.Op.iLike]: `%${searchQuery}%` } }
      ];
    }

    let sortQuery = [];

    switch (sortBy) {
      case "Lowest price":
        sortQuery.push(["price", "ASC"]);
        break;
      case "Highest price":
        sortQuery.push(["price", "DESC"]);
        break;
      case "Newest year":
        sortQuery.push(["year", "DESC"]);
        break;
      case "Oldest year":
        sortQuery.push(["year", "ASC"]);
        break;
      case "Lowest miles":
        sortQuery.push(["miles", "ASC"]);
        break;
      case "Highest miles":
        sortQuery.push(["miles", "DESC"]);
        break;
      default:
        sortQuery.push(["createdAt", "DESC"]);
        break;
    }

    const cars = await Car.findAll({
      where: filters,
      order: sortQuery
    });

    res.json(cars);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: "Failed to fetch cars" });
  }
};

const getCarById = async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch car by ID" });
  }
};

const updateCar = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      make,
      model,
      price,
      description,
      miles,
      fuelType,
      transmission,
      color,
      year,
      condition,
      type,
    } = req.body;

    const car = await Car.findByPk(id);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }

    if (car.userId !== req.user.id) {
      return res.status(403).json({ error: "You are not authorized to update this car" });
    }

    const updatedCar = await car.update({
      make,
      model,
      price,
      description,
      miles,
      fuelType,
      transmission,
      color,
      year,
      condition,
      type,
      image: req.file.filename || car.image,
    });

    res.json(updatedCar);
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({ error: "Failed to update car" });
  }
};

const deleteCar = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await Car.findByPk(id);

    if (!car) {
      return res.status(404).json({ error: "Car not found" });
    }
    
    if (car.userId !== req.user.id) {
      return res.status(403).json({ error: "You are not authorized to delete this car" });
    }

    await car.destroy();

    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ error: "Failed to delete car" });
  }
};

export default {
  createCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
};
