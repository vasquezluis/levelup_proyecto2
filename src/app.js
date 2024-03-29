import morgan from "morgan";
import express from "express";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import indexRoutes from "./v1/routes/index.js";
import authRoutes from "./v1/routes/auth.routes.js";
import ingresosRoutes from "./v1/routes/ingresos.routes.js";
import lineasRoutes from "./v1/routes/lineas.routes.js";
import marcasRoutes from "./v1/routes/marcas.routes.js";
import productosRoutes from "./v1/routes/productos.routes.js";
import stockRoutes from "./v1/routes/stock.routes.js";
import ventasRoutes from "./v1/routes/ventas.routes.js";
import notFoundRoutes from "./v1/routes/notFound.routes.js";

const app = express();

/**
 * * swagger config
 */
// import swaggerOptionsFile from "./swagger.json" assert { type: "json" };
// import { readFileSync } from "fs";
// const swaggerOptionsFile = JSON.parse(readFileSync("./swagger.json"));
import { fileURLToPath } from "url";
import { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const swaggerOptionsFile = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API: Deportes S.A.",
      version: "1.0.0",
      description: "API simple para operaciones de inventario y ventas",
    },
    servers: [
      {
        url: "https://levelup-project2-backend.onrender.com",
      },
    ],
  },
  apis: [`${__dirname}/v1/routes/*.js`],
};
console.log(__dirname)
const specs = swaggerJSDoc(swaggerOptionsFile);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

/**
 * * app config
 */
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

/**
 * * routes
 */
app.use(indexRoutes);
app.use(authRoutes);
app.use(ingresosRoutes);
app.use(lineasRoutes);
app.use(marcasRoutes);
app.use(productosRoutes);
app.use(stockRoutes);
app.use(ventasRoutes);
app.use(notFoundRoutes);

export default app;
