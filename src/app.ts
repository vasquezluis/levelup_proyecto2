import "dotenv/config";
import express from "express";
import cors from "cors";

import { router } from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use(router);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
