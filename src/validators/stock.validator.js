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
   * * STOCK: stock, producto
   */

  //* validar campo stock y producto de stock
  check("stock")
    .exists()
    .isInt()
    .withMessage("El campo stock debe ser un entero")
    .notEmpty()
    .withMessage("El campo stock no debe estar vacio"),
  check("producto")
    .exists()
    .isInt()
    .withMessage("El campo producto debe ser un entero")
    .notEmpty()
    .withMessage("El campo producto no debe estar vacio"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const updateValidation = [
  /**
   * * STOCK: stock, activo, producto
   */

  check("stock")
    .isInt()
    .withMessage("El campo stock deber ser un entero")
    .notEmpty()
    .withMessage("El campo stock no debe estar vacio")
    .optional(),
  check("activo")
    .isBoolean()
    .withMessage("El campo activo debe ser un booleano")
    .notEmpty()
    .withMessage("El campo activo no debe estar vacio")
    .optional(),
  check("producto")
    .isInt()
    .withMessage("El campo producto debe ser un entero")
    .notEmpty()
    .withMessage("El campo producto no debe estar vacio")
    .optional(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
