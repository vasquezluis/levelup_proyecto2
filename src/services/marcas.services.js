export const getBrandsService = () => {
  const brands = "Listado de todas marcas";

  return brands;
};

export const getActiveBrandsService = (id) => {
  const activeBrands = "Listado de marcas activas";

  return activeBrands;
};

export const getBrandService = (id) => {
  const brand = `Marca ${id}`;

  return brand;
};

export const createBrandService = (body) => {
  const newBrand = body;

  return newBrand;
};

export const updateBrandService = (id, { nombre, descripcion }) => {
  console.log(nombre, descripcion);

  const updatedBrand = `Marca ${id} actualizada con los datos: ${nombre} ${descripcion}`;

  return updatedBrand;
};

export const deleteBrandService = (id) => {
  const deletedBrand = `Marca ${id} eliminada`;

  return deletedBrand;
};
