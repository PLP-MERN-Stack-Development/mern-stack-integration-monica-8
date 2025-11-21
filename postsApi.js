// client/src/api/postsApi.js
const API_URL = '/api/posts'; // Vite proxy handles the base URL

export const fetchPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

export const createPost = async (postData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${token}`, // Task 5: Auth header
    },
    body: JSON.stringify(postData),
  });

  if (!response.ok) {
    const errorBody = await response.json();
    throw new Error(errorBody.message || 'Failed to create post');
  }
  return response.json();
};

// ... implement fetchPostById, updatePost, deletePost, and category APIs ...