import ForumPost from "../models/ForumPost.model.js";


export const createPost = async (req, res) => {
  try {
    const post = await ForumPost.create({
      userId: req.user._id,
      content: req.body.content
    });

    res.json({ message: "Post created", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const posts = await ForumPost.find().sort({ postedAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const post = await ForumPost.findById(req.params.postId);

    post.comments.push({
      userId: req.user._id,
      text: req.body.text
    });

    await post.save();
    res.json({ message: "Comment added", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
