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
   * * VENTAS: cantidad, producto
   */

  //* validar campo cantidad y producto de venta
  check("cantidad")
    .exists()
    .isInt()
    .withMessage("El campo cantidad debe ser un entero")
    .notEmpty()
    .withMessage("El campo cantidad no debe estar vacio"),
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
   * * Venta: cantidad, producto
   */

  check("cantidad")
    .isInt()
    .withMessage("El campo cantidad deber ser un entero")
    .notEmpty()
    .withMessage("El campo cantidad no debe estar vacio")
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
