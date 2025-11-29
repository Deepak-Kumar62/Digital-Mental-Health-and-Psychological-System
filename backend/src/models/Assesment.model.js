import mongoose from "mongoose";

const assessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  score: { type: Number, required: true },

  result: {
    type: String,
    enum: ["Low Stress", "Moderate Stress", "High Stress"],
    required: true
  },

  takenAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Assessment", assessmentSchema);
