import express from "express";
import cors from "cors";

// app config
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello" });
});

app.listen(PORT, () => {
  console.log("Listening on PORT:", PORT);
});
