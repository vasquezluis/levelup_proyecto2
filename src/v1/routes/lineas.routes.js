import { Router } from "express";

import {
  createItem,
  deleteItem,
  getActiveItems,
  getItem,
  getItems,
  updateItem,
} from "../../controllers/lineas.controllers.js";
import {
  createValidation,
  paramsValidation,
  updateValidation,
} from "../../validators/lineas.validator.js";

const router = Router();

/**
 * * http://localhost:3000/lineas
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Linea:
 *      type: object
 *      required:
 *        - nombre
 *        - descripcion
 *      properties:
 *        id:
 *          type: integer
 *          description: Id auto-generado para lineas
 *        nombre:
 *          type: string
 *          description: El nombre de la linea
 *        activo:
 *          type: boolean
 *          description: El estado de la linea
 *        descripcion:
 *          type: string
 *          description: La descripcion de la linea
 *      example:
 *        id: 1
 *        nombre: Playera
 *        activo: true
 *        descripcion: Prenda de mangas cortas
 *  parameters:
 *    lineaId:
 *      in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: El id de la linea
 */

/**
 * @swagger
 * tags:
 *  name: Lineas
 *  description: API de lineas
 */

/**
 * @swagger
 * /lineas:
 *   get:
 *     summary: Retorna la lista de todas las lineas
 *     tags: [Lineas]
 *     responses:
 *       200:
 *        description: Lista de todas las lineas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Linea'
 */
router.get("/lineas", getItems);

/**
 * @swagger
 * /lineas/activos:
 *   get:
 *     summary: Retorna la lista de todas las lineas activas
 *     tags: [Lineas]
 *     responses:
 *       200:
 *        description: Lista de las lineas activas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Linea'
 */
router.get("/lineas/activos", getActiveItems);

/**
 * @swagger
 * /lineas/{id}:
 *  get:
 *    summary: Retorna una linea por el id
 *    tags: [Lineas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: El id de la linea
 *    responses:
 *      200:
 *        description: Información de la linea por el Id
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Linea'
 *      404:
 *        description: No se encontró la linea
 */
router.get("/lineas/:id", paramsValidation, getItem);

/**
 * @swagger
 * /lineas:
 *  post:
 *    summary: Crear una nueva linea
 *    tags: [Lineas]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Linea'
 *    responses:
 *      201:
 *        description: La linea ha sido creada correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Linea'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Linea'
 *      500:
 *        description: Ha ocurrido un error
 */
router.post("/lineas", createValidation, createItem);

/**
 * @swagger
 * /lineas/{id}:
 *  put:
 *    summary: Actualizar una linea por el id
 *    tags: [Lineas]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id de la linea
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Linea'
 *    responses:
 *      201:
 *        description: La linea ha sido actualizada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Linea'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Linea'
 *      404:
 *        description: La linea no ha sido encontrada
 *      500:
 *        description: Error en la actualización
 */
router.put("/lineas/:id", paramsValidation, updateValidation, updateItem);

/**
 * @swagger
 * /lineas/{id}:
 *  delete:
 *    summary: Eliminar una linea por el id
 *    tags: [Lineas]
 *    parameters:
 *      - $ref: '#/components/parameters/lineaId'
 *    responses:
 *      200:
 *        description: La linea ha sido eliminada
 *      404:
 *        description: La linea no ha sido encontrada
 *
 */
router.delete("/lineas/:id", paramsValidation, deleteItem);

export default router;
