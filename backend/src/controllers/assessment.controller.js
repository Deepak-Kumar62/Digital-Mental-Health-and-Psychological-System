import Assessment from "../models/Assesment.model.js";

export const submitAssessment = async (req, res) => {
  try {
    const { score } = req.body;

    let result = "Low Stress";
    if (score > 20 && score <= 35) result = "Moderate Stress";
    if (score > 35) result = "High Stress";

    const data = await Assessment.create({
      userId: req.user._id,
      score,
      result,
    });

    res.json({ message: "Assessment saved", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyAssessments = async (req, res) => {
  try {
    const data = await Assessment.find({ userId: req.user._id }).sort({
      takenAt: -1,
    });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
