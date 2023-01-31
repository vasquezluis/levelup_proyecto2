import { Router } from "express";

import {
  createItem,
  generateReport,
  getItem,
  getItems,
  updateItem,
} from "../../controllers/ventas.controllers.js";
import {
  createValidation,
  paramsValidation,
  updateValidation,
} from "../../validators/ventas.validator.js";

import { verifyToken } from "../../middlewares/verifySalesToken.middlewares.js";

const router = Router();

/**
 * * http://localhost:3000/ventas
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Venta:
 *      type: object
 *      required:
 *        - cantidad
 *        - producto
 *      properties:
 *        id:
 *          type: integer
 *          description: Id auto-generado para venta
 *        cantidad:
 *          type: integer
 *          description: La cantidad de producto para la venta
 *        subtotal:
 *          type: integer
 *          description: El subtotal segun la cantidad de producto
 *        montoTotal:
 *          type: integer
 *          description: El monto total de la venta
 *        producto:
 *          type: integer
 *          description: El id del producto a vender
 *        fecha_registro:
 *          type: string
 *          description: La fecha de registro de la venta
 *      example:
 *        id: 1
 *        cantidad: 2
 *        producto: 1
 *  securitySchemes:
 *    ventasAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *      description: "Token de acceso tipo Bearer, ejemplo: 'abcde12345'"
 *  parameters:
 *    ventaId:
 *      in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: El id de la venta
 */

/**
 * @swagger
 * tags:
 *  name: Ventas
 *  description: API de ventas
 */

/**
 * @swagger
 * /ventas:
 *   get:
 *     summary: Retorna la lista de todas las ventas
 *     tags: [Ventas]
 *     security:
 *       - ventasAuth: []
 *     responses:
 *       200:
 *        description: Lista de todas las ventas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Venta'
 *       403:
 *        description: Token de autorización inexistente, inválido o expirado
 */
router.get("/ventas", verifyToken, getItems);

/**
 * @swagger
 * /ventas/reporte:
 *   get:
 *     summary: Crear el reporte de ventas en formato excel
 *     tags: [Ventas]
 *     security:
 *       - ventasAuth: []
 *     responses:
 *       200:
 *        description: Reporte de ventas
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Venta'
 *       403:
 *        description: Token de autorización inexistente, inválido o expirado
 */
router.get("/ventas/reporte", verifyToken, generateReport);

/**
 * @swagger
 * /ventas/{id}:
 *  get:
 *    summary: Retorna una venta por el id
 *    tags: [Ventas]
 *    security:
 *      - ventasAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: El id de la venta
 *    responses:
 *      200:
 *        description: Información de la venta por el Id
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Venta'
 *      403:
 *        description: Token de autorización inexistente, inválido o expirado
 *      404:
 *        description: No se encontró la venta
 */
router.get("/ventas/:id", verifyToken, paramsValidation, getItem);

/**
 * @swagger
 * /ventas:
 *  post:
 *    summary: Registra una nueva venta
 *    tags: [Ventas]
 *    security:
 *      - ventasAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Venta'
 *    responses:
 *      201:
 *        description: La venta ha sido registrada correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Venta'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Venta'
 *      403:
 *        description: Token de autorización inexistente, inválido o expirado
 *      404:
 *        description: Id de producto no encontrado
 *      500:
 *        description: Ha ocurrido un error
 */
router.post("/ventas", verifyToken, createValidation, createItem);

/**
 * @swagger
 * /ventas/{id}:
 *  put:
 *    summary: Actualizar una venta por el id
 *    tags: [Ventas]
 *    security:
 *      - ventasAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id de la venta
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Venta'
 *    responses:
 *      201:
 *        description: la venta ha sido actualizada
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Venta'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Venta'
 *      403:
 *        description: Token de autorización inexistente, inválido o expirado
 *      404:
 *        description: La venta no ha sido encontrada
 *      500:
 *        description: Error en la actualización
 */
router.put("/ventas/:id", verifyToken, updateValidation, updateItem);

export default router;
