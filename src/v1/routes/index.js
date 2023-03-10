import { Router } from "express";

const router = Router();

router.get("/", ({ headers: { host } }, res) => {
  const menu = {
    docs: `http://${host}/api-docs`,
    ingresos: `http://${host}/ingresos`,
    lineas: `http://${host}/lineas`,
    marcas: `http://${host}/marcas`,
    productos: `http://${host}/productos`,
    stock: `http://${host}/stock`,
    ventas: `http://${host}/ventas`,
  };

  res.json({ message: "API menu", menu });
});

export default router;
