import User from "../models/User.model.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/generateToken.js";

export const register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const existing = await User.findOne({ email });
    if (existing)
      return res.status(400).json({ message: "User already exists" });

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPass,
      role,
    });

    res.json({
      message: "Registered successfully",
      token: generateToken(user._id),
      user,
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid password" });

    res.json({
      message: "Logged in",
      token: generateToken(user._id),
      user,
    });
  } catch (error) {
    next(error);
  }
};
