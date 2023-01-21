import { Router } from "express";

const router = Router();

router.get("/", ({ headers: { host } }, res) => {
  const menu = {
    docs: `http://${host}/api-docs`,
    marcas: `http://${host}/marcas`,
  };

  res.json({ message: "API menu", menu });
});

export default router;
