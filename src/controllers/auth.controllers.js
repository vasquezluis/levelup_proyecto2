import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { getUserService } from "../services/auth.services.js";

dotenv.config();
const secret = process.env.SECRET;

export const createToken = (req, res) => {
  const { user, password } = req.body;

  try {
    /**
     * * getting response from user services
     */

    const response = getUserService(user, password);

    if (response.error == "user") {
      res.status(404).json({ message: "User not found" });
    }
    if (response.error == "pass") {
      res.status(401).json({ message: "Incorrect password" });
    }

    /**
     * * utilizar jwt
     * ? primer parametro datos de usuario
     * ? segundo parametro es la palabra clave, debe ser secreta
     * ? el tercer parametro es el tiempo de expiracion
     * ? el cuarto parametro es un callback con la respuesta
     */

    const expiresTime = "5m";

    jwt.sign(
      { user: response },
      secret,
      { expiresIn: expiresTime },
      (err, token) => {
        res.json({
          message: "authData",
          token: token,
          expiration: `Expires ${expiresTime} from now.`,
          userData: {
            user: response.user,
            roles: response.roles,
            permissions: response.permissions,
          },
        });
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};
