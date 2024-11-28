import express from "express";
import {
  createProperty,
  getAllProperties,
  getPropertyById,
  updateProperty,
  deleteProperty,
} from "../controllers/property.controller.js";

const router = express.Router();

// Route to create a new property
router.post("/", createProperty);

// Route to get all properties
router.get("/", getAllProperties);

// Route to get a specific property by ID
router.get("/:id", getPropertyById);

// Route to update a specific property by ID
router.put("/:id", updateProperty);

// Route to delete a specific property by ID
router.delete("/:id", deleteProperty);

export default router;
