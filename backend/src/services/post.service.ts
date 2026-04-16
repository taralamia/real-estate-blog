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