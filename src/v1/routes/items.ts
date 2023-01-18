import { Router } from "express";
import { getItems } from "../../controllers/items";

const router = Router();

/**
 * * http://localhost:3000/api/v1/items
 */

/**
 * @openapi
 * /api/v1/items:
 *   get:
 *     tags:
 *       - items
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array 
 *                   items: 
 *                     type: object
 */
router.get("/api/v1/items", getItems);

export default router;
