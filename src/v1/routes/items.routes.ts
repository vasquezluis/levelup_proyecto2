import { Router } from "express";
import {
  createItems,
  deleteItems,
  getItem,
  getItems,
  updateItems,
} from "../../controllers/items.controller";

const router = Router();

/**
 * * http://localhost:3000/api/v1/items
 */

router.get("/api/v1/items/:id", getItem);
router.get("/api/v1/items", getItems);
router.get("/api/v1/items", createItems);
router.get("/api/v1/items/:id", updateItems);
router.get("/api/v1/items/:id", deleteItems);

export default router;
