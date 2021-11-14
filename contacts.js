import fs from "fs/promises";
import path from "path";

const contactsPath = path.resolve("./db/contacts.json");
(async () => {
  try {
    const readFile = await fs.readFile(contactsPath, "utf8");

    const writeFile = `${readFile}`;
    await fs.writeFile(contactsPath, writeFile, "utf8");
    console.table(readFile);
  } catch (err) {
    console.error(err);
  }
})();
