import morgan from "morgan";
import express from "express";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

import indexRoutes from "./v1/routes/index.js";
// import ingresosRoutes from "./v1/routes/ingresos.routes.js";
// import inventarioRoutes from "./v1/routes/inventario.routes.js";
// import lineasRoutes from "./v1/routes/lineas.routes.js";
import marcasRoutes from "./v1/routes/marcas.routes.js";
// import ventasRoutes from "./v1/routes/ventas.routes.js";

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
// app.use(ingresosRoutes);
// app.use(inventarioRoutes);
// app.use(lineasRoutes);
app.use(marcasRoutes);
// app.use(ventasRoutes);

export default app;
