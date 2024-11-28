import express from "express";
import {
  createFavorite,
  getUserFavorites,
  deleteFavorite,
  checkFavorite,
} from "../controllers/favorite.controller.js";

const router = express.Router();

// Route to create a new favorite
router.post("/", createFavorite);

// Route to get all favorites for a specific user
router.get("/:userId", getUserFavorites);

// Route to delete a specific favorite by ID
router.delete("/:id", deleteFavorite);

// Route to check if a favorite exists
router.get("/check/:userId/:propertyId", checkFavorite);

export default router;
