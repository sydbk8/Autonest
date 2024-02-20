import express from "express";
import carController from "../controllers/carControllers.js";
import { authenticateToken } from "../middleware/authMiddleware.js";
import upload from "../config/multerConfig.js";

const router = express.Router();

router.get("/", carController.getAllCars);
router.get("/:id", carController.getCarById);
router.post("/", authenticateToken, upload.single("image"), carController.createCar);
router.put("/:id", authenticateToken, upload.single("image"), carController.updateCar);
router.delete("/:id", authenticateToken, carController.deleteCar);

export default router;
