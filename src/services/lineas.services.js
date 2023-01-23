import databaseLineas from "../database/lineas.js";

export const getLinesService = () => {
  const lines = databaseLineas;

  return lines;
};

export const getActiveLinesService = () => {
  const activeLines = databaseLineas.filter((item) => item.activo == true);

  return activeLines;
};

export const getLineService = (id) => {
  const line = databaseLineas.find((item) => item.id === parseInt(id));

  return line;
};

export const createLineService = ({ nombre, descripcion }) => {
  const id = Math.max(...databaseLineas.map((item) => item.id)) + 1;

  const newLine = {
    id,
    nombre,
    activo: true,
    descripcion,
  };

  databaseLineas.push(newLine);

  return newLine;
};

export const updateLineService = (id, { nombre, activo, descripcion }) => {
  const lineFound = databaseLineas.find((item) => item.id === parseInt(id));

  const oldActive = lineFound.activo;

  let newActive = null;

  if (lineFound) {
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

    nombre ? (lineFound.nombre = nombre) : null;
    lineFound.activo = newActive;
    descripcion ? (lineFound.descripcion = descripcion) : null;

    return lineFound;
  } else {
    return null;
  }
};

export const deleteLineService = (id) => {
  const lineFound = databaseLineas.find((item) => item.id === parseInt(id));

  if (lineFound) {
    lineFound.activo = false;

    return lineFound;
  } else {
    return null;
  }
};
