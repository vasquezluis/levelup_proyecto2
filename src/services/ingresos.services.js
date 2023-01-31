import databaseIngresos from "../database/ingresos.js";
import databaseStock from "../database/stock.js";
import { excelGenerator } from "../utils/excelGenerator.js";

export const getEntriesService = () => {
  const entries = databaseIngresos;

  return entries;
};

export const getiEntryService = (id) => {
  const entry = databaseIngresos.find((item) => item.id === parseInt(id));

  return entry;
};

export const createEntryService = ({ producto, cantidad }) => {
  try {
    /**
     * ? lookin for product if in stock databse
     */

    const stockFound = databaseStock.find(
      (item) => item.producto == parseInt(producto)
    );

    if (stockFound) {
      const id = Math.max(...databaseIngresos.map((item) => item.id)) + 1;

      const dateObject = new Date(Date.now());
      const date = dateObject.getDate();
      const month = dateObject.getMonth() + 1;
      const year = dateObject.getFullYear();

      const newEntry = {
        id,
        producto: parseInt(producto),
        cantidad: parseInt(cantidad),
        fecha_registro: `${month}/${date}/${year}`,
      };

      /**
       * * creating a new record on ingresos database
       * ! increasing stock on stockFound based on product id
       */

      databaseIngresos.push(newEntry);
      stockFound.stock = stockFound.stock + parseInt(cantidad);

      return newEntry;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateEntryService = (id, { cantidad }) => {
  try {
    const entryFound = databaseIngresos.find(
      (item) => item.id === parseInt(id)
    );

    if (entryFound) {
      const stockFound = databaseStock.find(
        (item) => item.producto == entryFound.producto
      );

      /**
       * ? actualizar stock de producto dependiendo la cantidad
       * ! restar si la cantidad es menor al registro
       * * aumentar si la cantidad es mayor al registro
       */

      const baseQuantity = entryFound.cantidad;

      if (parseInt(cantidad) < baseQuantity) {
        stockFound.stock =
          stockFound.stock - (entryFound.cantidad - parseInt(cantidad));
        entryFound.cantidad = parseInt(cantidad);

        return entryFound;
      } else if (parseInt(cantidad) > baseQuantity) {
        stockFound.stock = stockFound.stock + (cantidad - baseQuantity);
        entryFound.cantidad = parseInt(cantidad);

        return entryFound;
      } else {
        return "Actualizacion de cantidad sin efecto";
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const generateReportService = (name, res) => {
  try {
    let db = databaseIngresos;

    excelGenerator(db, name, res);
  } catch (error) {
    console.log(error.message);
  }
};
