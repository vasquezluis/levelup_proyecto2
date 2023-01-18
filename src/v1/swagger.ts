import { Request, Response } from "express";
import { Express } from "express-serve-static-core";
import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUI from "swagger-ui-express";

// info of API

const option = {
  definition: {
    openapi: "3.0.0",
    info: { title: "items API", version: "1.0.0" },
  },
  apis: ["src/v1/routes/items.ts"],
};

// Docs in json fromat
const swaggerSpec = swaggerJSDoc(option);

// setup docs
export const swaggerDocs = (app: Express, port: string | undefined) => {
  app.use("/api/v1/docs", SwaggerUI.serve, SwaggerUI.setup(swaggerSpec));
  app.get("api/v1/docs.json", (req: Request, res: Response) => {
    res.setHeader("Content-type", "application/json");
    res.send(swaggerSpec);
  });
  console.log(
    `version 1 docs are available at http://localhost:${port}/api/v1/docs`
  );
};
