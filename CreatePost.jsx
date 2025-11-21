// client/src/pages/CreatePost.jsx (Simplified)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../api/postsApi';
import PostForm from '../components/posts/PostForm';

const CreatePost = () => {
  const navigate = useNavigate();
  const [submissionError, setSubmissionError] = useState(null);

  const handleSubmit = async (postData) => {
    try {
      const newPost = await createPost(postData);
      
      // Task 4: Successful integration - navigate to the new post detail
      navigate(`/posts/${newPost._id}`); 
    } catch (error) {
      // Task 4: Handle submission error from API
      setSubmissionError(error.message);
    }
  };

  return (
    <div>
      <h1>Create New Post</h1>
      {submissionError && <p style={{ color: 'red' }}>{submissionError}</p>}
      <PostForm onSubmit={handleSubmit} />
    </div>
  );
};

export default CreatePost;