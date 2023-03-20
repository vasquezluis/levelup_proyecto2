import databaseVentas from "../database/ventas.js";
import databaseProducto from "../database/productos.js";
import databaseStock from "../database/stock.js";
import { excelGenerator } from "../utils/excelGenerator.js";

export const getSalesService = () => {
  const sales = databaseVentas;

  return sales;
};

export const getSaleService = (id) => {
  const sale = databaseVentas.find((item) => item.id === parseInt(id));

  return sale;
};

export const createSaleService = ({ cantidad, producto }) => {
  try {
    const stockFound = databaseStock.find(
      (item) => item.producto == parseInt(producto)
    );

    if (stockFound) {
      if (stockFound.stock < parseInt(cantidad)) {
        let result = {
          message: "Stock insuficiente",
          stockDisponible: stockFound.stock,
        };
        return result;
      } else {
        /**
         * * No hay ningun problema y se puede registrar la venta
         * ! se descuenta stock del stock encontrado
         */

        const productoFound = databaseProducto.find(
          (item) => item.id == parseInt(producto)
        );

        const subtotal = productoFound.precio;
        const montoTotal = subtotal * parseInt(cantidad);

        stockFound.stock = stockFound.stock - parseInt(cantidad);

        const id = Math.max(...databaseVentas.map((item) => item.id)) + 1;

        const dateObject = new Date(Date.now());
        const date = dateObject.getDate();
        const month = dateObject.getMonth() + 1;
        const year = dateObject.getFullYear();

        const newSale = {
          id,
          cantidad: parseInt(cantidad),
          subtotal,
          montoTotal,
          producto: parseInt(producto),
          fecha_registro: `${month}/${date}/${year}`,
        };

        databaseVentas.push(newSale);

        return newSale;
      }
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateSaleService = (id, cantidad) => {
  try {
    const saleFound = databaseVentas.find((item) => item.id === parseInt(id));

    if (saleFound) {
      const stockFound = databaseStock.find(
        (item) => item.id == saleFound.producto
      );

      let totalStock = null;
      totalStock = stockFound.stock + saleFound.cantidad;

      if (totalStock < parseInt(cantidad)) {
        const result = {
          message: "Stock insuficiente",
          error: "Stock insuficiente para la actualizacion de cantidad",
        };

        return result;
      }
      if (totalStock > parseInt(cantidad)) {
        /**
         * ! actualizacion de datos en ventas y stock
         */

        saleFound.cantidad = parseInt(cantidad);
        const newMontoTotal = saleFound.subtotal * parseInt(cantidad);
        saleFound.montoTotal = newMontoTotal;

        stockFound.stock = totalStock - parseInt(cantidad);

        return saleFound;
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
    let db = databaseVentas;

    excelGenerator(db, name, res);
  } catch (error) {
    console.log(error.message);
  }
};
