import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * * dinamic routes
 */

// separating file name to extension
const cleanFileName = (filename: string) => {
  const file = filename.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).filter((filename) => {
  const cleanName = cleanFileName(filename);

  if (cleanName !== "index") {
    // dinamic ts import
    import(`./${cleanName}`).then((moduleRoute) => {
      console.log(`Route: ${cleanName}`);
      router.use(`/${cleanName}`, moduleRoute.router);
    });
  }
});

export { router };
