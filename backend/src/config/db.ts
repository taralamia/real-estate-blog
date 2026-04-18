import { Pool } from "pg";

const connectionString =
  process.env.DATABASE_URL ||
  "postgresql://postgres:postgres@localhost:5432/real_estate";

export const pool = new Pool({
  connectionString,
  ssl: process.env.DATABASE_URL
    ? { rejectUnauthorized: false }
    : false,
});

// Function to create tables if they don't exist
async function initializeDatabase() {
  const createPostsTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      description TEXT NOT NULL,
      image TEXT,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(createPostsTableQuery);
    console.log("✅ Posts table created/verified successfully");
  } catch (error) {
    console.error("❌ Error creating posts table:", error);
  }
}

// Connect and initialize
pool.connect()
  .then(async () => {
    console.log("✅ PostgreSQL connected successfully");
    await initializeDatabase();
  })
  .catch((err) => {
    console.error("❌ PostgreSQL connection error:", err);
  });