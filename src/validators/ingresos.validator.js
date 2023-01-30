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
   * * Ingresos: cantidad, producto
   */

  //* validar campo cantidad y producto del ingreso
  check("producto")
    .exists()
    .isInt()
    .withMessage("El campo producto debe ser un entero")
    .notEmpty()
    .withMessage("El campo producto no debe estar vacio"),
  check("cantidad")
    .exists()
    .isInt()
    .withMessage("El campo cantidad debe ser un entero")
    .notEmpty()
    .withMessage("El campo cantidad no debe estar vacio"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

export const updateValidation = [
  /**
   * * Ingreso: cantidad
   */

  check("cantidad")
    .isInt()
    .withMessage("El campo cantidad deber ser un entero")
    .notEmpty()
    .withMessage("El campo cantidad no debe estar vacio"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
