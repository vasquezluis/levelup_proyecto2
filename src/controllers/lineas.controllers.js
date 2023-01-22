import { response } from "../common/response.js";

import {
  createLineService,
  deleteLineService,
  getActiveLinesService,
  getLineService,
  getLinesService,
  updateLineService,
} from "../services/lineas.services.js";

export const getItems = (req, res) => {
  try {
    const result = getLinesService();

    response.success(res, 200, "Lista de Lineas", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const getActiveItems = (req, res) => {
  try {
    const result = getActiveLinesService();

    response.success(res, 200, "Lista de lineas activas", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const getItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = getLineService(id);

    response.success(res, 200, `Datos de linea ${id}`, result);
  } catch (error) {
    response.error(res, error);
  }
};

export const createItem = (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    const result = createLineService({ nombre, descripcion });

    response.success(res, 201, `Linea creada`, result);
  } catch (error) {
    response.error(res, error);
  }
};

export const updateItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const { nombre, descripcion } = req.body;

    const result = updateLineService(id, { nombre, descripcion });

    response.success(res, 201, `Linea ${id} actualizada`, result);
  } catch (error) {
    response.error(res, error);
  }
};

export const deleteItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = deleteLineService(id);

    response.success(res, 200, `Linea ${id} eliminada`, result);
  } catch (error) {
    response.error(res, error);
  }
};
