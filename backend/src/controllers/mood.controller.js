import Mood from "../models/Mood.model.js";

export const addMood = async (req, res) => {
  try {
    const { mood, note } = req.body;

    const newMood = await Mood.create({
      userId: req.user._id,
      mood,
      note,
    });

    res.json({ message: "Mood logged", newMood });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ userId: req.user._id }).sort({ date: -1 });
    res.json(moods);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
