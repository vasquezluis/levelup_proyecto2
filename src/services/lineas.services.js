export const getLinesService = () => {
  const lines = "Listado de todas lineas";

  return lines;
};

export const getActiveLinesService = () => {
  const activeLines = "Listado de lineas activas";

  return activeLines;
};

export const getLineService = (id) => {
  const line = `Linea ${id}`;

  return line;
};

export const createLineService = (body) => {
  const newLine = body;

  return newLine;
};

export const updateLineService = (id, { nombre, descripcion }) => {
  console.log(nombre, descripcion);

  const updatedLine = `Linea ${id} actualizada con los datos: ${nombre} ${descripcion}`;

  return updatedLine;
};

export const deleteLineService = (id) => {
  const deletedLine = `Linea ${id} eliminada`;

  return deletedLine;
};
