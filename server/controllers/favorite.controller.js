import Favorite from "../models/favorite.model.js";

// Create a new favorite
export const createFavorite = async (req, res) => {
  const { userId, propertyId } = req.body;

  try {
    const favorite = new Favorite({ userId, propertyId });
    await favorite.save();
    res.status(201).json(favorite);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all favorites for a user
export const getUserFavorites = async (req, res) => {
  const { userId } = req.params;

  try {
    const favorites = await Favorite.find({ userId }).populate("propertyId");
    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a favorite
export const deleteFavorite = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedFavorite = await Favorite.findByIdAndDelete(id);
    if (!deletedFavorite) {
      return res.status(404).json({ message: "Favorite not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Check if a favorite exists for a user and property
export const checkFavorite = async (req, res) => {
  const { userId, propertyId } = req.params;

  try {
    const favorite = await Favorite.findOne({ userId, propertyId });
    if (favorite) {
      return res.status(200).json({ exists: true });
    }
    res.status(200).json({ exists: false });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
