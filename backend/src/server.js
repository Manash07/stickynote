import express from "express";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

app.use("/api/notes", notesRoutes);

app.listen(5001, () => {
  console.log("This app is running on port 5001");
});


//mongodb+srv://manashghimire2072_db_user:yWFYm704YneKvvwy@cluster0.vnfkike.mongodb.net/?appName=Cluster0