import { useEffect, useState } from "react";
import { API } from "../api/api";
import { useNavigate } from "react-router-dom";
import PostCard from "../components/PostCard";

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

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading posts...</p>;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #eef2f3, #8e9eab)",
        padding: "40px",
      }}
    >
      {/* 🔹 Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        <h1 style={{ margin: 0 }}>Real Estate Blog</h1>

        <button
          onClick={() => navigate("/create")}
          style={{
            padding: "10px 16px",
            borderRadius: "8px",
            border: "none",
            background: "#333",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          + Create Post
        </button>
      </div>

      {/* 🔹 Content */}
      {posts.length === 0 ? (
        <p>No posts available</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "20px",
          }}
        >
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}