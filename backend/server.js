import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";

// app config
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(cors());

// DB connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
});
