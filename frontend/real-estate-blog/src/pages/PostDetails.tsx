import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API } from "../api/api";

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

export default function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await API.get<ApiResponse<Post>>(`/posts/${id}`);
        setPost(res.data.data);
      } catch (err) {
        console.error("Failed to fetch post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchPost();
  }, [id]);

  if (loading) return <p>Loading post...</p>;
  if (!post) return <p>Post not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{post.title}</h1>
      {post.image && <img src={post.image} alt="" width="300" />}
      <p>{post.description}</p>
    </div>
  );
}