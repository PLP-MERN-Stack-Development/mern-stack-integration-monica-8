// client/src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/postsApi';
import PostCard from '../components/posts/PostCard'; // Task 3

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // Task 4: Loading state
  const [error, setError] = useState(null); // Task 4: Error state

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  if (loading) return <h2>Loading Posts...</h2>;
  if (error) return <h2 style={{ color: 'red' }}>Error: {error}</h2>;

  return (
    <div>
      <h1>Latest Blog Posts</h1>
      <div className="posts-grid">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Home;