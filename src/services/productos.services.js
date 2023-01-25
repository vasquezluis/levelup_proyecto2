import databaseProductos from "../database/productos.js";

export const getProductsService = () => {
  const products = databaseProductos;

  return products;
};

export const getActiveProductsService = () => {
  const activeProducts = databaseProductos.filter(
    (item) => item.activo == true
  );

  return activeProducts;
};

export const getProductService = (id) => {
  const product = databaseProductos.find((item) => item.id === parseInt(id));

  return product;
};

export const createProductService = ({
  nombre,
  descripcion,
  precio,
  marca,
  linea,
}) => {
  const id = Math.max(...databaseProductos.map((item) => item.id)) + 1;

  const newProduct = {
    id,
    nombre,
    activo: true,
    descripcion,
    precio: parseFloat(precio),
    marca: parseInt(marca),
    linea: parseInt(linea),
  };

  databaseProductos.push(newProduct);

  return newProduct;
};

export const updateProductService = (
  id,
  { nombre, activo, descripcion, precio, marca, linea }
) => {
  try {
    const productFound = databaseProductos.find(
      (item) => item.id === parseInt(id)
    );

    if (productFound) {
      /**
       * * Crear nuevo valor de activo
       * ! activo pueder tener valor o no, segun los datos a actualizar
       * ! el usuario puede enviar un string
       * ? convertir un string 'false' a booleano false
       */
      const oldActive = productFound.activo;
      let newActive = null;
      if (activo !== undefined) {
        newActive = activo === "true";
      }
      if (activo == undefined) {
        newActive = oldActive;
      }

      nombre ? (productFound.nombre = nombre) : null;
      productFound.activo = newActive;
      descripcion ? (productFound.descripcion = descripcion) : null;
      precio ? (productFound.precio = parseFloat(precio)) : null;
      marca ? (productFound.marca = parseInt(marca)) : null;
      linea ? (productFound.linea = parseInt(linea)) : null;

      return productFound;
    } else {
      return null;
    }
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteProductService = (id) => {
  const productFound = databaseProductos.find(
    (item) => item.id === parseInt(id)
  );

  if (productFound) {
    productFound.activo = false;

    return productFound;
  } else {
    return null;
  }
};
