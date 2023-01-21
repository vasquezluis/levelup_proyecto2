// standar response for controllers

import createHttpError from "http-errors";

export const response = {
  success: (res, status = 200, message = "Ok", body = {}) => {
    res.status(status).json({ message, body });
  },
  error: (res, error) => {
    const { statusCode, message } = error
      ? error
      : new createHttpError.InternalServerError();
    res.status(statusCode).json({ message });
  },
};
