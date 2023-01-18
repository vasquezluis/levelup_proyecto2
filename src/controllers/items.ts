import path from "path";
import fs from "fs";
import { Request, Response } from "express";

const archivo = path.resolve("../config", "data.json");
fs.readFile(archivo, "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(data));
  }
});

export const getItems = (req: Request, res: Response) => {
  try {
    res.json("hola");
  } catch (error) {
    res.status(500).json({ message: "error" });
  }
};
