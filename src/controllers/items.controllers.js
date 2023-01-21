import { response } from "../common/response.js";
import { getItemsService } from "../services/items.service.js";

export const getItem = (req, res) => {
  try {
    res.json("item");
  } catch (error) {
    console.log(error);
    response.error(res, error);
  }
};

export const getItems = (req, res) => {
  try {
    const result = getItemsService();

    response.success(res, 200, "Lista de items", result);
  } catch (error) {
    response.error(res, error);
  }
};

export const createItems = (req, res) => {
  try {
    res.json("item");
  } catch (error) {
    response.error(res, error);
  }
};

export const updateItems = (req, res) => {
  try {
    res.json("item");
  } catch (error) {
    response.error(res, error);
  }
};

export const deleteItems = (req, res) => {
  try {
    res.json("item");
  } catch (error) {
    response.error(res, error);
  }
};
