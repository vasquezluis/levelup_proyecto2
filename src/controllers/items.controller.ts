import { Request, Response } from "express";
import { response } from "../common/response";

export const getItem = (req: Request, res: Response) => {
  try {
    res.json("item");
  } catch (error) {
    response.error(res);
  }
};

export const getItems = (req: Request, res: Response) => {
  response.success(res, 200, "Lista de items", { items: [{ name: "luis" }] });
  try {
  } catch (error) {
    response.error(res);
  }
};

export const createItems = (req: Request, res: Response) => {
  try {
    res.json("item");
  } catch (error) {
    response.error(res);
  }
};

export const updateItems = (req: Request, res: Response) => {
  try {
    res.json("item");
  } catch (error) {
    response.error(res);
  }
};

export const deleteItems = (req: Request, res: Response) => {
  try {
    res.json("item");
  } catch (error) {
    response.error(res);
  }
};
