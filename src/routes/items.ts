import { Router } from "express";
import { getItems } from "../controllers/items";

const router = Router();

/**
 * * http://localhost:3000/items
 */

router.get("/", getItems);

export { router };
