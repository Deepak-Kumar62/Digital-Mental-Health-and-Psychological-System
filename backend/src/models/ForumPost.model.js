import mongoose from "mongoose";

const forumPostSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },

  content: { type: String, required: true },

  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      text: String,
      date: { type: Date, default: Date.now },
    },
  ],

  postedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ForumPost", forumPostSchema);
