import * as lowdb from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

export const createConnection = () => {
  // adapter son las configuraciones de la base de datos
  const adapter = new FileSync("db.json");

  const db = lowdb(adapter);
  db.defaults({ tasks: [] }).write();
};
