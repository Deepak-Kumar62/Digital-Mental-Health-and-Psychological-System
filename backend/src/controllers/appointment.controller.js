import Appointment from "../models/Appointmnet.model.js";

export const bookAppointment = async (req, res) => {
  try {
    const { counselorId, date, time } = req.body;

    const appt = await Appointment.create({
      userId: req.user._id,
      counselorId,
      date,
      time,
    });

    res.json({ message: "Appointment booked", appt });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyBookings = async (req, res) => {
  try {
    const appts = await Appointment.find({ userId: req.user._id }).populate(
      "counselorId",
      "name email"
    );

    res.json(appts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getRequestsForCounselor = async (req, res) => {
  try {
    const appts = await Appointment.find({
      counselorId: req.user._id,
    }).populate("userId", "name email");

    res.json(appts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const updated = await Appointment.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    res.json({ message: "Status updated", updated });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
