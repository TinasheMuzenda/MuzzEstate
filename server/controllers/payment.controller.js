import Payment from "../models/payment.model.js";

// Create a new payment
export const createPayment = async (req, res) => {
  const { userId, propertyId, amount, paymentMethod } = req.body;

  try {
    const payment = new Payment({ userId, propertyId, amount, paymentMethod });
    await payment.save();
    res.status(201).json(payment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all payments for a user
export const getUserPayments = async (req, res) => {
  const { userId } = req.params;

  try {
    const payments = await Payment.find({ userId }).populate("propertyId");
    res.status(200).json(payments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a payment
export const deletePayment = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPayment = await Payment.findByIdAndDelete(id);
    if (!deletedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a payment
export const updatePayment = async (req, res) => {
  const { id } = req.params;
  const { amount, paymentMethod } = req.body;

  try {
    const updatedPayment = await Payment.findByIdAndUpdate(
      id,
      { amount, paymentMethod },
      { new: true }
    );

    if (!updatedPayment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.status(200).json(updatedPayment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
