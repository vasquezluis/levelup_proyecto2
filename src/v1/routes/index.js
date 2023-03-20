import { Router } from "express";

const router = Router();

router.get("/", ({ headers: { host } }, res) => {
  const menu = {
    docs: `https://${host}/api-docs`,
    ingresos: `https://${host}/ingresos`,
    lineas: `https://${host}/lineas`,
    marcas: `https://levelup-project2-backend.onrender.com/marcas`,
    productos: `https://levelup-project2-backend.onrender.com/productos`,
    stock: `https://levelup-project2-backend.onrender.com/stock`,
    ventas: `https://levelup-project2-backend.onrender.com/ventas`,
  };

  res.json({ message: "API menu", menu });
});

export default router;
