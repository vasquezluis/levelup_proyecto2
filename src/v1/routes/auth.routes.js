import { Router } from "express";
import { createToken } from "../../controllers/auth.controllers.js";
import { loginValidation } from "../../validators/auth.validator.js";

const router = Router();

/**
 * * http://localhost:3000/login
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Auth:
 *      type: object
 *      required:
 *        - user
 *        - password
 *      properties:
 *        user:
 *          type: string
 *          description: El usuario para login
 *        password:
 *          type: string
 *          description: La contraseña para login
 *      example:
 *        user: "admin"
 *        password: 123456789
 *  parameters:
 *    loginId:
 *      in: path
 *      name: id
 *      schema:
 *        type: string
 *      required: true
 *      description: El id login
 */

/**
 * @swagger
 * tags:
 *  name: Auths
 *  description: Autenticación de usuarios
 */

/**
 * @swagger
 * /login:
 *  post:
 *    summary: Iniciar sesion para obtener token de acceso
 *    tags: [Auths]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Auth'
 *    responses:
 *      200:
 *        description: Login correcto
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Auth'
 *      400:
 *        description: Los datos del body no son correctos
 *        content:
 *          application/json:
 *            shcema:
 *              $ref: '#/components/schemas/Auth'
 *      401:
 *        description: Contraseña incorrecta
 *      404:
 *        description: Usuario no encontrado
 *      500:
 *        description: Ha ocurrido un error
 */
router.post("/login", loginValidation, createToken);

export default router;
