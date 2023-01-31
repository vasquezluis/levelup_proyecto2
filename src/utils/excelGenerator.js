import { Workbook } from "excel4node";

export const excelGenerator = (db, name, res) => {
  try {
    let keys = Object.keys(db[0]);

    db = db.map((d) => {
      let id = d.id.toString();
      return {
        id,
        ...d,
      };
    });

    let wb = new Workbook();
    let ws = wb.addWorksheet(name);

    for (let i = 1; i <= keys.length; i++) {
      ws.cell(1, i).string(keys[i - 1]);
    }

    for (let i = 1; i <= db.length; i++) {
      for (let j = 1; j <= Object.values(db[0]).length; j++) {
        let data = Object.values(db[i - 1])[j - 1];

        if (typeof data == "string") {
          ws.cell(i + 1, j).string(data);
        } else {
          ws.cell(i + 1, j).number(data);
        }
      }
    }

    wb.write(`${name}.xlsx`, res);
  } catch (error) {
    console.log(error.message);
  }
};
