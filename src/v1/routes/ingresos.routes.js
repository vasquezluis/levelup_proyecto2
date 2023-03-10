import { Router } from "express";

import {
  createItem,
  generateReport,
  getItem,
  getItems,
  updateItem,
} from "../../controllers/ingresos.controllers.js";
import {
  createValidation,
  paramsValidation,
  updateValidation,
} from "../../validators/ingresos.validator.js";

import { verifyToken } from "../../middlewares/verifyEntriesToken.middlewares.js";

const router = Router();

/**
 * * http://localhost:3000/ingresos
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Ingreso:
 *      type: object
 *      required:
 *        - producto
 *        - cantidad
 *      properties:
 *        id:
 *          type: integer
 *          description: Id auto-generado para ingresos
 *        producto:
 *          type: integer
 *          description: El id del producto
 *        cantidad:
 *          type:
 *          description: La cantidad de producto a registrar
 *        fecha_registro:
 *          type: date
 *          description: La fecha de registro
 *      example:
 *        id: 1
 *        producto: 1
 *        cantidad: 50
 *  securitySchemes:
 *    ingresosAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *      description: "Token de acceso tipo Bearer, ejemplo: 'abcde12345'"
 *  parameters:
 *    ingresoId:
 *      in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: El id del ingreso
 * security:
 *  - ingresosAuth: []
 */

/**
 * @swagger
 * tags:
 *  name: Ingresos
 *  description: API de ingresos
 */

/**
 * @swagger
 * /ingresos:
 *   get:
 *     summary: Retorna los registros de productos
 *     tags: [Ingresos]
 *     security:
 *      - ingresosAuth: []
 *     responses:
 *       200:
 *        description: Lista ingresos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Ingreso'
 *       403:
 *        description: Token de autorización inexistente, inválido o expirado
 */
router.get("/ingresos", verifyToken, getItems);

/**
 * @swagger
 * /ingresos/reporte:
 *   get:
 *     summary: Crear el reporte de los registros de productos en formato excel
 *     tags: [Ingresos]
 *     security:
 *      - ingresosAuth: []
 *     responses:
 *       200:
 *        description: Reporte de registros
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Ingreso'
 *       403:
 *        description: Token de autorización inexistente, inválido o expirado
 */
router.get("/ingresos/reporte", verifyToken, generateReport);

/**
 * @swagger
 * /ingresos/{id}:
 *  get:
 *    summary: Retorna un registro de productos por el id
 *    tags: [Ingresos]
 *    security:
 *      - ingresosAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: El id del registro
 *    responses:
 *      200:
 *        description: Información del registro
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Ingreso'
 *      403:
 *        description: Token de autorización inexistente, inválido o expirado
 *      404:
 *        description: No se encontró el registro
 */
router.get("/ingresos/:id", verifyToken, paramsValidation, getItem);

/**
 * @swagger
 * /ingresos:
 *  post:
 *    summary: Crear un nuevo registro de productos
 *    tags: [Ingresos]
 *    security:
 *      - ingresosAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Ingreso'
 *    responses:
 *      201:
 *        description: Producto registrado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Ingreso'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Ingreso'
 *      403:
 *        description: Token de autorización inexistente, inválido o expirado
 *      404:
 *        description: El producto no ha sido encontrado
 *      500:
 *        description: Ha ocurrido un error
 */
router.post("/ingresos", verifyToken, createValidation, createItem);

/**
 * @swagger
 * /ingresos/{id}:
 *  put:
 *    summary: Actualizar un registro de producto
 *    tags: [Ingresos]
 *    security:
 *      - ingresosAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del registro
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Ingreso'
 *    responses:
 *      201:
 *        description: El registro ha sido actualizado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Ingreso'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Linea'
 *      403:
 *        description: Token de autorización inexistente, inválido o expirado
 *      404:
 *        description: Registro de producto no encontrado
 *      500:
 *        description: Error en la actualización
 */
router.put(
  "/ingresos/:id",
  verifyToken,
  paramsValidation,
  updateValidation,
  updateItem
);

export default router;
