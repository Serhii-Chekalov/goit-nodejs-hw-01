const fs = require("fs").promises;
const path = require("path");

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
