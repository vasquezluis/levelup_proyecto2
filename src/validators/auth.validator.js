import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

export const loginValidation = [
  /**
   * * login: login, password
   */

  //* validate user and password fields
  check("user")
    .exists()
    .isString()
    .withMessage("El campo ususario debe ser un string")
    .notEmpty()
    .withMessage("El campo producto no debe estar vacio"),
  check("password")
    .exists()
    .notEmpty()
    .withMessage("El campo cantidad no debe estar vacio"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
