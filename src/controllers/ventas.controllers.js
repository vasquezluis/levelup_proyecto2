import createHttpError from "http-errors";
import { response } from "../common/response.js";
import {
  createSaleService,
  getSaleService,
  getSalesService,
  updateSaleService,
} from "../services/ventas.services.js";

export const getItems = (req, res) => {
  try {
    const result = getSalesService();

    response.success(res, 200, "Lista de ventas", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const getItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = getSaleService(id);

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    } else {
      response.success(res, 200, `Datos de venta ${id}`, result);
    }
  } catch (error) {
    response.error(res, error);
  }
};

export const createItem = (req, res) => {
  try {
    const { cantidad, producto } = req.body;

    const result = createSaleService({
      cantidad,
      producto,
    });

    if (!result) {
      response.error(
        res,
        new createHttpError.NotFound("Id de producto no encontrado")
      );
    } else {
      if (result.message == "Stock insuficiente") {
        response.error(res, {
          statusCode: 400,
          message: {
            error: `Stock insuficiente para realizar la venta`,
            message: `Stock disponible: ${result.stockDisponible}`,
          },
        });
      } else {
        response.success(res, 201, `Venta registrada`, result);
      }
    }
  } catch (error) {
    response.error(res, error);
  }
};

export const updateItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { cantidad } = req.body;

    const result = updateSaleService(id, {
      cantidad,
      producto,
    });

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    } else {
      if (result.message == "Stock insuficiente") {
        response.error(res, { statusCode: 400, message: result.error });
      } else {
        response.success(res, 201, `Venta ${id} actualizada`, result);
      }
    }
  } catch (error) {
    response.error(res, error);
  }
};
