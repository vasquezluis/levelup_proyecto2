import { Router } from "express";

import {
  createItems,
  deleteItems,
  getItem,
  getItems,
  updateItems,
} from "../../controllers/items.controllers.js";

const router = Router();

/**
 * * http://localhost:3000/api/v1/items
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Item:
 *      type: object
 *      required:
 *        - name
 *        - description
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of the task
 *        name:
 *          type: string
 *          description: The task name
 *        description:
 *          type: string
 *          description: the task description
 *      example:
 *        id: 4f14e7e-c974-4047-9667-cf2951d7e6d1
 *        name: my first task
 *        description: I have to do something
 *  parameters:
 *    itemId:
 *      in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: the task id
 */

/**
 * @swagger
 * tags:
 *  name: Items
 *  description: the item api
 */

/**
 * @swagger
 * /api/v1/items:
 *   get:
 *     summary: Returns a list of the tasks
 *     tags: [Items]
 *     responses:
 *       200:
 *        description: the list of tasks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Item'
 */
router.get("/api/v1/items", getItems);

/**
 * @swagger
 * /items/{id}:
 *  get:
 *    summary: Get a task by Id
 *    tags: [Items]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: The task id
 *    responses:
 *      200:
 *        description: the task description by Id
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Item'
 *      404:
 *        description: the task does not found
 */
router.get("/api/v1/items/:id", getItem);

/**
 * @swagger
 * /items:
 *  post:
 *    summary: create a new task
 *    tags: [Items]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Item'
 *    responses:
 *      200:
 *        description: the taks was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Item'
 *      500:
 *        description: Some server error
 */
router.post("/api/v1/items", createItems);

/**
 * @swagger
 * /items/{id}:
 *  put:
 *    summary: update a task by the id
 *    tags: [Items]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: the task id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Item'
 *    responses:
 *      200:
 *        description: the taks was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Item'
 *      404:
 *        description: the task was not found
 *      500:
 *        description: some server error
 */
router.put("/api/v1/items/:id", updateItems);

/**
 * @swagger
 * /items/{id}:
 *  delete:
 *    summary: delete a task by id
 *    tags: [Items]
 *    parameters:
 *      - $ref: '#/components/parameters/Item'
 *    responses:
 *      200:
 *        description: the task was deleted
 *      404:
 *        description: the task was not found
 *
 */
router.delete("/api/v1/items/:id", deleteItems);

export default router;
