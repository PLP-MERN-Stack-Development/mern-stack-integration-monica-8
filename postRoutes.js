// server/routes/postRoutes.js
import express from 'express';
import { getPosts, createPost, getPostById, updatePost, deletePost } from '../controllers/postController.js';
// import { protect } from '../middleware/auth.js'; // Task 5

const router = express.Router();

router.route('/')
  .get(getPosts)
  .post(/* protect, */ createPost); // protect middleware for authentication

router.route('/:id')
  .get(getPostById)
  .put(/* protect, */ updatePost)
  .delete(/* protect, */ deletePost);

export default router;