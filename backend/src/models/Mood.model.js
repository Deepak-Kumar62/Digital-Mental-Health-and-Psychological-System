import mongoose from "mongoose";

const moodSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },

  mood: {
    type: String,
    enum: ["happy", "sad", "angry", "neutral", "anxious"],
    required: true,
  },

  note: String,
  date: { type: Date, default: Date.now },
});

const Mood = mongoose.model("Mood", moodSchema);

export default Mood;
