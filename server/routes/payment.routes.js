import express from "express";
import {
  createPayment,
  getUserPayments,
  deletePayment,
  updatePayment,
} from "../controllers/payment.controller.js";

const router = express.Router();

// Route to create a new payment
router.post("/", createPayment);

// Route to get all payments for a specific user
router.get("/:userId", getUserPayments);

// Route to delete a specific payment by ID
router.delete("/:id", deletePayment);

// Route to update a specific payment by ID
router.put("/:id", updatePayment);

export default router;
