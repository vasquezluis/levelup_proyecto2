import { Router } from "express";

const router = Router();

router.get("/", ({ headers: { host } }, res) => {
  const menu = {
    docs: `https://levelup-project2-backend.onrender.com/api-docs`,
    ingresos: `https://levelup-project2-backend.onrender.com/ingresos`,
    lineas: `https://levelup-project2-backend.onrender.com/lineas`,
    marcas: `https://levelup-project2-backend.onrender.com/marcas`,
    productos: `https://levelup-project2-backend.onrender.com/productos`,
    stock: `https://levelup-project2-backend.onrender.com/stock`,
    ventas: `https://levelup-project2-backend.onrender.com/ventas`,
  };

  res.json({ message: "API menu", menu });
});

export default router;
