const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  try {
    const list = await fs.readFile(contactsPath, "utf8");
    console.table(JSON.parse(list));
    return JSON.parse(list);
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  listContacts,
};
