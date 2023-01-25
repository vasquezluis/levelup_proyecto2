import databaseStock from "../database/stock.js";

export const getStocksService = () => {
  const stocks = databaseStock;

  return stocks;
};

export const getActiveStocksService = () => {
  const activeStocks = databaseStock.filter((item) => item.activo == true);

  return activeStocks;
};

export const getStockService = (id) => {
  const stock = databaseStock.find((item) => item.id === parseInt(id));

  return stock;
};

export const createStockService = ({ stock, producto }) => {
  /**
   * * check if stock already exists for a product
   */
  const stockExists = databaseStock.find(
    (item) => item.producto == parseInt(producto)
  );
  if (stockExists) {
    return "Conflict";
  }

  const id = Math.max(...databaseStock.map((item) => item.id)) + 1;

  const newStock = {
    id,
    stock: parseInt(stock),
    activo: true,
    producto: parseInt(producto),
  };

  databaseStock.push(newStock);

  return newStock;
};

export const updateStockService = (id, { stock, activo, producto }) => {
  try {
    const stockFound = databaseStock.find((item) => item.id === parseInt(id));

    /**
     * * check if stock already exists for a product
     */
    const stockExists = databaseStock.find(
      (item) => item.producto == parseInt(producto)
    );
    if (stockExists) {
      return "Conflict";
    }

    if (stockFound) {
      /**
       * * Crear nuevo valor de activo
       * ! activo pueder tener valor o no, segun los datos a actualizar
       * ! el usuario puede enviar un string
       * ? convertir un string 'false' a booleano false
       */
      const oldActive = stockFound.activo;
      let newActive = null;
      if (activo !== undefined) {
        newActive = activo === "true";
      }
      if (activo == undefined) {
        newActive = oldActive;
      }

      stock ? (stockFound.stock = parseInt(stock)) : null;
      stockFound.activo = newActive;
      producto ? (stockFound.producto = parseInt(producto)) : null;

      return stockFound;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error);
  }
};

export const deleteStockService = (id) => {
  const stockFound = databaseStock.find((item) => item.id === parseInt(id));

  if (stockFound) {
    stockFound.activo = false;

    return stockFound;
  } else {
    return null;
  }
};
