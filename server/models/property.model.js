import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  property_id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, enum: ["rental", "sale"], required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Property = mongoose.model("Payment", paymentSchema);
export default Property;
