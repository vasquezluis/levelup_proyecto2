import "dotenv/config";
import morgan from "morgan";
import express from "express";
import cors from "cors";

import { swaggerDocs } from "./v1/swagger";
import indexRoutes from "./v1/routes/index";
import itemsRoutes from "./v1/routes/items.routes";

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// routes
app.use(indexRoutes);
app.use(itemsRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
  swaggerDocs(app, PORT);
});
