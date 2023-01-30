//* authorization with Bearer Token

import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const secret = process.env.SECRET;

export const verifyToken = (req, res, next) => {
  /**
   * ? Getting the Bearer token stored in headers
   */

  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader != "undefined") {
    //* only the <token>
    const bearerToken = bearerHeader.split(" ")[1];

    req.token = bearerToken;

    /**
     * ? verify token
     */
    try {
      jwt.verify(req.token, secret, (error, authData) => {
        if (error) {
          console.log(error.message);
          res.status(403).json({ error: error.message });
        } else {
          console.log(authData)
          next();
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  } else {
    res.sendStatus(403);
  }
};
