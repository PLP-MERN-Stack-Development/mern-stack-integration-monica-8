// server/models/Post.js
import mongoose from 'mongoose';

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      // Relationship: Post belongs to a Category
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    // featuredImage: { type: String }, // Task 5: Image upload
    // author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Task 5: Auth
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model('Post', postSchema);

export default Post;