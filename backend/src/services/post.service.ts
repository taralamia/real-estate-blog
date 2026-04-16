import { pool } from "../config/db";

export const createPost = async (data: {
  title: string;
  description: string;
  image?: string;
}) => {
  const { title, description, image } = data;

  const result = await pool.query(
    `INSERT INTO posts (title, description, image)
     VALUES ($1, $2, $3)
     RETURNING *`,
    [title, description, image || null]
  );

  return result.rows[0];
};
export const getAllPosts = async () => {
  const result = await pool.query(
    "SELECT * FROM posts ORDER BY created_at DESC"
  );
  return result.rows;
};
export const getPostById = async (id: number) => {
  const result = await pool.query(
    "SELECT * FROM posts WHERE id = $1",
    [id]
  );
  return result.rows[0];
};