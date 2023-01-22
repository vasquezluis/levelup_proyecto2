import { Router } from "express";

const router = Router();

router.get("/", ({ headers: { host } }, res) => {
  const menu = {
    docs: `http://${host}/api-docs`,
    lineas: `http://${host}/lineas`,
    marcas: `http://${host}/marcas`,
  };

  res.json({ message: "API menu", menu });
});

export default router;
