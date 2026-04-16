import express from "express";
import cors from "cors";
import "./config/db"; 
import postRoutes from "./routes/post.routes";
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/posts", postRoutes);
/*app.get("/", (req, res) => {
  res.send("Server is running 🚀");
});*/

export default app;