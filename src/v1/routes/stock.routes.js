import { Router } from "express";

import {
  createItem,
  deleteItem,
  getActiveItems,
  getItem,
  getItems,
  updateItem,
} from "../../controllers/stock.controllers.js";
import {
  createValidation,
  paramsValidation,
  updateValidation,
} from "../../validators/stock.validator.js";

const router = Router();

/**
 * * http://localhost:3000/stock
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Stock:
 *      type: object
 *      required:
 *        - stock
 *        - producto
 *      properties:
 *        id:
 *          type: integer
 *          description: Id auto-generado para stock
 *        activo:
 *          type: boolean
 *          description: El estado del stock
 *        stock:
 *          type: integer
 *          description: La cantidad de producto disponible
 *        producto:
 *          type: integer
 *          description: El id del producto
 *      example:
 *        id: 1
 *        activo: true
 *        stock: 250
 *        producto: 2
 *  parameters:
 *    stockId:
 *      in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: El id del stock
 */

/**
 * @swagger
 * tags:
 *  name: Stocks
 *  description: API de stocks
 */

/**
 * @swagger
 * /stock:
 *   get:
 *     summary: Retorna la lista de todos los stocks
 *     tags: [Stocks]
 *     responses:
 *       200:
 *        description: Lista de todos los stocks
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Stock'
 */
router.get("/stock", getItems);

/**
 * @swagger
 * /stock/activos:
 *   get:
 *     summary: Retorna la lista de todos los stocks activos
 *     tags: [Stocks]
 *     responses:
 *       200:
 *        description: Lista de los stocks activos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Stock'
 */
router.get("/stock/activos", getActiveItems);

/**
 * @swagger
 * /stock/{id}:
 *  get:
 *    summary: Retorna un stock por el id
 *    tags: [Stocks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: El id del stock
 *    responses:
 *      200:
 *        description: Información del stock por el Id
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Stock'
 *      404:
 *        description: No se encontró el stock
 */
router.get("/stock/:id", paramsValidation, getItem);

/**
 * @swagger
 * /stock:
 *  post:
 *    summary: Crear un nuevo stock
 *    tags: [Stocks]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Stock'
 *    responses:
 *      201:
 *        description: El stock ha sido creado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Stock'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Stock'
 *      409:
 *        description: El producto ya está registrado.
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Stock'
 *      500:
 *        description: Ha ocurrido un error
 */
router.post("/stock", createValidation, createItem);

/**
 * @swagger
 * /stock/{id}:
 *  put:
 *    summary: Actualizar un stock por el id
 *    tags: [Stocks]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del stock
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Stock'
 *    responses:
 *      201:
 *        description: El stock ha sido actualizado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Stock'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Stock'
 *      409:
 *        description: El producto ya está registrado.
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Stock'
 *      404:
 *        description: El stock no ha sido encontrado
 *      500:
 *        description: Error en la actualización
 */
router.put("/stock/:id", paramsValidation, updateValidation, updateItem);

/**
 * @swagger
 * /stock/{id}:
 *  delete:
 *    summary: Eliminar un stock por el id
 *    tags: [Stocks]
 *    parameters:
 *      - $ref: '#/components/parameters/stockId'
 *    responses:
 *      200:
 *        description: El stock ha sido eliminado
 *      404:
 *        description: El stock no ha sido encontrado
 *
 */
router.delete("/stock/:id", paramsValidation, deleteItem);

export default router;
