import { useNavigate } from "react-router-dom";

type Post = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

export default function PostCard({ post }: { post: Post }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/post/${post.id}`)}
      style={{
        borderRadius: "12px",
        padding: "16px",
        background: "#fff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        cursor: "pointer",
        transition: "0.2s",
      }}
    >
      {post.image && (
        <img
          src={post.image}
          alt=""
          style={{
            width: "100%",
            height: "150px",
            objectFit: "cover",
            borderRadius: "8px",
            marginBottom: "10px",
          }}
        />
      )}

      <h3>{post.title}</h3>
      <p style={{ color: "#555" }}>
        {post.description.slice(0, 80)}...
      </p>
    </div>
  );
}