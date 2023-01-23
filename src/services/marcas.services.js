import databaseMarcas from "../database/marcas.js";

export const getBrandsService = () => {
  const brands = databaseMarcas;

  return brands;
};

export const getActiveBrandsService = () => {
  const activeBrands = databaseMarcas.filter((item) => item.activo == true);

  return activeBrands;
};

export const getBrandService = (id) => {
  const brand = databaseMarcas.find((item) => item.id === parseInt(id));

  return brand;
};

export const createBrandService = ({ nombre, descripcion }) => {
  const id = Math.max(...databaseMarcas.map((item) => item.id)) + 1;

  const newBrand = {
    id,
    nombre,
    activo: true,
    descripcion,
  };

  databaseMarcas.push(newBrand);

  return newBrand;
};

export const updateBrandService = (id, { nombre, activo, descripcion }) => {
  const brandFound = databaseMarcas.find((item) => item.id === parseInt(id));

  const oldActive = brandFound.activo;

  let newActive = null;

  if (brandFound) {
    /**
     * * Crear nuevo valor de activo
     * ! activo pueder tener valor o no, segun los datos a actualizar
     */
    if (activo !== undefined) {
      newActive = activo;
    }
    if (activo == undefined) {
      newActive = oldActive;
    }

    nombre ? (brandFound.nombre = nombre) : nombre;
    brandFound.activo = newActive;
    descripcion ? (brandFound.descripcion = descripcion) : descripcion;

    return brandFound;
  } else {
    return null;
  }
};

export const deleteBrandService = (id) => {
  const brandFound = databaseMarcas.find((item) => item.id === parseInt(id));

  if (brandFound) {
    brandFound.activo = false;

    return brandFound;
  } else {
    return null;
  }
};
