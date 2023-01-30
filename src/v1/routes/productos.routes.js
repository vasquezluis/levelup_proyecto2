import { Router } from "express";
import {
  getItems,
  getActiveItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} from "../../controllers/productos.controllers.js";
import {
  paramsValidation,
  createValidation,
  updateValidation,
} from "../../validators/productos.validator.js";

import { verifyToken } from "../../middlewares/veryfyToken.middleware.js";

const router = Router();

/**
 * * http://localhost:3000/productos
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Producto:
 *      type: object
 *      required:
 *        - nombre
 *        - descripcion
 *        - precio
 *        - marca
 *        - linea
 *      properties:
 *        id:
 *          type: integer
 *          description: Id auto-generado para producto
 *        nombre:
 *          type: string
 *          description: El nombre del producto
 *        activo:
 *          type: boolean
 *          description: El estado del producto
 *        descripcion:
 *          type: string
 *          description: La descripcion del producto
 *        precio:
 *          type: number
 *          description: El precio del producto
 *        marca:
 *          type: integer
 *          description: El id de la marca a la que pertenece el producto
 *        linea:
 *          type: integer
 *          description: El id de la linea a la que pertenece el producto
 *      example:
 *        id: 1
 *        nombre: Playera Eternal
 *        activo: true
 *        descripcion: Playera negra manga corta, estampado portada de comic, cuello redondo.
 *        precio: 300.50
 *        marca: 1
 *        linea: 1
 *  securitySchemes:
 *    productosAuth:
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *      description: "Token de acceso tipo Bearer, ejemplo: 'abcde12345'"
 *  parameters:
 *    productoId:
 *      in: path
 *      name: id
 *      schema:
 *        type: integer
 *      required: true
 *      description: El id del producto
 * security:
 *  - productosAuth: []
 */

/**
 * @swagger
 * tags:
 *  name: Productos
 *  description: API de productos
 */

/**
 * @swagger
 * /productos:
 *   get:
 *     summary: Retorna la lista de todos los productos
 *     tags: [Productos]
 *     security:
 *      - productosAuth: []
 *     responses:
 *       200:
 *        description: Lista de todos los productos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Producto'
 *       403:
 *        description: Token de autorización inexistente, inválido o expirado
 */
router.get("/productos", verifyToken, getItems);

/**
 * @swagger
 * /productos/activos:
 *   get:
 *     summary: Retorna la lista de todos los productos activos
 *     tags: [Productos]
 *     security:
 *       - productosAuth: []
 *     responses:
 *       200:
 *        description: Lista de los productos activos
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *               $ref: '#/components/schemas/Producto'
 *       403:
 *        description: Token de autorización inexistente, inválido o expirado
 */
router.get("/productos/activos", verifyToken, getActiveItems);

/**
 * @swagger
 * /productos/{id}:
 *  get:
 *    summary: Retorna un producto por el id
 *    tags: [Productos]
 *    security:
 *      - productosAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *          required: true
 *          description: El id del producto
 *    responses:
 *      200:
 *        description: Información del producto por el Id
 *        contens:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Producto'
 *      403:
 *        description: Token de autorización inexistente, inválido o expirado
 *      404:
 *        description: No se encontró el producto
 */
router.get("/productos/:id", verifyToken, paramsValidation, getItem);

/**
 * @swagger
 * /productos:
 *  post:
 *    summary: Crear un nuevo producto
 *    tags: [Productos]
 *    security:
 *      - productosAuth: []
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Producto'
 *    responses:
 *      201:
 *        description: El producto ha sido creado correctamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Producto'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Producto'
 *      403:
 *        description: Token de autorización inexistente, inválido o expirado
 *      500:
 *        description: Ha ocurrido un error
 */
router.post("/productos", verifyToken, createValidation, createItem);

/**
 * @swagger
 * /productos/{id}:
 *  put:
 *    summary: Actualizar un producto por el id
 *    tags: [Productos]
 *    security:
 *      - productosAuth: []
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: Id del producto
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Producto'
 *    responses:
 *      201:
 *        description: El producto ha sido actualizado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Producto'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Producto'
 *      403:
 *        description: Token de autorización inexistente, inválido o expirado
 *      404:
 *        description: El producto no ha sido encontrado
 *      500:
 *        description: Error en la actualización
 */
router.put(
  "/productos/:id",
  verifyToken,
  paramsValidation,
  updateValidation,
  updateItem
);

/**
 * @swagger
 * /productos/{id}:
 *  delete:
 *    summary: Eliminar un producto por el id
 *    tags: [Productos]
 *    security:
 *      - productosAuth: []
 *    parameters:
 *      - $ref: '#/components/parameters/productoId'
 *    responses:
 *      200:
 *        description: El producto ha sido eliminado
 *      403:
 *        description: Token de autorización inexistente, inválido o expirado
 *      404:
 *        description: El producto no ha sido encontrado
 *
 */
router.delete("/productos/:id", verifyToken, paramsValidation, deleteItem);

export default router;
