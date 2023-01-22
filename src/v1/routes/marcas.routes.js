import { Router } from "express";

import {
  createItem,
  deleteItem,
  getActiveItems,
  getItem,
  getItems,
  updateItem,
} from "../../controllers/marcas.controllers.js";
import { createValidation } from "../../validators/marcas.validator.js";

const router = Router();

/**
 * * http://localhost:3000/marcas
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Marca:
 *      type: object
 *      required:
 *        - nombre
 *        - descripcion
 *      properties:
 *        id:
 *          type: string
 *          description: Id auto-generado para marcas
 *        nombre:
 *          type: string
 *          description: El nombre de la marca
 *        descripcion:
 *          type: string
 *          description: La descripcion de la marca
 *      example:
 *        id: 1
 *        nombre: Adidas
 *        descripcion: Compañia multinacional alemana
 *  parameters:
 *    marcaId:
 *      in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: El id de la marca
 */

/**
 * @swagger
 * tags:
 *  name: Marcas
 *  description: API de marcas
 */

/**
 * @swagger
 * /marcas:
 *   get:
 *     summary: Retorna la lista de todas las marcas
 *     tags: [Marcas]
 *     responses:
 *       200:
 *        description: Lista de todas las marcas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Marca'
 */
router.get("/marcas", getItems);

/**
 * @swagger
 * /marcas/activos:
 *   get:
 *     summary: Retorna la lista de todas las marcas activas
 *     tags: [Marcas]
 *     responses:
 *       200:
 *        description: Lista de las marcas activas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Marca'
 */
router.get("/marcas/activos", getActiveItems);

/**
 * @swagger
 * /marcas/{id}:
 *  get:
 *    summary: Retorna una marca por el id
 *    tags: [Marcas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *          required: true
 *          description: El id de la marca
 *    responses:
 *      200:
 *        description: Información de la marca por el Id
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Marca'
 *      404:
 *        description: No se encontró la marca
 */
router.get("/marcas/:id", getItem);

/**
 * @swagger
 * /marcas:
 *  post:
 *    summary: Crear una nueva marca
 *    tags: [Marcas]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Marca'
 *    responses:
 *      201:
 *        description: La marca ha sido creada correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Marca'
 *      500:
 *        description: Ha ocurrido un error
 */
router.post("/marcas", createValidation, createItem);

/**
 * @swagger
 * /marcas/{id}:
 *  put:
 *    summary: Actualizar una marca por el id
 *    tags: [Marcas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Id de la marca
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Marca'
 *    responses:
 *      201:
 *        description: La marca ha sido actualizada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Marca'
 *      404:
 *        description: La marca no ha sido encontrada
 *      500:
 *        description: Error en la actualización
 */
router.put("/marcas/:id", updateItem);

/**
 * @swagger
 * /marcas/{id}:
 *  delete:
 *    summary: Eliminar una marca por el id
 *    tags: [Marcas]
 *    parameters:
 *      - $ref: '#/components/parameters/marcaId'
 *    responses:
 *      200:
 *        description: La marca ha sido eliminada
 *      404:
 *        description: La marca no ha sido encontrada
 *
 */
router.delete("/marcas/:id", deleteItem);

export default router;
