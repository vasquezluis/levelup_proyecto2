import path from "path";
import fs from "fs";
import { Request, Response } from "express";
import { response } from "../common/response";

// const archivo = path.resolve("../config", "data.json");
// fs.readFile(archivo, "utf-8", (error, data) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(JSON.parse(data));
//   }
// });

const items: { id: number; name: string; age: number }[] = [
  {
    id: 0,
    name: "Luis Vasquez",
    age: 23,
  },
  {
    id: 1,
    name: "Antonio Tiu",
    age: 24,
  },
  {
    id: 2,
    name: "Jorge Hernandez",
    age: 25,
  },
  {
    id: 3,
    name: "Hugo Garcia",
    age: 26,
  },
];

export const getItems = (req: Request, res: Response) => {
  try {
    res.json(items);
  } catch (error) {
    response.error(res);
  }
};
