import createHttpError from "http-errors";
import { response } from "../common/response.js";
import {
  createProductService,
  deleteProductService,
  getActiveProductsService,
  getProductService,
  getProductsService,
  updateProductService,
} from "../services/productos.services.js";

export const getItems = (req, res) => {
  try {
    const result = getProductsService();

    response.success(res, 200, "Lista de productos", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const getActiveItems = (req, res) => {
  try {
    const result = getActiveProductsService();

    response.success(res, 200, "Lista de productos activos", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const getItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = getProductService(id);

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    }

    response.success(res, 200, `Datos de producto ${id}`, result);
  } catch (error) {
    response.error(res, error);
  }
};

export const createItem = (req, res) => {
  try {
    const { nombre, descripcion, precio, marca, linea } = req.body;

    const result = createProductService({
      nombre,
      descripcion,
      precio,
      marca,
      linea,
    });

    response.success(res, 201, `Producto creado`, result);
  } catch (error) {
    response.error(res, error);
  }
};

export const updateItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { nombre, activo, descripcion, precio, marca, linea } = req.body;

    const result = updateProductService(id, {
      nombre,
      activo,
      descripcion,
      precio,
      marca,
      linea,
    });

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    }

    response.success(res, 201, `Producto ${id} actualizado`, result);
  } catch (error) {
    response.error(res, error);
  }
};

export const deleteItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = deleteProductService(id);

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    }

    response.success(res, 200, `Producto ${id} eliminado`, result);
  } catch (error) {
    response.error(res, error);
  }
};
