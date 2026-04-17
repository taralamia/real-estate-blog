import { useEffect, useState } from "react";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  description: string;
  image?: string;
};
type ApiResponse<T> = {
  success: boolean;
  data: T;
};
export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await API.get<ApiResponse<Post[]>>("/posts");
       setPosts(res.data.data); 
      } catch (err) {
        console.error("Failed to fetch posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading posts...</p>;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #eef2f3, #8e9eab)",
        padding: "20px",
      }}
    >
      <h1>Real Estate Blog</h1>

      <button onClick={() => navigate("/create")}>
        Create Post
      </button>

      <div
        style={{
          display: "grid",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        {posts.length === 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/post/${post.id}`)}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                cursor: "pointer",
                borderRadius: "8px",
                background: "#fff",
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.description.slice(0, 100)}...</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}