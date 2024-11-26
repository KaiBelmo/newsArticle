import { fileURLToPath } from "url";
import { dirname } from "path";

export const getDirName = (importMetaUrl) => {
  const filename = fileURLToPath(importMetaUrl);
  return dirname(filename);
}