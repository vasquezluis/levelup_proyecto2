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

/**
 * @openapi
 * components:
 *   schemas:
 *     items:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 61dbae02-c147-4e28-863c-db7bd402b2d6
 *         name:
 *           type: string
 *           example: Tommy V
 *         mode:
 *           type: string
 *           example: For Time
 *         equipment:
 *           type: array
 *           items:
 *             type: string
 *           example: ["barbell", "rope"]
 *         exercises:
 *           type: array
 *           items:
 *             type: string
 *           example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         trainerTips:
 *           type: array
 *           items:
 *             type: string
 *           example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
 */

export const getItems = (req: Request, res: Response) => {
  try {
    res.json(items);
  } catch (error) {
    response.error(res);
  }
};
