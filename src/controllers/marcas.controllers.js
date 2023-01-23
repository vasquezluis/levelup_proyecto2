import createHttpError from "http-errors";
import { response } from "../common/response.js";

import {
  createBrandService,
  deleteBrandService,
  getActiveBrandsService,
  getBrandService,
  getBrandsService,
  updateBrandService,
} from "../services/marcas.services.js";

export const getItems = (req, res) => {
  try {
    const result = getBrandsService();

    response.success(res, 200, "Lista de marcas", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const getActiveItems = (req, res) => {
  try {
    const result = getActiveBrandsService();

    response.success(res, 200, "Lista de marcas activas", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const getItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = getBrandService(id);

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    }

    response.success(res, 200, `Datos de marca ${id}`, result);
  } catch (error) {
    response.error(res, error);
  }
};

export const createItem = (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    const result = createBrandService({ nombre, descripcion });

    response.success(res, 201, `Marca creada`, result);
  } catch (error) {
    response.error(res, error);
  }
};

export const updateItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { nombre, activo, descripcion } = req.body;

    const result = updateBrandService(id, { nombre, activo, descripcion });

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    }

    response.success(res, 201, `Marca ${id} actualizada`, result);
  } catch (error) {
    response.error(res, error);
  }
};

export const deleteItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = deleteBrandService(id);

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    }

    response.success(res, 200, `Marca ${id} eliminada`, result);
  } catch (error) {
    response.error(res, error);
  }
};
