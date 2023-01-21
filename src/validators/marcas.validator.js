import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

export const createValidation = [
  /**
   * * MARCA: nombre, descripcion
   */

  //* validar campo nombre y descripcion de marcas
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
    .withMessage("El campo descripcion no debe estar vacia"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
