import morgan from "morgan";
import express from "express";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import indexRoutes from "./v1/routes/index.js";
import itemsRoutes from "./v1/routes/items.routes.js";

// Docs in json fromat
import swaggerOptionsFile from "./swagger.json" assert { type: "json" };
const specs = swaggerJSDoc(swaggerOptionsFile);

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// routes
app.use(indexRoutes);
app.use(itemsRoutes);

export default app;
