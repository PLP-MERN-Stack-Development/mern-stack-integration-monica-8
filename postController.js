// server/controllers/postController.js
import asyncHandler from 'express-async-handler';
import Post from '../models/Post.js';

// @desc    Get all blog posts
// @route   GET /api/posts
// @access  Public
const getPosts = asyncHandler(async (req, res) => {
  // Use .populate('category') to get the full category object, not just the ID
  const posts = await Post.find({})
    .populate('category', 'name') // Select only the 'name' field from Category
    .sort({ createdAt: -1 });

  res.json(posts);
});

// @desc    Create a new post
// @route   POST /api/posts
// @access  Private (Needs Task 5 Auth implementation)
const createPost = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400);
    throw new Error('Please fill all required fields: title, content, and category.');
  }

  const post = new Post({
    // user: req.user._id, // Task 5: Associate post with logged-in user
    title,
    content,
    category,
  });

  const createdPost = await post.save();
  // Populate the category field before sending response back
  await createdPost.populate('category', 'name'); 

  res.status(201).json(createdPost);
});

// ... implement getPostById, updatePost, deletePost ...

export { getPosts, createPost /*, ... */ };