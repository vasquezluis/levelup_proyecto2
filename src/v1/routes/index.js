import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  const menu = {
    items: `http://${req.headers.host}/api/v1/items`,
  };

  res.json({ message: "API menu", menu });
});

export default router;