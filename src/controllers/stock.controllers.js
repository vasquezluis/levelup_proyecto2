import createHttpError from "http-errors";
import { response } from "../common/response.js";
import {
  createStockService,
  deleteStockService,
  getActiveStocksService,
  getStockService,
  getStocksService,
  updateStockService,
} from "../services/stock.services.js";

export const getItems = (req, res) => {
  try {
    const result = getStocksService();

    response.success(res, 200, "Lista de stocks", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const getActiveItems = (req, res) => {
  try {
    const result = getActiveStocksService();

    response.success(res, 200, "Lista de stocks activos", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const getItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = getStockService(id);

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    } else {
      response.success(res, 200, `Datos de stock ${id}`, result);
    }
  } catch (error) {
    response.error(res, error);
  }
};

export const createItem = (req, res) => {
  try {
    const { stock, producto } = req.body;

    const result = createStockService({
      stock,
      producto,
    });

    /**
     * ! el id de producto puede ya existir en la BdD
     */
    if (result == "Conflict") {
      response.error(res, {
        statusCode: 409,
        message: `El producto ${producto} ya tiene stock registrado.`,
      });
    }

    response.success(res, 201, `Stock creado`, result);
  } catch (error) {
    response.error(res, error);
  }
};

export const updateItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { activo, stock, producto } = req.body;

    const result = updateStockService(id, {
      stock,
      activo,
      producto,
    });

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    } else {
      /**
       * ! el id de producto puede ya existir en la BdD
       */
      if (result == "Conflict") {
        response.error(res, {
          statusCode: 409,
          message: `El producto ${producto} ya tiene stock registrado.`,
        });
      } else {
        response.success(res, 201, `Stock ${id} actualizado`, result);
      }
    }
  } catch (error) {
    response.error(res, error);
  }
};

export const deleteItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = deleteStockService(id);

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    }

    response.success(res, 200, `Stock ${id} eliminado`, result);
  } catch (error) {
    response.error(res, error);
  }
};
