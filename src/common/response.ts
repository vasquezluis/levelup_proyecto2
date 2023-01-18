// standar response for controllers

import { Response } from "express";
import createHttpError from "http-errors";

export const response = {
  success: (
    res: Response,
    status: number = 200,
    message: string = "Ok",
    body = {}
  ) => {
    res.status(status).json({ message, body });
  },
  error: (res: Response, error = null) => {
    const { statusCode, message } = error
      ? error
      : new createHttpError.InternalServerError();
    res.status(statusCode).json({ message });
  },
};
