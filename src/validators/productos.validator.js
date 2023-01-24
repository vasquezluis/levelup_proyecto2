import { check, param } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

export const paramsValidation = [
  /**
   * * PARAMS: id (int)
   */

  param("id")
    .exists()
    .isNumeric()
    .withMessage("El id debe ser un tipo de dato numerico"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const createValidation = [
  /**
   * * PRODUCTO: nombre, descripcion, precio, marca, linea
   */

  //* validar de producto
  check("nombre")
    .exists()
    .isString()
    .withMessage("El nombre debe ser un string")
    .notEmpty()
    .withMessage("El campo nombre no debe estar vacio"),
  check("descripcion")
    .exists()
    .isString()
    .withMessage("El campo descripcion debe ser un string")
    .notEmpty()
    .withMessage("El campo descripcion no debe estar vacio"),
  check("precio")
    .exists()
    .notEmpty()
    .withMessage("El campo precio no debe estar vacio")
    .isNumeric()
    .withMessage("El precio debe ser de tipo numerico")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error("El precio no debe ser negativo");
      }
      return true;
    }),
  check("marca")
    .exists()
    .isInt()
    .withMessage("El id de la marca debe ser de tipo numerico entero")
    .notEmpty()
    .withMessage("El campo id de marca no debe estar vacio"),
  check("linea")
    .exists()
    .isInt()
    .withMessage("El id del precio debe ser de tipo numerico entero")
    .notEmpty()
    .withMessage("El campo id de precio no debe estar vacio"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const updateValidation = [
  /**
   * * PRODUCTO: nombre, activo, descripcion, precio, marca, linea
   */

  check("nombre")
    .isString()
    .withMessage("El campo nombre deber ser un string")
    .notEmpty()
    .withMessage("El campo nombre no debe estar vacio")
    .optional(),
  check("activo")
    .isBoolean()
    .withMessage("El campo activo debe ser un booleano")
    .notEmpty()
    .withMessage("El campo activo no debe estar vacio")
    .optional(),
  check("descripcion")
    .isString()
    .withMessage("El campo descripcion debe ser un string")
    .notEmpty()
    .withMessage("El campo descripcion no debe estar vacio")
    .optional(),
  check("precio")
    .exists()
    .notEmpty()
    .withMessage("El campo precio no debe estar vacio")
    .isNumeric()
    .withMessage("El precio debe ser de tipo numerico")
    .custom((value, { req }) => {
      if (value < 0) {
        throw new Error("El precio no debe ser negativo");
      }
      return true;
    })
    .optional(),
  check("marca")
    .exists()
    .notEmpty()
    .withMessage("El campo id de marca no debe estar vacio")
    .isInt()
    .withMessage("El id de la marca debe ser de tipo numerico")
    .optional(),
  check("linea")
    .exists()
    .notEmpty()
    .withMessage("El campo id de precio no debe estar vacio")
    .isInt()
    .withMessage("El id del precio debe ser de tipo numerico")
    .optional(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
