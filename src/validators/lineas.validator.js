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
   * * LINEA: nombre, descripcion
   */

  //* validar campo nombre y descripcion de lineas
  check("nombre")
    .exists()
    .isString()
    .withMessage("El campo nombre debe ser un string")
    .notEmpty()
    .withMessage("El campo nombre no debe estar vacio"),
  check("descripcion")
    .exists()
    .isString()
    .withMessage("El campo descripcion debe ser un string")
    .notEmpty()
    .withMessage("El campo descripcion no debe estar vacio"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const updateValidation = [
  /**
   * * LINEA: nombre, activo, descripcion
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
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
