import createHttpError from "http-errors";
import { response } from "../common/response.js";
import {
  createEntryService,
  generateReportService,
  getEntriesService,
  getiEntryService,
  updateEntryService,
} from "../services/ingresos.services.js";

export const getItems = (req, res) => {
  try {
    const result = getEntriesService();

    response.success(res, 200, "Lista de ingresos de productos", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const getItem = (req, res) => {
  try {
    const {
      params: { id },
    } = req;

    const result = getiEntryService(id);

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    } else {
      response.success(res, 200, `Registro ${id} de productos`, result);
    }
  } catch (error) {
    response.error(res, error);
  }
};

export const createItem = (req, res) => {
  try {
    const { producto, cantidad } = req.body;

    const result = createEntryService({ producto, cantidad });

    if (result) {
      response.success(res, 201, `Ingreso registrado`, result);
    } else {
      response.error(
        res,
        new createHttpError.NotFound(`Producto ${producto} no encontrado`)
      );
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

    const result = updateEntryService(id, { cantidad });

    if (!result) {
      response.error(res, new createHttpError.NotFound());
    } else {
      response.success(res, 201, `Ingreso ${id} actualizado`, result);
    }
  } catch (error) {
    response.error(res, error);
  }
};

export const generateReport = async (req, res) => {
  try {
    generateReportService("Reporte de ingresos de productos", res);
  } catch (error) {
    response.error(res, error);
  }
};
