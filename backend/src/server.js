import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

const app = express();

dotenv.config();

connectDB();

//middleware
app.use(express.json())

const Port = process.env.port || 5001

app.use("/api/notes", notesRoutes);

app.listen(Port, () => {
  console.log("This app is running on port", Port);
});
