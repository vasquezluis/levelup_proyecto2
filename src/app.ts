import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// routes

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
